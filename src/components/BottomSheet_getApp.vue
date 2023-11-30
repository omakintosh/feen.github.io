<script setup>

import Header from './BottomSheet/Header.vue'
import Title from './BottomSheet/Title.vue'
import Action from './BottomSheet/Call_to_Action.vue'

</script>

<template>
    <main class="bg-black rounded-t-[35px]">
        <Header />

        <div>
            <Title h1="Настройка VPN" />
            <Action />
        </div>
    </main>
</template>