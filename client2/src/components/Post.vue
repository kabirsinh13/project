<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-icon color="grey" style="padding-bottom: 10px;" @click="homepage" icon="mdi-close"></v-icon>

                    <v-img :src="imgsrc"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn color="primary" >{{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <!-- <v-btn color="success" >Edit</v-btn> -->
                                <v-btn @click="deletepost" color="red" >delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-title class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                        <p>{{ post.body }}</p>
                    </v-card-text>
                    <v-card-subtitle class="grey--text d-flex justify-end">
                        <p>Posted by {{ name }}</p>
                    </v-card-subtitle>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const axios = require('axios');
    export default{
        props:['image'],
        data(){
            return{
                post:{},
                publicPath: process.env.BASE_URL,
                name:"",
                imgsrc:''

            };
        },
        async created(){
            const id=this.$route.params.id
            const result=await axios.get('/allpost/'+id);
            
            this.post=result.data.post[0];
            this.name=this.post.postedBy.name;
            // console.log(this.image);
            const imageData = this.post.file[0].buffer.toString('base64')
            this.imgsrc = `data:image/jpeg;base64,${imageData}`
            // console.log(this.imgsrc)

            // console.log(this.post[0])
        },
        methods:{
            homepage(){
                this.$router.replace('/')
            },
            async deletepost(){ 
                const id=this.$route.params.id;
                const result = await axios.delete('/deletepost/'+id);
                this.$router.push({name:"home",params:{message:result.message}});
            }
        }
    }
</script>
