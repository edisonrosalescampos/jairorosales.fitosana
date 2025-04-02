<template>
  <div class="row justify-content-center">
    <div class="col-sm-9 col-md-8 col-lg-6">
      <div class="input-group search-box">
        <input type="text" class="form-control" placeholder="Busca un producto por nombre o descripción..." v-model="$store.state.search">
        <div class="input-group-text">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>  
  </div>  
</template>

<script>
export default {
  name: "SearchBox"
}
</script>