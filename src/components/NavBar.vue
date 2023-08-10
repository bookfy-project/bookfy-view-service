<template>
  <div id="nav-bar">
    <div class="bookfy">
      <img class="bookfy-logo" src="../assets/logo.png"/>
      <h1>Bookfy</h1>
    </div>
    <div id="nav-bar-links">
      <router-link to="/">Home</router-link>
      <router-link to="/add-new-book">Add New Book</router-link>
      <router-link to="/login" >Login</router-link>
      <a href="#" v-on:click="logout">Log Out</a>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: 'HomePage',

  setup() {
    const router = useRouter();

    function logout() {
      localStorage.clear();
      router.push({ name: 'LoginPage' })
    }

    return {
      logout
    };
  },
};
</script>

<style>
  #nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
  }

  .bookfy {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .bookfy-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .bookfy h1 {
    font-size: 24px;
    margin: 0;
  }

  #nav-bar-links {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }

  #nav-bar-links a {
    margin-right: 20px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  #nav-bar-links a:hover {
    color: #1976d2;
  }
</style>
