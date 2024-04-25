<template>
    <div class="main-text">
        <h1>
            {{ state.title }}
        </h1>
        <p>
            {{ state.text }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import * as textJson from '../../texts/startGame.json'



const state = reactive({
    title: '',
    text: ''
})
onMounted(() => {
    state.text = textJson.startText.text
    state.title = textJson.startText.title
})
</script>
<style lang="scss">
.main-text {
    background: rgba(160, 192, 191, 0.56);
    color: antiquewhite;
    width: 90vw;
    height: max-content;
    max-height: 90vh;
    overflow-y: scroll;
    padding: 16px;
    scrollbar-width: 2px;
    scrollbar-width: thin;
    /* "auto" или "thin"  */
    scrollbar-color: rgb(93, 166, 226) rgb(241, 204, 135);
    /* плашка скролла и дорожка */


    &::-webkit-scrollbar {
        width: 12px;
        /* ширина scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: rgba(197, 233, 98, 0.384);
        /* цвет дорожки */
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(93, 166, 226);
        /* цвет плашки */
        border-radius: 20px;
        /* закругления плашки */
        border: 3px solid rgb(241, 204, 135);
        /* padding вокруг плашки */
    }

    h1 {
        text-align: center;
        font-size: 48px;
    }

    p {
        font-size: 36px;
    }
}
</style>