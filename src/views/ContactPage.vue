<script setup>

</script>

<template>
  <div id="contact_page">
    <div class="main_content">
      <span class="title">Contacts</span>

      <div class="description">
        <p>Email : stella-maria.renucci@etu.umontpellier.fr</p>
        <p>Téléphone : 06 08 47 21 05</p>
        <div id="app_icons">
          <a href="https://github.com/Stellatsuu" target="_blank">
            <img src="../assets/images/github_icon.png" alt="github_icon">
          </a>
          <a href="https://www.linkedin.com/in/stella-maria-r/" target="_blank">
            <img src="../assets/images/linkedin_icon.png" alt="linkedin_icon">
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

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