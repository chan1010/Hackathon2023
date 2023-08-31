<template>
    <div class="popup" style="display: none">
        <div class="popup-content">
            <p class="popup-content-title">Medicine</p>
            <p class="popup-content-description">Day co phai ten thuoc ban tim?</p>
            <div class="popup-content-button">
                <button>Yes</button>
                <button class="btn_primary btn-delete-book">No</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(34, 34, 34, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-content {
    width: 293px;
    height: 200px;
    border-radius: 12px;
    background-color: #fff;
}

.popup-content-title {
    padding: 40px 0;
    text-align: center;
    border-bottom: 1px solid #ededed;
}

.popup-content-description {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.14px;
    height: 37px;
}

.popup-content-button {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.16px;
}

button {
    height: 53px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.14px;
    border: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: transparent;
}

button:last-child {
    border-left: 1px solid #ededed;
}</style>