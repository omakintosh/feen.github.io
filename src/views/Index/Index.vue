<script setup>

import { ref, onMounted } from 'vue'

import getOperatingSystem from '../../utils/getOperatingSystem'
import isFutureDate from '../../utils/isFutureDate'
import { MainButton, useWebAppPopup } from "vue-tg"

import BottomSheet_appSetup from '../../components/BottomSheet_appSetup.vue'
import BottomSheet_getApp from '../../components/BottomSheet_getApp.vue'
import BottomSheet_subscribeError from '../../components/BottomSheet_subscribeError.vue'

import Pattern from '../../components/Pattern.vue'

import Loader from '../../components/Loader.vue'

const { showConfirm, showPopup } = useWebAppPopup()

const key = ref(null)
const expire = ref(null)
const os = ref(null)
const loaded = ref(false)

onMounted(() => {
    loaded.value = true

    os.value = getOperatingSystem()
    const params = new URLSearchParams(window.location.search)
    key.value = params.get('key')
    const expire_time = params.get('expire_time')
    expire.value = isFutureDate(expire_time)

    setTimeout(() => {
        loaded.value = false
    }, 1500)
})

const mainButtonClick = async () => {
    showConfirm('Данная опция не сработает, если приложение не установлено', (e) => {
        if (e) {
            window.open(`streisand://import/${key}`)
        } else {
            // 
        }
    })
}

</script>

<template>
    <Loader v-show="loaded" />
    <div class="flex flex-col" v-show="!loaded">
        <Pattern />
        <div class="-translate-y-8">
            <BottomSheet_subscribeError v-if="!expire" />

            <div v-else>
                <BottomSheet_getApp v-if="os === 'iOS'" />
                <BottomSheet_appSetup v-else :api_key="key" :os="os" />
            </div>
        </div>
    </div>

    <MainButton v-if="expire && os === 'iOS' && !loaded" text="Продолжить" color="#8C8C8C" textColor="#FFFFFF"
        @click="mainButtonClick" />
</template>