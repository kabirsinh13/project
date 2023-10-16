<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>add new post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input @change='selectFile' :rules="rules" show-size counter multiple label="Select Image"></v-file-input>
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
                    image:"",
                },
                image:"",
            };
        },
        methods:{
            // selectFile(file){
            //     this.image=file[0];
            // }
            async submitForm(){
                // const formData = new FormData() ;
                // console.log(this.post.title);
                // console.log(this.post.category);
                // console.log(this.post.content);
                // const requestOptions = {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //         // "auth-token": state.token
                //     },
                //     body: JSON.stringify({
                //         title:this.post.title,
                //         category:this.post.category,
                //         body:this.post.content
                //     }) 
                //     }
                // fetch("http://localhost:5000/createPost", 
                //     requestOptions
                // )
                const data={
                    title:this.post.title,
                    category:this.post.category,
                    body:this.post.content
                };
                await axios.post("/createPost",data);

            }
        }   
    }
</script>