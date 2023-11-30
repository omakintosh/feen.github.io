<script setup>

import icon from '../../assets/error_icon.svg'

defineProps({
    h1: String,
    h4: String,
    error: Boolean
})

</script>

<template>
    <section class="flex flex-col py-4 px-6 leading-8 font-semibold gap-y-3">
        <div class="flex gap-x-2 items-center">
            <img v-if="error" :src="icon" class="w-[28px]" />
            <h1 v-if="h1" class="text-[36px]">{{ h1 }}</h1>
        </div>
        <h2 v-if="h4" class="text-[32px] text-main_hint">{{ h4 }}</h2>
    </section>
</template>