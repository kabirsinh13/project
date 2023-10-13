<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name:'post',params:{ id: post._id} }">
          <v-img height="250" :src="`${publicPath}ganga.jpg`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.title }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.body + '...'}}</p>
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
        publicPath: process.env.BASE_URL
      };
    },
    async created(){
      // console.log(this.publicPath)
      const result =await axios.get('/allpost');
      this.posts=result.data.post
      },
  }
</script>