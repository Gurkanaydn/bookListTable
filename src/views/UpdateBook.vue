<template>
  <div class="container">
    <div class="form-area card border p-2">
      <h2 class="text-center">Update a book</h2>
      <div class="mb-3">
        <label for="bookName" class="form-label">Kitap ismi</label>
        <input type="text" class="form-control" v-model="bookData.bookName"/>
      </div>
      <div class="mb-3">
        <label for="bookType" class="form-label">Kitap türü</label>
        <input type="text" class="form-control" v-model="bookData.bookType"/>
      </div>
      <div class="mb-3">
        <label for="writerName" class="form-label">Yazar adı</label>
        <input type="text" class="form-control" v-model="bookData.writerName"/>
      </div>
      <p>{{ bookName }}</p>
      <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-secondary" @click="cancelBtn">İptal</button>
        <button class="btn btn-sm btn-primary" @click="updateBtn">Güncelle</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            bookData: {},
        }
    },
    created(){
        axios.get(`http://localhost:3000/books/${this.$route.params.id}`).then((bookList) => {
            this.bookData = bookList.data;
        });
    },
    methods: {
        cancelBtn() {
            this.$router.push("/");
        },
        async updateBtn() {
            await axios.patch(`http://localhost:3000/books/${this.$route.params.id}`, this.bookData);
            this.$router.push("/");
        }
    },
};
</script>