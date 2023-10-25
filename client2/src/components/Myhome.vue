<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name:'post',params:{ id: post._id} }">
          <!-- <v-img height="250" :src="`/${post.file}`"></v-img> -->
          <v-img :src="imgsrc(post)" height="250" :image="post.file" ></v-img>
          <v-btn small outlined color = "primary" text>{{ post.category }}</v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.body.substring(0,30) + '...'}}</p>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
  export default{
    name:"Home",
    data(){
      return{
        posts:[], 
        publicPath: process.env.BASE_URL,
        img:''
      };
    },
    async created(){
      // console.log(this.publicPath)
      const result =await axios.get('/allpost');
      this.posts=result.data.post;
      // console.log(this.posts);
      // this. =await axios.get(`/image/`)
      // const imageData = this.image[0].buffer.toString('base64')
      // this.imgsrc = `data:image/jpeg;base64,${imageData}`
    },
    methods:{
      myfile(file){
        const ii=file[0].buffer.toString('base64');
        this.imgsrc=`data:image/jpeg;base64,${ii}`;
        console.log(this.imgsrc);
      },
      imgsrc:function(post){
          const imageData = post.file[0].buffer.toString('base64')
          return `data:image/jpeg;base64,${imageData}`
      }
    }
  }
</script>