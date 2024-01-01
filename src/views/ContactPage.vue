<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
</script>

<template>
  <div id="contact_page">
    <div class="main_content">
      <span class="title">Contacts</span>

      <DecorativeLines/>

      <div class="description">
        <span>Email : stella-maria.renucci@etu.umontpellier.fr</span>
        <span>Téléphone : 06 08 47 21 05</span>

        <div id="app_icons">
          <a href="https://github.com/Stellatsuu" target="_blank">
            <img src="../assets/images/github_icon.png" alt="github_icon">
          </a>
          <a href="https://www.linkedin.com/in/stella-maria-r/" target="_blank">
            <img src="../assets/images/linkedin_icon.png" alt="linkedin_icon">
          </a>

          <!-- TODO : check CV path-->
          <a href="./files/RENUCCI_Stella-Maria_CV.pdf" target="_blank">
            <img src="../assets/images/cv_icon.png" alt="cv_icon"/>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

.description {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#app_icons {
  display: flex;
  gap: 3%;
}

#app_icons img {
  height: 50px;
  width: 50px;
  cursor: pointer;
}

@media screen and (max-width: 660px) {

  #app_icons img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
}

</style>