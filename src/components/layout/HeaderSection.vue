<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="top container">
        <div class="shipment">
          <h6 class="shipment-description">ENVÍO GRATIS A TODO EL PAÍS <i class="fas fa-truck fa-flip-horizontal ms-1"></i></h6>
        </div>
        <div class="social">
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61565835603289&mibextid=ZbWKwL" title="Facebook" target="_blank"><span><i class="fab fa-facebook-f"></i></span></a></li>
            <li><a href="https://www.instagram.com/fitosana_jr?igsh=MTg4dHViNmpleXQ3eg==" title="Instagram" target="_blank"><span><i class="fab fa-instagram"></i></span></a></li>   
            <li><a href="" title="tiktok" target="_blank"><span><i class="fab fa-tiktok"></i></span></a></li> 
          </ul>
        </div>
      </div> 
    </div>     
    <div class="company">
      <div class="company-logo">
        <img src="/images/cintillo_fitosana.png" alt="">
      </div>
      <!--<div class="company-info">
        <h4 class="company-name">JAIRO ROSALES</h4>
        <h6 class="distributor-name">DISTRIBUIDOR AUTORIZADO FITOSANA</h6>
      </div>-->
    </div>
      
      <TopNavbar />
    </div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'

export default {
  name: "HeaderSection",
  components: {
    TopNavbar
  },
}
</script>