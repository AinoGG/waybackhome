<template>
    <div class="login" v-if="!store.auth">
        <form action="login" class="login-form">
            <input type="email" placeholder="e-mail"  v-model="store.emailForm">
            <input type="password" placeholder="password" v-model="store.passForm">
            <button @click.prevent="clickSubmit" type="submit">SUBMIT</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from '@/stores/auth'

const store = useAuthStore()

function clickSubmit() {
    console.log('success login')
    if (store.emailForm !== '' && store.passForm !== '') {
        store.auth = true
        localStorage.setItem('isAuth', 'auth')
    } else {
        alert('Заполните форму')
        store.$reset()
    }
}


</script>