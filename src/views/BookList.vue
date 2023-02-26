<template>
  <div>
    <div class="text-center">
      <h2>Book List</h2>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="goToNewBook">
        + Yeni kitap ekle
      </button>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Kitap ismi</th>
            <th scope="col">Kitap türü</th>
            <th scope="col">Yazar adı</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bookList in bookLists" :key="bookList.id">
            <th scope="col">{{ bookList.id }}</th>
            <th scope="col" bookName="bookList.bookName">{{ bookList.bookName }}</th>
            <th scope="col">{{ bookList.bookType }}</th>
            <th scope="col">{{ bookList.writerName }}</th>
            <th scope="col"><button class="btn btn-sm btn-primary" @click="updateBook(bookList.id)">Düzenle</button></th>
            <th scope="col"><button class="btn btn-sm btn-danger" @click="deleteBook(bookList.id)">Sil</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookLists: [],
    };
  },
  methods: {
    goToNewBook() {
      this.$router.push("/newBook");
    },
    deleteBook(bookId){
        axios.delete(`http://localhost:3000/books/${bookId}`).then((deletedBook) => {
            if(deletedBook.status == 200){
                axios.get("http://localhost:3000/books").then((bookList) => {
                    this.bookLists = bookList.data;
                });
            }
        })
    },
    updateBook(bookId){
      this.$router.push(`/updateBook/${bookId}`);
    },
  },
  created() {
    axios.get("http://localhost:3000/books").then((bookList) => {
      this.bookLists = bookList.data;
    });
  },
};
</script>
