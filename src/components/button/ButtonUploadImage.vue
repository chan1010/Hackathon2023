<script>
import feather from "feather-icons";
export default {
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 relative m-16 mt-0 square"
    aria-label="Single Project"
  >
    <button
      class="rounded-t-xl border-none w-full h-1/2 flex items-center justify-center text-white bg-gray-200"
      @click="$emit('update:isOpen', true)">
      <i
        data-feather="plus-circle"
        width="3rem"
        height="3rem"
      ></i>
    </button>
  </div>
  <p
      class="line-clamp-2 font-general-semibold text-sm mb-2"
      style="
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 18px;
        margin-bottom: 32px;
      "
    >
      Upload OR choose image form below
    </p>
</template>

<style scoped>
button{
  height: 252px;
}
</style>
