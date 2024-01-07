<script setup lang="ts">
import type {Project} from "@/types";

defineProps<{
  project: Project
}>();

defineEmits<{
  showProject: [project: Project]
}>()

</script>

<template>
  <div class="card" @click="$emit('showProject', project)">
    <img :src="`./images/${project.logo}`" alt="project_logo" v-if="project.logo"/>
    <div>
      <p><b>{{ project.name }}</b></p>
      <p>{{ project.tags }}</p>
    </div>
  </div>
</template>

<style scoped>

.card {
  display: flex;
  background: #38302C;
  width: 330px;
  margin-bottom: 30px;
  cursor: pointer;
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