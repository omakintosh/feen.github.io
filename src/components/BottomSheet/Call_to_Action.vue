<script setup>

import { useWebApp } from "vue-tg"

const { close } = useWebApp()

defineProps({
    errorType: Boolean
})

</script>

<template>
    <div class="p-4 mb-4 relative">
        <div class="px-2 flex flex-col">
            <div
                :class="['flex p-2 bg-main_secondary', errorType ? 'rounded-[25px] flex-col gap-y-1' : 'border-b-[1px] border-main_border rounded-t-[25px]']">
                <p v-if="!errorType" class="text-main_hint text-[20px] leading-6 p-2">Установите <a
                        class="text-main_blue_text underline" href='https://apps.apple.com/us/app/streisand/id6450534064'
                        target="_blank">приложение</a>, а затем
                    нажмите
                    кнопку
                    <span class="text-white">Продолжить</span>
                </p>

                <p v-else class="text-main_hint text-[20px] leading-6 p-2">Кажется у Вас закончилась подписка...</p>

                <a href="#" @click="(e) => {
                    e.preventDefault()
                    close()
                }" v-if="errorType" class="flex justify-between items-center bg-black p-2 pl-3 rounded-[20px]">
                    <span class="text-[20px] font-bold">Оплатить подписку</span>
                    <button>
                        <img src="../../assets/ellipse-button.svg" class="w-[34px]" />
                    </button>
                </a>
            </div>

            <div v-if="!errorType" class="flex justify-between items-center py-4 px-[18px] bg-black rounded-b-[25px]">

                <div class="flex items-center gap-x-2">
                    <img src="../../assets/app.svg" class="w-[46px]" />
                    <div class="flex flex-col">
                        <h3 class="text-[16px] font-semibold">Streisand</h3>
                        <span class="text-[14px] text-main_hint -mt-0.5">Flexible Proxy cli...</span>
                    </div>
                </div>

                <a href="https://apps.apple.com/us/app/streisand/id6450534064"
                    class="text-[15px] font-semibold py-[7px] px-[13px] rounded-full bg-main_blue_button hover:opacity-90 transition-all">Загрузить</a>

            </div>
        </div>

        <div
            class="bg-main_secondary_pulse rounded-[20px] py-2.5 px-[18px] -mt-16 flex items-end h-[130px] max-[388px]:h-[154px] min-[569px]:h-[106px]">
            <div class="flex gap-x-3 px-2 items-start">
                <img src="../../assets/note.svg" class="w-[22px] translate-y-1" />
                <p class="text-[18px] leading-6">Остались вопросы? Обратитесь в <a href='https://t.me/kardoHelp'
                        class="text-main_blue_text" target="_blank">тех. поддержку</a>
                </p>
            </div>
        </div>

    </div>
</template>