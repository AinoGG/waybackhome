<template>
    <section class="mainscreen">
        <h1>Путь домой</h1>
        <MenuList v-if="store.auth" />
        <AuthForm v-if="!store.auth" />
    </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import AuthForm from './AuthForm.vue';
import MenuList from './MenuList.vue';

const store = useAuthStore()
console.log(store.isAuth)
store.isAuth !== 'false' ? store.auth = true : store.auth = false



</script>
<style lang="scss">
.mainscreen {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/images/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    h1 {
        font-size: 200px;
        position: absolute;
        top: 0;
        color: #00a2ff;
        opacity: .3;
        font-weight: 600;
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(#798D8C, 58%);
        z-index: 1;
    }
}

.login {
    position: absolute;
    z-index: 2;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.menu-list {
    color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    text-align: center;

    li {
        color: #fff;
        transition: all .3s ease-in-out;
        cursor: pointer;
        font-size: 32px;

        &:hover {
            text-shadow: 0 0 4px #00a2ff;
        }

        a {
            color: #fff;
        }
    }
}
</style>@/stores/auth