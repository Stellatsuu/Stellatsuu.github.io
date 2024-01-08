<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
import ProjectCard from "@/components/ProjectCard.vue";

import {ref, type Ref} from "vue";
import type {Project} from "@/types";

import projects_data from '../assets/projects.json'
import ProjectComponent from "@/components/ProjectComponent.vue";

const projects: Ref<Project[]> = ref(projects_data);

let currentProject = ref<Project | null>(null);
function showProject(project: Project){
  currentProject.value = project;
}

function hideProject(){
  currentProject.value = null;
}

</script>

<template>
  <div id="projects_page">
    <div class="main_content" v-if="!currentProject">

      <div>
        <span class="title">Projets</span>

        <DecorativeLines/>

        <span class="description">
          Vous trouverez sur cette section la liste des projets réalisés depuis mon lancement dans l’informatique.
        </span>
      </div>

      <div id="projects">
        <ProjectCard v-for="project in projects" :project="project" @showProject="showProject"/>
      </div>
    </div>

    <ProjectComponent v-else :project="currentProject" @hideProject="hideProject"></ProjectComponent>
  </div>
</template>

<style scoped>

#projects {
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
}

</style>