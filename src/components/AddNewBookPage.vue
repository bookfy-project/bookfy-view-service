<template>
  <NavBar />
  <h2>Hello {{ name }}, Welcome on Add New Book Page!</h2>

  <form class="update-restaurant-form">
    <label>Registration Number</label>
    <input type="text" name="registrationNumber"  v-model="book.registrationNumber" placeholder="Enter registration number"/>

    <label>Title</label>
    <input type="text" name="title" v-model="book.title" placeholder="Enter book title"/>

    <label>Subject</label>
    <input type="text" name="subject" v-model="book.subject" placeholder="Enter book description"/>

    <label>Author</label>
    <input type="text" name="author" v-model="book.author" placeholder="Enter the author of the book"/>

    <label>Publication Date</label>
    <input type="text" name="publicationDate" v-model="book.publicationDate" placeholder="Enter the publication date of the book"/>

    <button v-on:click="addNewBook">Save</button>
  </form>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from "./NavBar.vue";

export default {
  name: "AddNewBookPage",
  components: {
    NavBar
  },

  setup() {
    const router = useRouter();
    const user = JSON.parse(localStorage.getItem("user-info"));
    const name = ref('');
    const book = ref({
      registrationNumber: '',
      title: '',
      subject: '',
      author: '',
      publicationDate: ''
    });

    async function addNewBook() {
      const result = await axios.post("http://localhost:3000/books/", {
        registrationNumber: book.value.registrationNumber,
        title: book.value.title,
        subject: book.value.subject,
        author: book.value.author,
        publicationDate: book.value.publicationDate,
      });

      if (result.status == 200) {
        router.push({ name: 'HomePage' });
      }
    }

    if (!user) {
      router.push({ name: 'SignUp' });
    } else {
      name.value = user.name;
    }

    return {
      name,
      book,
      addNewBook
    };
  }
}
</script>

<style>
  h2 {
    text-align: start;
    margin: 2rem;
    margin-bottom: 0.5rem;
    padding-left: 10rem;
  }
  .update-restaurant-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  .update-restaurant-form label {
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: bold;
    align-self: flex-start;
  }

  .update-restaurant-form input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
  }

  .update-restaurant-form button {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>