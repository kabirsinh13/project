<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`${publicPath}ganga.jpg`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color = "primary">{{ post.title }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success" >Edit</v-btn>
                                <v-btn color="red" >delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitles class="headline">
                        <h3>{{ post.body }}</h3>
                    </v-card-subtitles>
                    <v-card-text class="grey--text">
                        <p>{{ post.title }}</p>
                        <p>{{ post.name }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const axios = require('axios');
    export default{
        data(){
            return{
                post:{},
                publicPath: process.env.BASE_URL

            };
        },
        async created(){
            const id=this.$route.params.id
            const result=await axios.get('/allpost/'+id);
            this.post=result.data.post[0];
            console.log(this.post[0])
        }
    }
</script>
