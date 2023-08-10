<template>
  <NavBar />
  <h1>Hello {{ name }}, Welcome on Update Book Page!</h1>

  <form class="update-book-form">
    <label>Registration Number</label>
    <input type="text" name="registrationNumber" v-model="book.registrationNumber" />

    <label>Title</label>
    <input type="text" name="title" v-model="book.title" />

    <label>Subject</label>
    <input type="text" name="subject" v-model="book.subject" />

    <label>Author</label>
    <input type="text" name="author" v-model="book.author" />

    <label>Publication Date</label>
    <input type="text" name="publicationDate" v-model="book.publicationDate" />

    <button v-on:click="updateBook" >Update</button>
  </form>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavBar from "./NavBar.vue";

export default {
  name: "UpdateBookPage",

  components: {
    NavBar
  },

  setup() {
    const router = useRouter();
    const name = ref('');
    const book = ref({
      registrationNumber: '',
      title: '',
      subject: '',
      author: '',
      publicationDate: ''
    });

    async function updateBook() {
      const result = await axios.put("http://localhost:3000/books/" + router.params.id, {
        id: book.value.id,
        registrationNumber: book.value.registrationNumber,
        title: book.value.title,
        subject: book.value.subject,
        author: book.value.author,
        publicationDate: book.value.publicationDate,
      });

      if(result.status == 200) {
        router.push({ name: 'Home' });
      }
    }

    onMounted(() => {
      let user = localStorage.getItem("user-info");
      name.value = JSON.parse(user).name;

      if (!user) {
        router.push({ name: 'SingUp' });
      }

      const result = async () => { await axios.get('http://localhost:3000/books/' + router.params.id)};
      book.value = result.data;
    });

    return {
      name,
      book,
      updateBook
    }
  },
}
</script>

<style>
  h1 {
    text-align: start;
    margin: 2rem;
    margin-bottom: 0.5rem;
    padding-left: 10rem;
  }

  .update-book-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  .update-book-form label {
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: bold;
    align-self: flex-start;
  }

  .update-book-form input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
  }

  .update-book-form button {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #1976d2;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .update-book-form button:hover {
    background-color: #1565c0;
  }
</style>
