<template>\
    <div class="vertical-outer-layer">
  <div class="vertical-inner-layer"></div>
</div>
<!-- Login -->
<div class="Forms">
<div class="container-login">
  <div class="login-box">
    <div class="login">
      <h1>Sign In</h1>
      <input id="username" type="text" placeholder="Email" />
      <label for="username" class="login-input-icon">
        <i class="fa fa-user"></i>
      </label>
      <input id="password" type="password" placeholder="Password" />
      <label for="password" class="login-input-icon">
        <i class="fa fa-lock"></i>
      </label>
      <div class="login-remember">
        <label class="login-checkbox">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <span class="login-remember-text">
          &nbsp;&nbsp;Remember
        </span>
      </div>
      <button>Login</button>
      <span class="login-separator"></span>
    </div>
  </div>
</div>
  
  <!-- Register -->
<div class="container-register">
  <div class="register-box">
    <div class="register">
      <h1>Sign Up</h1>
      <input id="username" type="text" placeholder="Full Name" />
       <label for="username" class="register-input-icon">
         <i class="fa fa-id-badge"></i>
      </label>
      <input id="username" type="text" placeholder="Email" />
      <label for="username" class="register-input-icon">
        <i class="fa fa-user"></i>
      </label>
      <input id="password" type="password" placeholder="Password" />
      <label for="password" class="register-input-icon">
        <i class="fa fa-lock"></i>
      </label>
      <div class="register-remember">
        <label class="register-checkbox">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <span class="register-remember-text">
          &nbsp;&nbsp;Remember
        </span>
      </div>
      <button>Register</button>
      <span class="register-separator"></span>
    </div>
  </div>
</div>
</div>
    <div v-if="users">
        Welcome {{ users.FullName }}
    </div> 
</template>
<script>
export default {
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    data() {
        return{
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
           this.$store.dispatch("login", { email: this.email, password: this.password })
        },
    }, 
};
</script>
<style scoped>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
.Forms{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
}
.container-login {
  height: 100vh;
  display: flex;
  flex-flow: column;
}

.header-login {
  width: 100%;
  background: #0b0121;
  border-bottom-style: solid;
  border-bottom-width: thick;
  border-bottom-color: #633fb3;
}

.header-login-box a {
  text-decoration: none;
  color: #fff;
  font-family: serif;
}

.header-login-box a:hover {
  color: #633fb3;
}

.header-login-box {
  display: flex;
  padding: 15px 50px;
}

.header-text-position {
  flex: auto;
}

.login-box {
  display: flex;
  justify-content: center;
  top: 50%;
  position: sticky;
  animation: box-login 2s;
}

@keyframes box-login {
  0% {
    transform: rotateY(100deg);
  }

  50%,
  100% {
    transform: rotateY(0deg);
  }
}

.login {
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 20px;
  background-image: linear-gradient(-218deg, #0b0121 50%, #231444 66%);
  border-radius: 15px;
  box-shadow: 0 0 3px #0b012185, 0 0 5px #0b012185, 0 0 15px #0b012185,
    0 0 40px #0b012185;
  margin-bottom: 66%;
}

.login h1 {
  text-align: center;
  font-size: 26px;
  padding: 20px;
}

.login input {
  display: inherit;
  flex-direction: inherit;
  padding: 10px;
}

.login-input-icon {
  position: relative;
  align-self: flex-end;
  top: -38px;
  right: 15px;
  color: #633fb3;
  display: block;
}

::placeholder {
  color: rgb(136, 136, 136);
}

.login input[type="text"],
input[type="password"] {
  margin-bottom: 1em;
  background: rgba(255, 255, 255, 0);
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #633fb3;
  border-radius: 15px;
  color: #fff;
  animation: login-input-focus-initial 1s normal forwards;
  padding-right: 30px;
}

.login input[type="text"]:focus,
input[type="password"]:focus {
  animation: login-input-focus 1s normal forwards;
}

.login-remember {
  display: flex;
  margin-bottom: 1em;
  align-items: center;
}

.login-remember-text {
  align-self: flex-start;
  font-family: serif;
}

.login-checkbox {
  color: rgb(136, 136, 136);
  width: 15px;
  height: 15px;
  display: inherit;
}

.login-checkbox input {
  cursor: pointer;
  display: none;
}

.checkmark {
  height: 15px;
  width: 15px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.login input:checked ~ .checkmark {
  background-color: #633fb3;
}

.checkmark:after {
  content: "";
  display: none;
}

.login-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.login .checkmark:after {
  left: 5px;
  top: 2px;
  width: 3px;
  height: 5px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  position: relative;
}

.login button {
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(-218deg, #633fb3 70%, #c5abff 92%);
  animation: login-button 1s normal forwards;
}

.login button:hover  {
  background-image: linear-gradient(-218deg, #4c2d8f 70%, #ae95e4 92%);
  animation: login-button-hover 1s normal forwards;
}

.login-social-media {
  display: inherit;
  justify-content: center;
  margin-top: 15px;
}

.login-social-media img {
  padding: 0 5px;
  cursor: pointer;
}

.login-separator {
  width: 70%;
  margin: auto;
  height: 2px;
  background: #633fb3;
  margin-top: 25px;
}


@keyframes login-input-focus-initial {
  0% {
    font-size: 12px;
  }

  50%,
  100% {
    font-size: 14px;
  }
}

@keyframes login-input-focus {
  0% {
    font-size: 14px;
  }

  50%,
  100% {
    font-size: 12px;
  }
}

@keyframes login-button {
  0% {
    background-size: 200%;
  }

  50%,
  100% {
    background-size: 100%;
  }
}

@keyframes login-button-hover {
  0% {
    background-size: 100%;
  }

  50%,
  100% {
    background-size: 200%;
  }
}

/* line */
.vertical-outer-layer {
  width: 1px;
  height: 100vh;
  margin-left: 50%;
  position: fixed;
  overflow: hidden;
}
.vertical-inner-layer {
  position: absolute;
  width:100%;
  height: 72%;
  background: #000;
  bottom: 5%;
  top: 5%;
  box-shadow: 0px 0px 20px 10px #000;
/*   align:center; */
}

/* Register */
.container-register {
  height: 100vh;
  display: flex;
  flex-flow: column;
}

.header-register {
  width: 100%;
  background: #0b0121;
  border-bottom-style: solid;
  border-bottom-width: thick;
  border-bottom-color: #633fb3;
}

.header-register-box a {
  text-decoration: none;
  color: #fff;
  font-family: serif;
}

.header-register-box a:hover {
  color: #633fb3;
}

.header-register-box {
  display: flex;
  padding: 15px 50px;
}

.header-text-position {
  flex: auto;
}

.register-box {
  display: flex;
  justify-content: center;
  top: 50%;
  position: sticky;
  animation: box-login 2s;
}

@keyframes box-register {
  0% {
    transform: rotateY(100deg);
  }
  50%,
  100% {
    transform: rotateY(0deg);
  }
}

.register {
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 20px;
  background-image: linear-gradient(-218deg, #0b0121 50%, #231444 66%);
  border-radius: 15px;
  box-shadow: 0 0 3px #0b012185, 0 0 5px #0b012185, 0 0 15px #0b012185,
    0 0 40px #0b012185;
  margin-bottom: 50%;
}

.register h1 {
  text-align: center;
  font-size: 26px;
  padding: 20px;
}

.register input {
  display: inherit;
  flex-direction: inherit;
  padding: 10px;
}

.register-input-icon {
  position: relative;
  align-self: flex-end;
  top: -38px;
  right: 15px;
  color: #633fb3;
  display: block;
}

::placeholder {
  color: rgb(136, 136, 136);
}

.register input[type="text"],
input[type="password"] {
  margin-bottom: 1em;
  background: rgba(255, 255, 255, 0);
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #633fb3;
  border-radius: 15px;
  color: #fff;
  animation: register-input-focus-initial 1s normal forwards;
  padding-right: 30px;
}

.register input[type="text"]:focus,
input[type="password"]:focus {
  animation: login-input-focus 1s normal forwards;
}

.register-remember {
  display: flex;
  margin-bottom: 1em;
  align-items: center;
}

.register-remember-text {
  align-self: flex-start;
  font-family: serif;
}

.register-checkbox {
  color: rgb(136, 136, 136);
  width: 15px;
  height: 15px;
  display: inherit;
}

.register-checkbox input {
  cursor: pointer;
  display: none;
}

.checkmark {
  height: 15px;
  width: 15px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.register input:checked ~ .checkmark {
  background-color: #633fb3;
}

.checkmark:after {
  content: "";
  display: none;
}

.register-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.register .checkmark:after {
  left: 5px;
  top: 2px;
  width: 3px;
  height: 5px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  position: relative;
}

.register button {
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(-218deg, #633fb3 70%, #c5abff 92%);
  animation: login-button 1s normal forwards;
}

.register button:hover  {
  background-image: linear-gradient(-218deg, #4c2d8f 70%, #ae95e4 92%);
  animation: login-button-hover 1s normal forwards;
}

.register-social-media {
  display: inherit;
  justify-content: center;
  margin-top: 15px;
}

.register-social-media img {
  padding: 0 5px;
  cursor: pointer;
}

.register-separator {
  width: 70%;
  margin: auto;
  height: 2px;
  background: #633fb3;
  margin-top: 25px;
}


@keyframes register-input-focus-initial {
  0% {
    font-size: 12px;
  }
  50%,
  100% {
    font-size: 14px;
  }
}

@keyframes register-input-focus {
  0% {
    font-size: 14px;
  }
  50%,
  100% {
    font-size: 12px;
  }
}

@keyframes register-button {
  0% {
    background-size: 200%;
  }
  50%,
  100% {
    background-size: 100%;
  }
}

@keyframes register-button-hover {
  0% {
    background-size: 100%;
  }
  50%,
  100% {
    background-size: 200%;
  }
}
</style>