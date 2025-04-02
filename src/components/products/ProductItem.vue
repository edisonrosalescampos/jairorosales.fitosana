<template>
  <div class="card product-card">  
    <div class="card-img-container">
      <img class="card-img-top" :src="getImage(image)" alt="...">
    </div> 
    <div class="card-body">     
      <RouterLink class="card-title" :to="'/product/' + getSlug(name)">
        {{ name }}
      </RouterLink>

      <h5 class="card-price">{{ price ? "$" + price : "" }}</h5>
      
      <!--<p class="card-text d-md-block">{{ description }}</p>-->
    </div>
    <div class="card-footer text-center">
      <RouterLink :to="'/product/' + getSlug(name)">
        <button class="btn btn-primary btn-sm w-100">
          <!--<i class="fas fa-cart-plus me-1"></i>--> Ver Detalle... <i class="fas fa-search ms-1"></i>
        </button>
      </RouterLink>      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    name: String,
    price: Number,
    short_description: String,
    description: String,
    image: String
  },
  methods: {
    getImage(filename) {
      return "./images/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    }
  },
}
</script>