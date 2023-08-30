<script>
import feather from "feather-icons";
export default {
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <div class="content-button">
    <label class="community_file">

    </label>
    <label class="btn-upload">
      <input type="file" id="upload_file" /><i data-feather="plus-circle" width="3rem" height="3rem"></i>
    </label>
  </div>
  <p class="line-clamp-2 font-general-semibold text-sm mb-2" style="
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 18px;
        margin-bottom: 32px;
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
  margin-bottom: 16px;
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
