<template>
    <div class="mt-6">
        <lazy-logo />
        <div class="">count: {{ state.countNum }}</div>
        <button class="bg-c-primary p-2 hover:bg-c-primary-light-2" @click="onClick">click</button>
        <p>
            <nuxt-link to="about">goto about</nuxt-link>
        </p>
    </div>
</template>
<script lang="ts" setup>
const state = reactive({
    countNum: 0,
})

const onClick = () => {
    state.countNum += 1
}
</script>

<style scoped lang="scss"></style>
