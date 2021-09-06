<template>
    <div>
        <nuxt-page />
    </div>
</template>

<script lang="ts" setup>
import './assets/tailwind.scss'
const fontLoader = useFontLoad()

fontLoader()
</script>

<style lang="scss"></style>
