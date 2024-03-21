<template>
    <section class="wrapper flex-fdc">
        <div class="flex-fdc">
            <h1>Об игре</h1>
            <p>
                Все изображения сгенерированы нейросетью <a target="_blank"
                    href="https://t.me/kandinsky21_bot">Kandinsky
                    3.0</a>
            </p>
            <p>
                Музыка: INVADERBACCA, etc. (по мере добавления)
            </p>
            <p>
                Сюжет и текст написан автором проекта
            </p>
            <p>
                Путь домой ©
            </p>
        </div>
        <ButtonBack />
    </section>
</template>
<script lang="ts" setup>
import ButtonBack from '@/components/ButtonBack.vue'
</script>
<style lang="scss" scoped>
.wrapper {
    background: center / cover no-repeat url('../assets/images/GenerateImages/sky_1.jpg');
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 24px;
}
</style>