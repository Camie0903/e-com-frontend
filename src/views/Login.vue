<template>
  <div class="Login">
    <h1 class="well">Welcome Please Login</h1>
    <div class="container">
    <form @submit.prevent="login" >
      
      <input class="login-form-email" type="text" v-model="email" placeholder="Email" />
     
    
      <input class="login-form-password" type="text" v-model="password" placeholder="Password" />
     
      <div>
      <button type="submit" id="login-btn">Login</button>
      </div>
    </form>
    </div>
    <div v-if="users">Welcome {{ users.FullName }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
.well{
  /* margin-left: 600px; */
  margin-bottom: 30px;
}
.Login {
  padding-top: 80px;
  height: 80vh;
}

.container {
  margin: auto;
  padding: auto;
  width: 350px;
  height: 390px;
  background-color: rgba(167, 165, 196, 0.3);
  backdrop-filter: blur(3px);
  border: 2px solid white;
  border-radius: 10px;
  background-clip: padding-box;
}

.login-form-email{
  margin: 35px;
   border: 0;
  outline:0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

.login-form-password{
  margin: 35px;
    border: 0;
  outline:0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

#login-btn {
  margin: 35px;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 20px;
}




</style>
