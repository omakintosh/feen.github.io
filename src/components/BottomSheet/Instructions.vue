<script setup>

import copyToClipboardiOS from '../../utils/copyToClipboardiOS'

const props = defineProps({
    api_key: String, os: String
})

const copy = async () => {
    copyToClipboardiOS(props.api_key)
}

</script>

<template>
    <div class="p-4 relative">

        <div class="bg-main_secondary_pulse rounded-[20px] p-[8px] flex flex-col gap-y-2">

            <div class="bg-main_secondary rounded-[20px] gap-y-1">

                <div class="p-2">

                    <div @click="copy"
                        class="bg-black rounded-[20px] overflow-clip flex flex-1 justify-between items-center py-1 px-2 hover:opacity-90 cursor-pointer transition-all">

                        <div class="px-2 flex gap-x-3">

                            <img src="../../assets/key.svg" class="w-[12px]" />

                            <div class="truncate-2-lines">
                                {{ api_key }}
                            </div>

                        </div>

                        <img src="../../assets/copy-button.svg" class="w-[45px]" />

                    </div>

                    <div class="flex flex-col px-4 py-2">
                        <span class="text-main_hint">Вам выдан ключ-доступа, нажмите, чтобы скопировать</span>
                    </div>

                </div>

                <div :class="['gap-y-2 flex flex-col']">
                    <div class="px-6">
                        <h2 class="text-[36px] font-semibold text-main_green">Инструкция</h2>

                        <span v-if="os === 'Windows Phone'" class="text-[20px] font-semibold">
                            <img src="../../assets/error_icon.svg" class="w-[20px] inline-block" />
                            Рекомендуем
                            ознакомиться с
                            видео-инструкцией.
                            Находится внизу данной страницы</span>
                    </div>

                    <hr v-if="os === 'Windows Phone'" class="border-[1px] border-main_border" />

                    <div v-if="os === 'Android'" class="px-6 pt-2 pb-4">
                        <ol class="text-[20px]">
                            <li>1. Скопируйте ключ-доступа, что выше</li>
                            <li>2. <a href='https://play.google.com/store/apps/details?id=com.v2ray.ang' target="_blank"
                                    class="text-main_blue_text underline">Установите</a> и откройте приложение <a
                                    class="text-main_blue_text underline"
                                    href='https://play.google.com/store/apps/details?id=com.v2ray.ang'
                                    target="_blank">V2rayNG</a></li>
                            <li>3. Нажмите на <span class="text-main_blue_text">+</span> сверху</li>
                            <li>4. Импорт профиля из буфера обмена</li>
                            <li class="">5. Нажмите на кнопку <img src="../../assets/vpn-button.svg"
                                    class="w-[20px] inline-block" />
                            </li>
                        </ol>
                    </div>

                    <div v-if="os === 'MacOS'" class="px-6 pt-2 pb-4">
                        <ol class="text-[20px]">
                            <li>1. Скопируйте ключ-доступа, что выше</li>
                            <li>2. <a href='https://apps.apple.com/us/app/foxray/id6448898396' target="_blank"
                                    class="text-main_blue_text underline">Установите</a> и откройте приложение <a
                                    class="text-main_blue_text underline"
                                    href='https://apps.apple.com/us/app/foxray/id6448898396' target="_blank">FoXray</a></li>
                            <li class="">3. Нажмите на <img src="../../assets/dash.svg" class="w-[15px] inline-block" />
                                сверху</li>
                            <li class="">4. Включите VPN, нажав на <img src="../../assets/play.svg"
                                    class="w-[20px] inline-block" /></li>
                        </ol>
                    </div>

                    <div v-if="os === 'Windows Phone'" class="px-6 pt-2 pb-4">
                        <ol class="text-[20px]">
                            <li>1. Скопируйте ключ-доступа, что выше</li>
                            <li>2. <a
                                    href='https://github.com/MatsuriDayo/nekoray/releases/download/3.25/nekoray-3.25-2023-11-25-windows64.zip'
                                    target="_blank" class="text-main_blue_text underline">Скачайте архив</a> и распакуйте
                                егго в любое удобное место
                            </li>
                            <li>3. Запустите приложение <span class="text-main_blue_text">nekoray.exe</span> и
                                нажмите на кнопку <span class="text-main_blue_text">sing-box</span></li>
                            <li>4. Выполните сочетание клавиш <span class="text-main_blue_text">Ctrl+V</span></li>
                            <li>5. Кликните <span class="text-main_blue_text">левой кнопкой мыши</span> по ключу и нажмите
                                клавишу <span class="text-main_blue_text">Enter</span></li>
                            <li>6. Включите VPN, нажав на кнопку "<span class="text-main_blue_text">Режим системного
                                    прокси</span>"</li>
                        </ol>
                    </div>

                    <div class="p-2">
                        <div
                            class="rounded-[20px] bg-black flex justify-center items-center text-[24px] font-bold h-[200px]">
                            Вертикальное
                            видео</div>
                    </div>

                </div>



            </div>

            <div class="flex gap-x-3 px-6 items-start">
                <img src="../../assets/note.svg" class="w-[22px] translate-y-1" />
                <p class="text-[18px] leading-6">Остались вопросы? Обратитесь в <a href='https://t.me/kardoHelp'
                        class="text-main_blue_text" target="_blank">тех. поддержку</a>
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.truncate-2-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3rem;
}
</style>