<template>
    <button class="button-start__red" @click="backToMainscreen">Назад в меню</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function backToMainscreen() {
    router.push('/')
}
</script>