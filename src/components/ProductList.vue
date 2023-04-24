<template>
  <div class="flex product-list mx-auto">
    <div class="flex sm flex-col h-screen">
      <div class="flex-grow flex flex-col items-center justify-center">
        <ul class="space-y-4">
          <li
            class="border cursor-pointer"
            v-for="product in products"
            :key="product.id"
          >
            <div
              class="grid p-2 grid-cols-4 gap-2 flex items-center justify-between"
              :class="{ 'next-order': !product.available }"
              @click="showProductDetail(product)"
            >
              <img
                class="w-full col-span-1 p-img h-64 object-cover"
                :src="product.imageURL"
              />
              <div class="col-span-3 product-info">
                <div class="w-full flex justify-between">
                  <h2 class="text-lg font-medium">{{ product.name }}</h2>
                  <span class="date">{{
                    formateDate(product.releaseDate)
                  }}</span>
                </div>
                
                <p class="text-gray-500">
                  {{
                    product.description.length > 80
                      ? product.description.substring(0, 80) + ".."
                      : product.description
                  }}
                </p>
                <div class="w-full flex justify-between">
                  <span class="text-gray-500"
                    >Price: {{ product.price.value }}
                    {{ product.price.currency }}</span
                  >
                  <Rating :rating="product.rating" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { Product } from "@/types/Product";
import { formateDate } from "@/utils/common";
import Rating from "./Rating.vue"
import { ref } from "vue";
const emit = defineEmits(["getProductDetail"]);

defineProps<{
  products: Product[];
}>();
const rating = ref(2);
const showProductDetail = (val: string) => {
  emit("getProductDetail", val);
};
</script>

<style scoped>
.p-img {
  width: 100px;
  height: 100px;
}
.next-order img {
  order: 2;
}
.next-order .product-info {
  order: 1;
}
.product-list {
  height: 100vh;
  overflow-y: scroll;
}
.date {
  font-size: 12px;
  color: #ccc;
}
</style>
