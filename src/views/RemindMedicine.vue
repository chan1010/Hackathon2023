<script>
import feather from "feather-icons";
export default {
    name: 'RemindMedicine',
    components: {
    },
    data() {
        return {

        };
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template class="bg-gray-50">
    <div class="input-item">
        <label for="">Daily usage time:</label>
        <div class="content-time">
            <input type="time" />
            <div class="btn-add">
                <button><i data-feather="plus-circle" width="3rem" height="1.2rem"></i></button>
            </div>
        </div>
    </div>
    <div class="input-item">
        <label for="">Label:</label>
        <input type="text">
    </div>
    <div class="input-item">
        <label for="">Repeat:</label>
        <div class="content-date">
            <div class="mon">
                <label for="">Mon</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="1">
                </div>
            </div>
            <div class="tu">
                <label for="">Tu</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="2">
                </div>
            </div>
            <div class="we">
                <label for="">We</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="3">
                </div>
            </div>
            <div class="th">
                <label for="">Th</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="4">
                </div>
            </div>
            <div class="fr">
                <label for="">Fr</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="5">
                </div>
            </div>
            <div class="sa">
                <label for="">Sa</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="6">
                </div>
            </div>
            <div class="su">
                <label for="">Su</label>
                <div class="input-checkbox">
                    <input type="checkbox" value="7">
                </div>
            </div>
        </div>
    </div>
    <div class="input-item">
        <label for="">Amount:</label>
        <input type="number">
    </div>
    <div class="input-item">
        <label for="">Exprire:</label>
        <input type="date">
    </div>
</template>

<style scoped>
.input-item,
.input-checkbox {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 8px 16px;
}

label {
    margin-bottom: 6px;
}

.content-date {
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
}

.content-date div {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.input-checkbox {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 8px 0 0;
}

input[type='checkbox'] {
    border: solid 1px #40bfb4;
    background-color: #fff;
    border-radius: 4px;
    margin: 0;
    width: 24px;
    height: 24px;

    &::after {
        content: '\2713';
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        background-color: #40bfb4;
        color: #fff;
        display: none;
    }

    &:checked {
        height: 16px;
        width: 16px;

        &::after {
            display: flex;
        }
    }
}

input {
    height: 38px;
    border-radius: 6px;
    border: solid 1px #ededed;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.14px;
    width: 100%;
}

input:focus {
    border-color: #40bfb4;
    outline: #40bfb4;
}
.content-time{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    color: #40bfb4;
}
</style>