<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
import {ref, type Ref} from "vue";
import ProjectPreview from "@/components/ProjectCard.vue";
import type {ProjetPreview} from "@/types";


let id = 0;
const projets: Ref<ProjetPreview[]> = ref([
  {id: id++, titre: "E:cclesia", description: "....", image: "ecclesia_logo.png"},
  {id: id++, titre: "Nyavigator", description: "....", image: "nyavigator_logo.png"},
  {id: id++, titre: "Aventuriers du Rail - Europe", description: "....", image: "aventuriers_logo.png"}
]);


</script>

<template>
  <div id="projects_page">
    <div class="main_content">

      <div>
        <span class="title">Projets</span>

        <DecorativeLines/>

        <span class="description">
        Vous trouverez sur cette section la liste des projets réalisés depuis mon lancement dans l’informatique.
      </span>
      </div>

      <div id="projects">
        <ProjectPreview v-for="projet in projets" :key="projet.id" :projet="projet"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

#projects {
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
}

#projects > div {
  cursor: pointer;
}

</style>