<template>
  <section class="product-section" :id="category">
    <div class="subheader">
      <h6 class="title">{{ title }}</h6>
    </div>

    <ProductList :products="products" />
  </section>
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  name: "ProductGroup",
  components: {
    ProductList
  },
  props: {    
    title: String,
    category: String,
    products: Array,
  }
}
</script>