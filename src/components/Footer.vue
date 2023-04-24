<template>
    <div class="grid grid-cols-3 bg-slate-300 mt-1 p-2">
        <span class="cursor-pointer" v-for="filter in filters" :key="filter.id" @click="emitFilter(filter)">{{filter}}</span>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['filterProduct'])
defineProps<{
  filters: string[];
}>();
const emitFilter = (val: string) => {
    console.log(val)
    emit('filterProduct', val)
}

</script>