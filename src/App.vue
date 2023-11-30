<script setup>

import { onMounted } from "vue"
import { useWebAppClosingConfirmation, useWebAppViewport } from "vue-tg"

const { enableClosingConfirmation } = useWebAppClosingConfirmation()

const { expand } = useWebAppViewport()

onMounted(() => {
  expand()
  enableClosingConfirmation()
})

</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>