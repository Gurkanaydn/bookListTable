<template>
  <div class="form-area card border p-2">
    <h2 class="text-center">Add new book</h2>
    <div class="mb-3">
      <label for="bookName" class="form-label">Kitap ismi</label>
      <input type="text" v-model="bookData.bookName" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="bookType" class="form-label">Kitap türü</label>
      <input type="text" v-model="bookData.bookType" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="writerName" class="form-label">Yazar adı</label>
      <input type="text" v-model="bookData.writerName" class="form-control" />
    </div>

    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-secondary" @click="cancelBtn">İptal</button>
      <button class="btn btn-sm btn-primary" @click="addBtn">Ekle</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            bookData: {
                bookName: null, 
                bookType: null,
                writerName: null
            }
        }
    },
    methods: {
        cancelBtn() {
            this.$router.push("/");
        },
        async addBtn() {
            await axios.post("http://localhost:3000/books", this.bookData);
            this.$router.push("/");
        },
    },
};
</script>
