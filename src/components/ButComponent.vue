<script setup lang="ts">

defineProps<{
  name: string;
  description: string;
  level: string;
}>();

</script>

<template>
  <div class="but_element">
      <p><b>{{ name }}</b></p>
      <span>Niveau estimé : {{ level }}</span>
      <p>{{description}}</p>
  </div>
</template>

<style scoped>
.but_element {
  display: flex;
  flex-direction: column;
  background: #38302C;
  width: 300px;
  margin-top: 20px;
  padding: 0 10px 10px 10px;
}
</style>