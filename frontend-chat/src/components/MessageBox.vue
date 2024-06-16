<template>
    <div class="bg-slate-600 rounded-lg w-6/12" > 
        messs
        {{ props.message }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['message'])
</script>

<style lang="scss" scoped>

</style>