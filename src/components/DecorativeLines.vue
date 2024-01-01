<script setup lang="ts">
</script>

<template>
  <div class="decorative_lines">
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>

.decorative_lines > span {
  display: block;
  width: 90px;
  height: 5px;
  border-radius: 5px;
  background: #38302C;
}

.decorative_lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.decorative_lines > span:last-child {
  margin-left: 20px;
}

</style>