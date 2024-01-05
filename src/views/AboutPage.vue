<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
import {onMounted, ref} from "vue";
import LanguageBar from "@/components/LanguageBar.vue";

let totalHours = ref("Loading ...");
let languageStats = ref([]);
let otherLanguages = ref({});

const age = Math.abs(new Date(Date.now() - new Date('2003-04-23').getTime()).getUTCFullYear() - 1970)

onMounted(() => {
  let totalSeconds: number;
  fetch("https://wakatime.com/share/@Stellatsu/244ddc8b-2f2f-4ef3-bcf1-1b7292f17714.json")
      .then(response => response.json()
          .then(result => {
            totalHours.value = result["data"]["grand_total"]["human_readable_total"]
            totalSeconds = result["data"]["grand_total"]["total_seconds_including_other_language"]
          }))
      .then(() =>
          fetch("https://wakatime.com/share/@Stellatsu/eae26f2e-b7e8-46de-a2c5-374f8a13edad.json")
              .then(response => response.json()
                  .then(result => languageStats.value = result["data"])
                  .then(() => {
                    let otherSeconds = totalSeconds

                    languageStats.value.forEach(language => {
                      if (language['percent'] >= 1) {
                        otherSeconds -= language['total_seconds'];
                      }
                    });

                    otherLanguages.value = {
                      "hours": Math.floor(otherSeconds / 3600),
                      "minutes": Math.floor((otherSeconds % 3600) / 3600),
                      "name": "Autres",
                      "percent": (otherSeconds / totalSeconds) * 100,
                    }
                  })));


})
</script>

<template>
  <div id="about_page">
    <div class="main_content">

      <div>
        <span class="title">À propos</span>

        <DecorativeLines/>

        <div>
          <span class="description">Hello, je suis Stella-Maria Renucci, aka Stellatsu.</span>
          <p> Je suis une développeuse de site web (frontend, backend) et d'applications (python, java) de {{ age }}
            ans, établie à Montpellier, en France.
            <br>
            Passionnée par les jeux vidéo, la musique et les technologies, je me suis orientée vers le domaine de
            l'informatique, transformant ainsi mes passions en métier.
          </p>

          <a href="./files/RENUCCI_Stella-Maria_CV.pdf" target="_blank">Curriculum Vitae</a>
        </div>
      </div>

      <div class="stats">
        <span class="title">Statistiques - Code</span>

        <DecorativeLines/>

        <span class="description">Heures de code (avril 2022 - aujourd'hui) : {{ totalHours }}</span>

        <div id="language_stats">
          <LanguageBar v-for="language in languageStats" :language="language"/>
          <LanguageBar :language="otherLanguages"/>
        </div>
      </div>

      <div>
        <span class="title">Autres compétences</span>

        <DecorativeLines/>
      </div>
    </div>


  </div>
</template>

<style scoped>

#language_stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

a {
  color: inherit;
}
</style>