<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>add new post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input @change='selectFile' :rules="rules"   show-size counter multiple label="Select Image" ></v-file-input>
                        <v-btn type="submit" class="mt-3" color="primary">Add post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
        const axios = require ('axios');
    export default{

        data(){
            return{
                rules:[(value)=>!!value || 'This field is req'],
                post:{
                    title:"",
                    body:"",
                    category:"",
                    content:"",
                    image:'',
                },
                // image:[],
            };
        },
        methods:{
            selectFile(event){
               // console.log(event.target.files[0]);
                this.post.image=event.target.files[0];
                 console.log(this.post.image)

            },
            async submitForm(){
                
                // this.post.image=await axios.post('/upload',this.image);
                // const data={
                //     title:this.post.title,
                //     category:this.post.category,
                //     body:this.post.content,
                //     image:this.post.image,
                // };
                // console.log(data.image);
                // console.log(this.post)
                // const data = new FormData();
                // data.append('file',this.post.image);
                // data.append('title',this.post.title);
                // data.append('body',this.post.content);
                // data.append('category',this.post.category);


                const formdata = new FormData() 
           console.log(this.post)
           formdata.append('title',this.post.title)
           formdata.append('body',this.post.content)
           formdata.append('category',this.post.category)
           formdata.append('photos',this.post.image)
        //    formdata.append('content',this.post.)
           
           
        //  await fetch('http://localhost:5000/createPost',{
        //     method:'POST',
        //     body:formdata
        //  })
                //     console.log(data)
                // if(this.$refs.form.validate()){
                    const response = await axios.post("/createPost",formdata);
                    this.$router.push({name:"home",params:{message:response.message}});
                // }

            }
        }   
    }
</script>