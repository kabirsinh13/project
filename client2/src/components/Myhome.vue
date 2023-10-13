<template>
<h1>sfdjsda;lkfj</h1>
</template>

<script>
  import axios from 'axios';
  export default{
    name:"Home",
    data(){
      return{
        posts:[],
      };
    },
    methods:{
      async created(){
        this.post=await axios.get('/allpost');
        console.log(this.post.data.post)
      },
    },
  }
</script>