<script>
export default {
    name: 'DetailMedicine',
    components: {
    },
    data() {
        return {
            DetailMedicine: {},
        };
    },
};
</script>

<template class="bg-gray-50">
    <div class="content-image">
        <img src="https://images2.thanhnien.vn/Uploaded/nhutnq/2022_10_02/220928180903-03-dall-e-ai-2189.jpg">
    </div>
    <div class="list-btn">
        <button class="btn btn-primary">
            Remind
        </button>
        <router-link :to="{
            name: 'CheckMedicine',
        }" class="btn btn-outline">
            Upload
        </router-link>

    </div>
    <div class="contenT-description">
        <div class="h6">NAME THUOC</div>
        <p class="detail">
            content-image
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

.detail {
    margin-top: 32px;
}

.contenT-description {
    text-align: left;
    padding: 32px 16px;

}
</style>