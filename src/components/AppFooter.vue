
<template>
    <div class="bottom">
        <router-link to="/Feed">
            <div class="bottom_item">
                <svg class="svg-icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M92.16 35.84h185.344l186.368 471.04C485.376 563.2 512 646.144 512 646.144h3.072s25.6-82.944 47.104-139.264l186.368-471.04h185.344l76.8 952.32H837.632l-39.936-532.48c-4.096-63.488-1.024-147.456-1.024-147.456h-3.072s-28.672 92.16-51.2 147.456l-154.624 368.64H437.248l-152.576-368.64C261.12 400.384 231.424 307.2 231.424 307.2h-3.072s3.072 86.016-1.024 148.48l-39.936 532.48H14.336L92.16 35.84z" fill="#3576CB" /></svg><span>Feed</span>
            </div>
        </router-link>
        <button class="bottom_item">
            <svg class="svg-icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M752.213333 530.773333h-460.8c-18.773333 0-34.133333-15.36-34.133333-34.133333s15.36-34.133333 34.133333-34.133333h460.8c18.773333 0 34.133333 15.36 34.133334 34.133333s-14.933333 34.133333-34.133334 34.133333zM163.413333 870.4v-204.8c0-18.773333-15.36-34.133333-34.133333-34.133333s-34.133333 15.36-34.133333 34.133333v221.866667c0 28.16 23.04 51.2 51.2 51.2h221.866666c18.773333 0 34.133333-15.36 34.133334-34.133334s-15.36-34.133333-34.133334-34.133333h-204.8zM163.413333 153.6h204.8c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133334h-221.866666c-28.16 0-51.2 23.04-51.2 51.2v221.866667c0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133333-34.133333V153.6zM880.213333 870.4h-204.8c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h221.866667c28.16 0 51.2-23.04 51.2-51.2v-221.866667c0-18.773333-15.36-34.133333-34.133333-34.133333s-34.133333 15.36-34.133334 34.133333v204.8zM897.28 85.333333h-221.866667c-18.773333 0-34.133333 15.36-34.133333 34.133334s15.36 34.133333 34.133333 34.133333h204.8v204.8c0 18.773333 15.36 34.133333 34.133334 34.133333s34.133333-15.36 34.133333-34.133333V136.533333c0-28.16-22.613333-51.2-51.2-51.2z" fill="#4C4B4C" /></svg><span>Scan</span>
        </button>
        <router-link to="/Profile">
            <div class="bottom_item">
                <svg class="svg-icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M393.728 504.9856A230.4 230.4 0 1 1 512 537.6 332.8 332.8 0 0 0 179.2 870.4a25.6 25.6 0 0 1-51.2 0 384.1536 384.1536 0 0 1 265.728-365.4144zM512 486.4a179.2 179.2 0 1 0 0-358.4 179.2 179.2 0 0 0 0 358.4z m384 384a25.6 25.6 0 0 1-51.2 0 331.776 331.776 0 0 0-108.8-246.1696 25.6 25.6 0 0 1 34.4576-37.888A382.976 382.976 0 0 1 896 870.4z" fill="#9DA7B2" /></svg><span>Profile</span>
            </div>
        </router-link>
    </div>
</template>
<style scoped>
.bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    justify-content: space-between;
    padding: 10px 5px;
    background-color:#fff;
    border-top: 1px solid #f5f5f5;
    z-index: 3;
    font-size: 9px;
    letter-spacing: -0.09px;
    text-align: center;
    color: #222;
    grid-template-columns: 1fr 1fr 1fr
}

@supports (-webkit-touch-callout: none) {
    .bottom {
        padding: 10px 5px 16px 5px;
    }
}

.bottom_item,
.bottom button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    height: 42px;
}

.bottom_item span,
.bottom button span {
    font-size: 14px;
    letter-spacing: -0.09px;
    text-align: center;
    color: #222;
}

.bottom_item img,
.bottom button img {
    width: 20px;
    height: 20px;
    margin: 0 0 6px;
    -o-object-fit: contain;
    object-fit: contain;
}

.bottom_item img svg,
.bottom button img svg {
    fill: #e4007f;
}
</style>