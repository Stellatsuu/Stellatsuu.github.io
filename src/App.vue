<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

</script>

<template>
  <header>
    <link rel="stylesheet" href="./assets/main.css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type="text/css">

    <nav>
      <span :class="{ 'active': $route.name === 'main' }" @click="router.push({'name': 'main'})">Stellatsu</span>

      <div class="menu">
        <ul>
          <li><span :class="{ 'active': $route.name === 'about' }"
                    @click="router.push({'name': 'about'})">A propos</span></li>
          <li><span :class="{ 'active': $route.name === 'projects' }"
                    @click="router.push({'name': 'projects'})">Projets</span></li>
          <li><span :class="{ 'active': $route.name === 'contact' }"
                    @click="router.push({'name': 'contact'})">Contact</span></li>
        </ul>
      </div>

    </nav>
  </header>

  <main>
    <router-view/>
  </main>

</template>

<style scoped>
.active {
  text-decoration: underline;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 20px 10%;
}

nav span {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.1em;
  cursor: pointer;
}

nav ul {
  display: flex;
  gap: 30px;

  list-style: none;
}
</style>
