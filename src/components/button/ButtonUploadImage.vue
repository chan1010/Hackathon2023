<script>
import feather from "feather-icons";
// import { publicRequest } from "../../services/requestMethod";
import axios from "axios";
export default {
  mounted() {
    feather.replace();
  },
  methods: {
    async handleFileUpload() {
      
      var file = this.$refs.file.files[0];
      console.log(file)
      await axios({
        method: 'post',
        url: `https://4a1cwmmf9a.execute-api.ap-southeast-1.amazonaws.com/staging/medicine`,
        data: {
          image: file
        },
        headers: { 
          "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        console.log(res);
      });

      console.log(this.file);
    },
  },
};
</script>

<template>
  <div class="content-button">
    <label class="btn-upload">
      <input type="file" ref="file" id="upload_file"  v-on:change="handleFileUpload"/><i data-feather="plus-circle" width="3rem" height="3rem"></i>
    </label>
  </div>
  <p class="line-clamp-2 font-general-semibold text-sm mb-2" style="
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 18px;
        margin: 32px 0;
      ">
    Upload OR choose image form below
  </p>
</template>

<style scoped>
.content-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

label.btn-upload {
  height: 252px;
  width: 380px;
  background-color: rgba(128, 128, 128, 0.137);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
input#upload_file{
  opacity: 0;
  z-index: -1;
  position: absolute;
}
</style>
