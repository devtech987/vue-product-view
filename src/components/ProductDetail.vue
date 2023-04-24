<template>
  <button
    @click="back"
    class="bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Back
  </button>
  <div class="w-full product-detail mx-auto">
    <div class="grid grid-cols-4">
      <img
        class="w-full col-span-1 p-img h-64 object-cover"
        :src="productDetail.imageURL"
      />
      <div class="p-4 col-span-3 product-info">
        <div class="flex mb-1">
          <h2
            class="text-lg font-medium"
            :class="{ 'watch-list-product': !productDetail.available }"
          >
            {{ productDetail.name }}
          </h2>
        </div>
        <div class="flex">
          <p>
            Price: {{ productDetail.price.value }}
            {{ productDetail.price.currency }}
          </p>
        </div>
        <div class="w-full flex justify-between">
          <Rating :rating="productDetail.rating" />
          <span class="date">{{formateDate(productDetail.releaseDate)}}</span>
        </div>

        
      </div>
    </div>

    <p class="text-gray-500">{{ productDetail.description }}</p>
    <div class="flex justify-center my-4">
      <button
        @click="addToWatchList(productDetail.id)"
        v-if="productDetail.available"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Vormerken
      </button>
      <button
        v-if="!productDetail.available"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Vergessen
      </button>
    </div>
    <p>{{ productDetail.longDescription }}</p>
  </div>
</template>
<script setup lang="ts">
import { Product } from "@/types/Product";
import { formateDate } from "@/utils/common";
import Rating from "./Rating.vue";

const emit = defineEmits(["addWatchList", "showList"]);

defineProps<{
  productDetail: Product;
}>();
const addToWatchList = (id: number) => {
  emit("addWatchList", id);
};
const back = () => {
  emit("showList");
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
.date {
  font-size: 12px;
  color: #ccc;
}
.watch-list-product {
  color: #d1c4e9;
}
.product-detail {
  height: 100vh;
  overflow-y: scroll;
}
</style>
