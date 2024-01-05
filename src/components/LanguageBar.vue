<script setup lang="ts">
import type {Language} from "@/types";

defineProps<{
  language: Language
}>();

</script>

<template>
  <div v-if="language.percent >= 1">
    <p> {{ language.name }} - {{ language.hours }} hrs {{ language.minutes }} min</p>
    <div class="progress_bar">
      <span class="progress" :style="{ width: `${language.percent}%`}"></span>
      <span>{{ Math.floor(language.percent) }}%</span>
    </div>
  </div>
</template>

<style scoped>
.progress_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  width: 250px;
  border: #38302c solid 2px;
}

.progress {
  height: 15px;
  background: #38302C;
}

</style>