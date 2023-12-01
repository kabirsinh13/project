<template>
    <div>
      <!-- <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      ></v-img>
   -->
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

      

      <div class="text-subtitle-1 text-medium-emphasis">Username</div>
  
        <v-text-field
            density="compact"
            placeholder="username"
            prepend-inner-icon="mdi-star-outline"
            variant="outlined"
            v-model="user.username"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="user.email"
        ></v-text-field>

  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <!-- <a
            class="text-caption text-decoration-none text-primary"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a> -->
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          v-model="user.password"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <!-- <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text> -->
        </v-card>
  
        <v-btn
          block
          class="mb-8"
          color="primary"
          size="large"
          variant="tonal"
          @click="senduserdata"
        >
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          You already have account 
          <a
            class="text-primary text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            @click="signin"
          >
            Log in now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  <script>
    const axios = require('axios');
    export default {
      data: () => ({
        visible: false,
        user:{
          username:'',
          email:'',
          password:'',
        }
      }),
      methods:{
        signin(){
          this.$router.replace('/login')
        },
        async senduserdata(){
          // console.log(this.user.username);
          // console.log(this.user.email);
          // console.log(this.user.password);
          // const data=new FormData();

          // data.append('name',this.user.username);
          // data.append('email',this.user.email);
          // data.append('password',this.user.password);
          // console.log(data);
          await axios.post('/Signup', {
            name: this.user.username,
            email:this.user.email,
            password:this.user.password
          }).then((res)=>res)
          .catch(err=>console.log(err))
          // .then(function (response){
          //   console.log(response);
          //   this.$router.replace('/');
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });
          // const result = await axios.post('/Signup',data);
        }
      }
    }
  </script>