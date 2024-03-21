<template>
    <div>
        <Intro v-if="step === 0" @nextStep="nextStep"/>
        <StartGame v-if="step === 1" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Intro from '@/components/PlaygroundComponents/Intro.vue';
import type Steps from '@/types/playgroundTypes'
import StartGame from '@/components/PlaygroundComponents/StartGame.vue';

const step = ref(0) 

function nextStep() {
    step.value++
}


// const screenSteps = ref<Steps[]>([
//     {
//         step: 1,
//         title: 'Intro'
//     },
//     {
//         step: 2,
//         title: 'glhf'
//     },
// ])
</script>