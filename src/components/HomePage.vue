<template>
  <div>
    <NavBar />
    <h2>Hello {{ name }}, Welcome on Home Page!</h2>

    <table border="1" id="books-table">
    <tr id="table-titles">
      <th>Id</th>
      <th>Registration Number</th>
      <th>Title</th>
      <th>Subject</th>
      <th>Author</th>
      <th>Publication Date</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in books" :key="item.id">
      <td> {{ item.id }}</td>
      <td> {{ item.registrationNumber }}</td>
      <td> {{ item.title }}</td>
      <td> {{ item.subject }}</td>
      <td> {{ item.author }}</td>
      <td> {{ item.publicationDate }}</td>
      <td id="actions">
        <router-link :to="'/update-books/' + item.id" > Update </router-link>
        <button v-on:click="deleteBook(item.id)" > Delete </button>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from "./NavBar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar
  },

  setup() {
    const router = useRouter();
    const name = ref('');
    const books = ref([]);

    async function deleteBook(id) {
      let result = await axios.delete('http://localhost:3000/books/' + id);

      if (result.status == 200) {
        loadData();
      }
    }

    async function loadData() {
      let user = localStorage.getItem("user-info");
      name.value = JSON.parse(user).name;

      if (!user) {
        router.push({ name: 'SingUp' });
      }

      let result = await axios.get('http://localhost:3000/books');
      books.value = result.data;
    }

    onMounted(() => {
      loadData();
    });

    return {
      name,
      books,
      deleteBook
    };
  },
}
</script>

<style>
  /* Estilos gerais */
  #books-table {
    margin: 2rem auto;
    width: 90%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e0e0e0;
  }

  /* Estilos para a primeira linha da tabela (títulos) */
  #table-titles {
    font-weight: bold;
  }

  #actions {
    display: flex;
    justify-content: space-around;
  }

  /* Estilos para os botões dentro das células */
  td button {
    background-color: #e57373;
    border: none;
    color: white;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }

  td button:hover {
    background-color: #d32f2f;
  }

  /* Estilos para os links de rota dentro das células */
  td router-link {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
  }
</style>