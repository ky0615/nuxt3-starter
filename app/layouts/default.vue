<template>
    <v-app>
        <v-app-bar absolute elevation="2">
            <v-app-bar-nav-icon />
            <v-app-bar-title>title</v-app-bar-title>
        </v-app-bar>
        <div class="container mx-auto">
            <slot />
        </div>
    </v-app>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
