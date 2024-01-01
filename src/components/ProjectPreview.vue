<script setup lang="ts">
import type {ProjetPreview} from "@/types";

defineProps<{
  projet: ProjetPreview
}>();

</script>

<template>
  <div>
    <img :src="`./images/${projet.image}`" alt="project_logo"/>

    <div>
      <p><strong>{{ projet.titre }}</strong></p>
      <p>{{ projet.description }}</p>
    </div>
  </div>
</template>

<style scoped>

p {
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

img {
  width: 50px;
  height: 50px;
}

div {
  background: #38302C;
  width: 25%;
  max-width: 350px;
}


</style>