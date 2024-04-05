<template>
    <div class="progress-day">
        <div class="progress-dot" :style="{ left: state.resultTime + '%' }"></div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from 'vue';

const props = defineProps([
    'positionProps'
])

const state = reactive({
    resultTime: 0
})

function parseTiming(time:any) {
    const day = 86400000
    const currentTime = Number(time.split(':')[0]) * 3600000 + Number(time.split(':')[1]) * 60000
    state.resultTime = Math.floor(currentTime / (day / 100))
}
parseTiming(props.positionProps)
</script>
<style lang="scss">
.progress-day {
    width: 100vw;
    height: 20px;
    background: linear-gradient(0.25turn, #1DF6C2, #FEEA39, #226F90);
    position: relative;

    .progress-dot {
        position: absolute;
        top: 0;
        background: red;
        width: 20px;
        height: 20px;
    }
}
</style>