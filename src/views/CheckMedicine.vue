<script>
import { InfiniteScroll } from '../directives/InfiniteScroll';
import ButtonUploadImage from '../components/button/ButtonUploadImage.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
    name: 'Albums',
    components: {
        ButtonUploadImage,
        Carousel,
        Slide,
        Navigation,

    },
    directives: {
        InfiniteScroll
    },
    data() {
        return {
            listMedia: [{
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Buscopan1.JPG'
            }, {
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Efferalgan1.jpg'
            }, {
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Livcaring1.JPG'
            }, {
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/panadol1.jpeg'
            }, {
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Paracetamol1.JPG'
            }, {
                id: 1,
                image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Vinafolin1.JPG'
            }],
            isOpen: false,
            page: 0
        };
    },
};
</script>

<template class="bg-gray-50">
    <div v-infinite-scroll="{ callback: fetchMoreData }">
    </div>
    <ButtonUploadImage @update:isOpen="updateIsOpen" />
    <div class=" bg-black/[0.8] rounded-l-md">
        <carousel :items-to-show="1">
            <slide v-for="media in listMedia" :key="media.id">
                <router-link :to="{
                    name: 'MedicineDetail',
                    params: { id: media.id },
                }" class="image-item">

                    <img :src="`${media.image}`" :alt="media.image">
                </router-link>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<style scoped>
.image-item {
    width: 380px;
    height: 252px;
}

.image-item img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
}

.carousel__slide {
    background-color: #fff;
}
</style>