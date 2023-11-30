<script setup>

import Header from './BottomSheet/Header.vue'
import Title from './BottomSheet/Title.vue'
import Instructions from './BottomSheet/Instructions.vue'

defineProps({
    api_key: String, os: String
})

</script>

<template>
    <main class="bg-black rounded-t-[35px]">
        <Header />

        <div>
            <Title h1="Настройка VPN" />
            <Instructions :api_key="api_key" :os="os" />
        </div>
    </main>
</template>