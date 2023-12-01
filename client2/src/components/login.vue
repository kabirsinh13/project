<template>
    <div>
     
      <div   
      class=" Heading 3 text-h3 mx-auto my-6 d-flex justify-center text-primary"
    
      max-width="228">
          DestiShare
      </div>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          v-model="user.email"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="user.passowrd"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          
        </v-card>
  
        <v-btn
          block
          class="mb-8"
          color="primary"
          size="large"
          variant="tonal"
          @click="sendlogindata"
        >
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          New user? 
          <a
            class="text-primary text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            @click="signup"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
import axios from 'axios'
export default {
  data: () => ({
    visible: false,
    user:{
      email:"",
      passowrd:'',
    },
  }),
  methods:{
    signup(){
      this.$router.replace('/signup')
    },
    async sendlogindata(){
      // console.log(this.user.email)
      // console.log(this.user.passowrd)
      await axios.post('/Signin',{
        email: this.user.email,
        password: this.user.passowrd
      }).then((res)=>{
        console.log(res);
        this.$router.replace('/');
      }).catch(err=>console.log(err));
    }
  }
}
  </script>



