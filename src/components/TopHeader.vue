<template>
    <h2 class="flex justify-center p-2 mb-1 blue-bg">{{header?.headerTitle}}</h2>
</template>

<script setup lang="ts">
import { Header } from "@/types/Header";
defineProps<{
  header: Header;
}>();

</script>