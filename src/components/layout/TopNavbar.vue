<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/products"
              :class="['nav-link', isRouteActive(['Home', 'Products', 'ProductDetails'])]"
            >Catálogo</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">¿Quiénes somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Misión</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Visión</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  methods: {
    isRouteActive(routes) {
      return routes.includes(this.$route.name) ? 'active' : '';
    }
  }
};
</script>
