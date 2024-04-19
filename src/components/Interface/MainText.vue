<template>
    <div class="main-text">
        <h1>
            {{ props.h1 }}
        </h1>
        <p>
            {{ props.text }}
        </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps([
    'text',
    'h1'
])
</script>
<style lang="scss">
.main-text {
    background: rgba(160, 192, 191, 0.56);
    color: antiquewhite;
    width: 90vw;
    height: 90vh;
    padding: 16px;
    font-size: 18px;
}
</style>