<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
import type {Project} from "@/types";
import ButComponent from "@/components/ButComponent.vue";

defineProps<{
  project: Project
}>();

defineEmits<{
  hideProject: []
}>()

</script>

<template>
  <div class="project_page">

    <div class="main_content">

      <div>

        <div class="title_elements">
          <button class="back_button" @click="$emit('hideProject')">&#8249;</button>
          <span class="title">{{ project.name }}</span>
          <a id="lien_projet" :href="project.link" v-if="project.link">Lien projet</a>
        </div>

        <DecorativeLines/>

        <span class="description" >{{project.roles}} || {{project.date}}</span>
        <span v-html="project.description"></span>
      </div>

      <div v-if="project.pn_but.length != 0">

        <span class="description">Relations entre les réalisations personnelles et le
          <a href="./files/PN_BUT_Informatique.pdf" target="_blank">programme</a>
            de BUT Informatique
        </span>

        <div class="pn_but">
          <ButComponent v-for="element in project.pn_but" :name="element['name']" :description="element['description']" :level="element['level']"/>
        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>
.back_button {
  background: #38302c;
  height: 30px;
  width: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.5em;
  text-align: center;
  color: white;
}

.title_elements{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pn_but {
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
}

#lien_projet {
  background: #38302c;
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
}

</style>