<script>
import { getDetailMed } from "../services/Med";

export default {
    name: 'DetailMedicine',
    components: {
    },
    data() {
        return {
            DetailMedicine: {},
        };
    },
    async created() {
        this.DetailMedicine = await getDetailMed(this.$route.params.id)
        console.log(this.DetailMedicine)
    },
};
</script>

<template class="bg-gray-50">
    <div class="content-image">
        <img :src="`${DetailMedicine.med_image}`">
    </div>
    <div class="list-btn">
        <router-link :to="{
            name: 'RemindDetail',
        }" class="btn btn-primary">
            Remind
        </router-link>
        <router-link :to="{
            name: 'CheckMedicine',
        }" class="btn btn-outline">
            Upload
        </router-link>

    </div>
    <div class="content-description">
        <h5 class="med-name">{{ DetailMedicine.med_name }}</h5>
        <p class="med-des">
            {{ DetailMedicine.med_description }}
        </p>
        <p class=" med_dosage">
            {{ DetailMedicine.med_dosage }}
        </p>
        <p class="med_notes">
            {{ DetailMedicine.med_notes }}
        </p>
    </div>
</template>

<style scoped>
.content-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 380px;
    height: 252px;
    border-radius: 8px;
    object-fit: cover;
}

.list-btn {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    width: 120px;
    font-size: 16px;
    border-radius: 16px;
    font-weight: bold;
    color: #fff;
    padding: 6px 0;
}

.btn+.btn {
    margin-left: 32px;
}

.btn-primary {
    background-color: #40bfb4;
}

.btn-outline {
    border: 1px solid #40bfb4;
    color: #40bfb4;
}

.med-name {
    text-transform: uppercase;
    font-size: large;
    font-weight: 700;
}

.med-des {
    margin-top: 32px;
}

.content-description {
    text-align: justify;
    padding: 32px 16px;

}

p {
    color: #003462;
}

p+p {
    margin-top: 16px;
}</style>