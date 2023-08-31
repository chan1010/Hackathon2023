<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      med_image: '',
      isShow: false
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.med_image = URL.createObjectURL(file)
      this.isShow = true
    },
    removeImage() {
      this.med_imag = ''
      this.isShow = false
    }
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <div class="content-button">
    <label class="btn-upload">
      <div class="empty-img" v-if="!isShow">
        <input type="file" id="upload_file" @change="handleFileUpload" /><svg xmlns="http://www.w3.org/2000/svg"
          width="21" height="21" viewBox="0 0 21 21">
          <path data-name="패스 1092" d="M1 5h20" transform="translate(-.5 5.5)"
            style="fill:none;stroke:gray;stroke-linecap:round;stroke-linejoin:round" />
          <path data-name="패스 1093" d="M5 21V1" transform="translate(5.5 -.5)"
            style="fill:none;stroke:gray;stroke-linecap:round;stroke-linejoin:round" />
        </svg>
        <span>Upload</span>
      </div>
      <div class="image preview" style="margin-top: 0" :class="{ none: !isShow }">
        <img class="thumbnail-preview" :src="med_image" alt="" />
        <button type="button" class="remove-img" @click="removeImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21">
            <path data-name="패스 3656"
              d="M17.134 7.468s-.574 8.575-.907 12.187c-.159 1.725-1.043 2.736-2.492 2.768-2.758.06-5.519.064-8.275-.006-1.395-.035-2.26-1.059-2.42-2.753-.335-3.644-.906-12.2-.906-12.2"
              transform="translate(-.134 -1.969)"
              style="stroke-linejoin:round;fill:none;stroke:#fff;stroke-linecap:round" />
            <path data-name="패스 3657" d="M18.75 4.24h-18" transform="translate(-.251 .535)"
              style="stroke-linejoin:round;fill:none;stroke:#fff;stroke-linecap:round" />
            <path data-name="패스 3658"
              d="M15.011 5.025a1.826 1.826 0 0 1-1.7-1.622l-.256-1.49a1.4 1.4 0 0 0-1.3-1.163H7.282a1.4 1.4 0 0 0-1.3 1.163L5.721 3.4a1.826 1.826 0 0 1-1.7 1.622"
              transform="translate(-.038 -.251)"
              style="stroke-linejoin:round;fill:none;stroke:#fff;stroke-linecap:round" />
            <path data-name="선 14" transform="translate(9.499 7.404)" style="fill:none;stroke:#fff;stroke-linecap:round"
              d="M0 0v9.592" />
            <path data-name="선 15" transform="rotate(-5.13 87.81 -53.377)"
              style="fill:none;stroke:#fff;stroke-linecap:round" d="m0 0 .125 9.598" />
            <path data-name="선 16" transform="rotate(5.13 -77.73 163.103)"
              style="fill:none;stroke:#fff;stroke-linecap:round" d="M.125 0 0 9.598" />
          </svg>
        </button>
      </div>
    </label>
  </div>
  <p class="line-clamp-2 font-general-semibold text-sm mb-2" style="
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 18px;
        margin: 32px 0;
   color: #003462;
      ">
    OR choose image form below
  </p>
</template>
<style scoped>
.content-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

label.btn-upload,
.empty-img,
.thumbnail-preview {
  height: 252px;
  width: 380px;
  background-color: rgba(128, 128, 128, 0.137);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  position: relative;
}

.thumbnail-preview {
  position: absolute;
  top: 0;
  left: 0;
}

img {
  object-fit: cover;
}

.remove-img {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(34, 34, 34, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

label.btn-upload span {
  margin-top: 16px;
  color: #003462;
}

input#upload_file {
  opacity: 0;
  z-index: -1;
  position: absolute;
}

.none {
  display: none;
}
</style>
