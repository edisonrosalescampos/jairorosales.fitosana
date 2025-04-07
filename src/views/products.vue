<template>
  <div class="container-fluid container-xl my-4">
    <!--<div class="lottery d-sm-none">
      <img class="img-thumbnail" src="/images/rifa_proteina.png" alt="Rifa Proteina">
    </div>-->

    <h3 class="title mb-0 text-center">PRODUCTOS</h3>

    <br />

    <SearchBox />

    <br />

    <template v-if="$store.state.isSearchActive">
      <template v-if="$store.state.filteredProducts.length > 0">
        <ProductGroup 
          :title="'Resultados Encontrados (' + $store.state.filteredProducts.length + ')'"       
          :products="$store.state.filteredProducts" 
          category="foundresults" 
        />
      </template>
      <template v-else>
        <p class="text-muted text-center">No se encontraron resultados...</p>
      </template>
    </template>
    <template v-else>
      <!--VITAMINAS-->
      <ProductGroup 
        title="Vitaminas"       
        :products="vitamins" 
        category="vitamins" 
      />

      <!--SUPLEMENTOS-->
      <ProductGroup 
        title="Suplementos"      
        :products="suplements" 
        category="suplements" 
      />

      <!--MINERALES-->
      <ProductGroup 
        title="Minerales"
        :products="minerals" 
        category="minerals"
      />

      <!--MAGNESIOS-->
      <ProductGroup 
        title="Magnesios"      
        :products="magnesiums"
        category="magnesiums"  
      />

      <!--PRÓSTATA-->
      <ProductGroup 
        title="Próstata"        
        :products="prostate" 
        category="prostate"
      />

      <!--AMINOÁCIDOS-->
      <ProductGroup 
        title="Aminoácidos"        
        :products="aminoAcids" 
        category="aminoAcids"
      />

      <!--PROTEINAS-->
      <ProductGroup 
        title="Proteínas"       
        :products="proteins" 
        category="proteins" 
      />

      <!--MIEL-->
      <ProductGroup 
        title="Miel"        
        :products="honey" 
        category="honey"
      />
    </template>
  </div>

  <br />
  <br />
</template>

<script>
import axios from 'axios';
import productsJson from '../products.json';
import SearchBox from '../components/layout/SearchBox.vue';
import ProductGroup from '../components/products/ProductGroup.vue';

export default {
  name: "Products",
  components: {
    SearchBox,
    ProductGroup    
  },
  data: () => ({
    products: productsJson
  }),
  computed: {
    vitamins() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "vitamins")
      );
    },
    suplements() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "suplements")
      );
    },
    minerals() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "minerals")
      );
    },
    magnesiums() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "magnesiums")
      );
    },
    proteins() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "proteins")
      );
    },
    prostate() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "prostate")
      );
    },
    aminoAcids() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "amino acids")
      );
    },
    honey() {
      return this.sortAscByName(
        this.$store.state.products.filter(item => item.category == "honey")
      );
    }
  },
  methods: {
    sortAscByName(arr) {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  created() {
    this.$store.state.products = productsJson;

    /*const api_url = "https://www.bcv.org.ve";
    console.log(
      axios({
        url: api_url,
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
    );*/
  },
  watch: {
    "$store.state.search": {
      handler(newVal, oldVal) {
        // console.log(newVal);

        if (!!newVal) {
          this.$store.state.isSearchActive = true;

          const filteredResults = this.$store.state.products.filter(item => {
            let match = false;
            if (item.name.toLowerCase().includes(newVal.trim().toLowerCase())) {
              match = true;
            }
            else if (item.short_description.toLowerCase().includes(newVal.trim().toLowerCase())) {
              match = true;
            }
            else if (item.description.toLowerCase().includes(newVal.trim().toLowerCase())) {
              match = true;
            }

            if (match) return item;
          });

          this.$store.state.filteredProducts = this.sortAscByName(filteredResults);
        } else {
          this.$store.state.isSearchActive = false;
        }
      },
      deep: true 
    }   
  }
}
</script>