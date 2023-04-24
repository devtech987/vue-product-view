<template>
  <star-rating
    v-model:rating="rating"
    :star-size="20"
    :read-only="true"
    :show-rating="false"
    :increment="0.1"
  />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import StarRating from "vue-star-rating";

defineProps<{
  rating: number;
}>();
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
