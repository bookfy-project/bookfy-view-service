<template>
  <img class="logo" src="../assets/logo.png"/>
  <h1>LogIn</h1>

  <div class="login-form">
    <label>E-mail</label>
    <input type="email" v-model="email" placeholder="Enter your e-mail">

    <label>Password</label>
    <input type="password" v-model="password" placeholder="Enter your password">

    <button v-on:click="login" >Login</button>

    <p>
      <router-link to="/sing-up" >Sing Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "LoginPage",

  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    async function login() {
      let result = await axios.get(
        `http://localhost:3000/users?${email.value}=email$password=${password.value}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        router.push({ name: "Home"});
      }
    }

    onMounted(() => {
      let user = localStorage.getItem("user-info");

      if (user) {
        router.push({ name: 'Home' });
      }
    });

    return {
      email,
      password,
      login,
    };
  }
};
</script>

<style>
  .logo {
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
  }

  h1 {
    text-align: center;
    font-size: 28px;
    margin-top: 1rem;
  }

  .login-form {
    width: 300px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    text-align: center;
  }

  .login-form label {
    display: block;
    font-weight: bold;
    margin-top: 10px;
  }

  .login-form input {
    width: 100%;
    height: 30px;
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .login-form button {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    background-color: #1976d2;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .login-form button:hover {
    background-color: #1565c0;
  }

  .login-form p {
    margin-top: 10px;
  }

  .login-form p router-link {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
  }
</style>
