<template>
  <div class="card product-card">  
    <div class="card-img-container">
      <RouterLink :to="'/product/' + getSlug(name)">
        <img class="card-img-top" :src="getImage(image)" alt="...">
      </RouterLink>
    </div> 
    <div class="card-body">     
      <RouterLink class="card-title" :to="'/product/' + getSlug(name)">
        {{ name }}
      </RouterLink>

      <h6 class="card-price">{{ price ? "$" + price : "" }}</h6>
      
      <!--<p class="card-text d-md-block">{{ description }}</p>-->
    </div>
    <!--<div class="card-footer text-center">
      <RouterLink :to="'/product/' + getSlug(name)">
        <button class="btn btn-primary btn-sm w-100">
          Ver Detalle... <i class="fas fa-search ms-1"></i>
        </button>
      </RouterLink>      
    </div>-->
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
      return "./images/lite/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    }
  },
}
</script>