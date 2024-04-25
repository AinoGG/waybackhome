<template>
    <ul class="menu-list">
        <li v-for="(item, index) in menuList" :key="index">
            <RouterLink :to="item.link">{{ item.title }}</RouterLink>
        </li>
        <li @click="quitToForm">
            Quit
        </li>
    </ul>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import type MenuTypes from '@/types/menuTypes'
import { useAuthStore } from '@/stores/auth'


const store = useAuthStore()

const menuList = ref<MenuTypes[]>([
    { title: 'Start', link: '/playground' },
    { title: 'About', link: '/about' }
])

function quitToForm() {
    store.$reset()
    localStorage.setItem('isAuth', 'false')
}
</script>