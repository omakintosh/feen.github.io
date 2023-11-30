<script setup>

defineProps({
    brand: String
})

</script>

<template>
    <header class="py-[18px] px-[25px] flex justify-between items-center">
        <div class="flex gap-x-1.5">
            <span class="w-3 h-3 rounded-full bg-main_red" />
            <span class="w-3 h-3 rounded-full bg-main_yellow" />
            <span class="w-3 h-3 rounded-full bg-main_green" />
        </div>

        <img class="w-[55px] h-[30px]" src="../../assets/EDYA.svg" />
    </header>
</template>