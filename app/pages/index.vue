<template>
    <div>
        <div class="">count: {{ count }}</div>
        <button @click="onClick">click</button>
    </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from 'nuxt3/dist/app/composables/component'

export default defineNuxtComponent({
    setup() {
        const count = ref(0)

        const onClick = () => {
            count.value += 1
        }

        return {
            count,
            onClick,
        }
    },
})
</script>

<style scoped lang="scss">

</style>
