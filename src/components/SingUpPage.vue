<template>
  <div>
    <img class="logo" src="../assets/logo.png"/>
    <h1>Sing Up</h1>

    <div class="register-form">
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Enter your name">

      <label>E-mail</label>
      <input type="email" v-model="email" placeholder="Enter your e-mail">

      <label>Password</label>
      <input type="password" v-model="password" placeholder="Enter you password">

      <button v-on:click="singUp">Sing Up</button>

      <p>
        <router-link to="/login" >Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "SingUpPage",

  setup () {
    const router = useRouter();
    const name = ref('');
    const email = ref('');
    const password = ref('');

    async function singUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: name.value,
        email: email.value,
        password: password.value
      });

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
      name,
      email,
      password,
      singUp
    };
  }
}
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
    font-size: 28px;
    margin-top: 1rem;
  }

  .register-form {
    width: 300px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    text-align: center;
  }

  .register-form label {
    display: block;
    font-weight: bold;
    margin-top: 10px;
  }

  .register-form input {
    width: 100%;
    height: 30px;
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .register-form button {
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

  .register-form button:hover {
    background-color: #1565c0;
  }

  .register-form p {
    margin-top: 10px;
  }

  .register-form p router-link {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
  }
</style>
