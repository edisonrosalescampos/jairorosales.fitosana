<template>
  <div class="container my-4 product-page">
    <div class="mb-4">
      <RouterLink :to="{ path: '/products', hash: '#' + product.category }">
        <button class="btn btn-primary btn-sm custom-btn btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
    </div>

    <div class="row">
      <div class="col-md-5 col-lg-4 mb-3 mb-md-0">
        <div class="img-thumbnail-container">
          <img :src="getImage(product.img)" class="img-thumbnail" alt="...">
        </div>
      </div>
      <div class="col-md-7 col-lg-8">
        <h3 class="title mb-0">
          {{ product.name }} 
        </h3> 
        <div class="mb-3">          
          <span class="badge custom-tag">
            {{ getTranslatedCategory(product.category).toUpperCase() }}
          </span>
        </div> 
        
        <h1 class="price">{{ product.price ? "$" + product.price : "" }}</h1>

        <br/>

        <div>
          <a class="btn btn-primary custom-btn btn-buy me-2" href="https://wa.me/584161974036" target="_blank">
            <i class="fas fa-shopping-cart me-1"></i> Comprar
          </a>
          <a class="btn btn-primary custom-btn btn-buy" href="https://wa.me/584161974036" target="_blank">
            <i class="fab fa-whatsapp me-1"></i> Chatear por whatsApp
          </a>
        </div>

        <br/>

        <h6 class="subtitle">DESCRIPCIÓN:</h6>
        <p class="mb-0 text-justify">{{ product.description }}</p>   

        <br/>

        <template v-if="productElementsLength > 0">
          <h6 class="subtitle">CONTIENE:</h6>

          <ul class="nutrition-facts">
            <li v-for="element in product.elements" :key="element.name">
              <div class="fact">
                <span class="element">{{ element.name }}</span> <span class="badge bg-secondary rounded-pill ms-1">{{ element.qty }} </span>
              </div>
            </li>
          </ul>

          <br/>
        </template>

        <div class="d-flex justify-content-center justify-content-md-start">
          <div class="badge custom-badge">
            <p class="mb-1 subtitle">REGISTRO SANITARIO</p>
            <span class="title">{{ product.approval_number }}</span>
          </div>

          <div class="badge custom-badge">
            <p class="mb-1 subtitle">CPE</p>
            <span class="title">{{ product.cpe }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 d-md-none">
      <RouterLink :to="{ path: '/products', hash: '#' + product.category }">
        <button class="btn btn-primary btn-sm custom-btn btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import productsJson from '../products.json'

export default {
  name: "ProductDetails",
  data: () => ({
    product: {}
  }),
  computed: {
    productElementsLength() {
      return this.product.hasOwnProperty("elements") ? this.product.elements.length : 0;
    }
  },  
  methods: {
    getImage(filename) {
      return "./images/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    },
    getTranslatedCategory(category = "") {
      return category == "vitamins" ? "vitaminas" 
        : category == "suplements" ? "suplementos" 
        : category == "minerals" ? "minerales"
        : category == "magnesiums" ? "magnesios"
        : category == "prostate" ? "próstata"
        : category == "amino acids" ? "aminoácidos"
        : category == "proteins" ? "proteínas"
        : category == "honey" ? "miel"
        : "";
    }
  },  
  mounted() {    
    this.product = productsJson.find(item => this.getSlug(item.name) == this.$route.params.slug) || {};
  }
}
</script>