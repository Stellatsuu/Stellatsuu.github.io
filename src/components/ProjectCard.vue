<script setup lang="ts">
import type {ProjetPreview} from "@/types";

defineProps<{
  projet: ProjetPreview
}>();

</script>

<template>
  <div class="card">
    <img :src="`./images/${projet.image}`" alt="project_logo"/>
    <div>
      <p><b>{{ projet.titre }}</b></p>
      <p>{{ projet.description }}</p>
    </div>
  </div>
</template>

<style scoped>

.card {
  display: flex;
  background: #38302C;
  width: 330px;
  margin-bottom: 30px;
}

p {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-left: 10px;
}

img {
  width: 30%;
  height: auto;
}

</style>