<template>
  <div class="container">
    <TopHeader :header="header" />
    <Filter
      v-if="!showProductDetail"
      :filters="filters"
      @filterProduct="filterProduct"
    />
    <ProductList
      v-if="!showProductDetail"
      :products="productData"
      @getProductDetail="getProductDetail"
    />
    <ProductDetail
      v-if="showProductDetail"
      :productDetail="productDetail"
      @addWatchList="addWatchList"
      @showList="showProductList"
    />
    <Filter
      v-if="!showProductDetail"
      :filters="filters"
      @filterProduct="filterProduct"
    />
  </div>
</template>

<script setup lang="ts">
import ProductDetail from "./components/ProductDetail.vue";
import ProductList from "./components/ProductList.vue";
import TopHeader from "./components/TopHeader.vue";
import Filter from "./components/Footer.vue";
import { computed, reactive, ref } from "vue";
import axios from "axios";
import { Product } from "@/types/Product";
import { Header } from "@/types/Header";
const productList = reactive({});
defineProps<{
  msg: string;
}>();

let showProductDetail = ref<boolean>(false);
const products = ref<Product[]>([]);
const productDetail = ref<Product>();
const productTemp = ref<Product[]>([]);
const header = ref<Header>();
const filters = ref<string[]>();
const filter = ref<string>("");


const productData = computed(() => {
  if (filter.value !== "") {
    const isAailable = filter.value === "Verfügbar" ? true : false;
    return products.value.filter((e: Product) => e.available === isAailable);
  }
  return products.value;
});

const filterProduct = (val: string) => {
  filter.value = val === "Alle" ? "" : val;
};


const getProductDetail = (product: Product) => {
  productDetail.value = product;
  showProductDetail.value = true;
};

const addWatchList = (id: number) => {
  products.value = products.value.map((e: Product) => {
    if (e.id === id) {
      e.available = false;
    }
    return e;
  });
};
const showProductList = () => {
  showProductDetail.value = false;
};
const getData = async () => {
  const res = await axios.get(
"https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"
  );
  products.value = res.data.products;
  productTemp.value = res.data.products;
  header.value = res.data.header;
  filters.value = res.data.filters;
};
getData();
</script>

<style>
#app {
  @apply antialiased flex flex-col items-center mt-4;
}
.container {
  max-width: 640px;
}
.blue-bg {
  background: blue;
  color: #fff;
}
.cursor-pointer {
  cursor: pointer;
}
.border {
  border: 1px solid #ccc;
}
</style>
