<template>
    <div class="interface-wrapper">
        <Timing :positionProps="store.time" />
        <MainText :text="store.currentText" />
    </div>
</template>
<script lang="ts" setup>
import Timing from '@/components/Interface/Timing.vue'
import MainText from '@/components/Interface/MainText.vue'
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()

</script>
<style lang="scss">
.interface-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
}
</style>