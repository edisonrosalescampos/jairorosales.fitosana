<template>
  <div class="page">
    <HeaderSection />

    <RouterView />    

    <br/>
    <br/>

    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/layout/HeaderSection.vue';
import FooterSection from './components/layout/FooterSection.vue';

export default {
  name: "app",
  components: {
    HeaderSection,
    FooterSection,
  },  
}
</script>
