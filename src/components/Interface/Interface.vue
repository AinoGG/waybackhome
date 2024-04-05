<template>
    <div class="intarface-wrapper">
        <Timing :positionProps="store.time"/>
    </div>
</template>
<script lang="ts" setup>
import Timing from '@/components/Interface/Timing.vue'
import {useGlobalStore} from '@/stores/global'
const store = useGlobalStore()

</script>
<style lang="scss">

</style>