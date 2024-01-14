<script setup lang="ts">

import DecorativeLines from "@/components/DecorativeLines.vue";
import {onMounted, ref} from "vue";
import LanguageBar from "@/components/LanguageBar.vue";
import type {Language} from "@/types";

let totalHours = ref("Loading ...");

let id = 0
let languageStats = ref<Language[]>([])
let otherLanguages = ref<Language>({
  id: 0,
  name: "",
  hours: 0,
  minutes: 0,
  percent: 0,
  total_seconds: 0
});

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
                  .then(result => {
                    for (let language of result["data"]) {
                      languageStats.value.push({
                        "id": id++,
                        "hours": language["hours"],
                        "minutes": language["minutes"],
                        "name": language["name"],
                        "percent": language["percent"],
                        "total_seconds": language["total_seconds"]
                      })
                    }
                  })
                  .then(() => {
                    let otherSeconds = totalSeconds

                    languageStats.value.forEach(language => {
                      if (language['percent'] >= 1) {
                        otherSeconds -= language['total_seconds'];
                      }
                    });

                    otherLanguages.value = {
                      "id": id++,
                      "hours": Math.floor(otherSeconds / 3600),
                      "minutes": Math.floor((otherSeconds % 3600) / 3600),
                      "name": "Autres",
                      "percent": (otherSeconds / totalSeconds) * 100,
                      "total_seconds": otherSeconds
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
          <p>
            Diplomée d'un Baccalauréat Général en 2021, avec pour matières NSI, Mathématiques et SI.
            <br>
            Actuellement étudiante en 3e année de BUT Informatique : Réalisation d'applications : conception, développement et validation, à l'IUT de Montpellier-Sète, en vue d'intégrer le monde du travail.
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

        <span class="description">Compétences complémentaires à celles de code.</span>
        <div id="other_skills">
          <div>
            <p><b>Git</b></p>
            <span>Utilisation de Gitlab et Github dans de nombreux projets.</span>
          </div>
          <div>
            <p><b>Méthodes Agiles</b></p>
            <span>Rôle de Scrum Master et de Product Owner lors de projets.</span>
          </div>
          <div>
            <p><b>Suite Office</b></p>
            <span>Usage majoritaire de Word pour les rédactions et rendus.</span>
          </div>
          <div>
            <p><b>Suite Atlassian</b></p>
            <span>Utilisation de Trello ainsi que de Jira pour diverses projets.</span>
          </div>
          <div>
            <p><b>SQL</b></p>
            <span>Utilisation du SQL pour diverses projets contenant des bases de données. (Ex : création de scripts et requêtes durant les projets)</span>
          </div>
          <div>
            <p><b>PLSQL</b></p>
            <span>Extension au SQL, utilisé pour automatiser certaines actions concernant la BDD. (Ex : création de fonctions et triggers en PLSQL pour les projets et TD.)</span>
          </div>
        </div>
      </div>

      <div class="pn_but">
        <span class="title">Point de vue - BUT Informatique</span>

        <DecorativeLines/>

        <span class="description">Cette partie concerne mon point de vue sur ma formation, notamment pour la démarche "Portfolio".</span>
        <p>Globalement, le BUT Informatique m'aura apporté la plupart de mes connaissances dans le domaine informatique aujourd'hui et je pense avoir majoritairement bien réussi à accomplir les différents objectifs de la formation, notamment à la vue mes résultats et de mes nouvelles compétences.</p>
        <p>Ces connaissances se sont avérées extrêmement bénéfiques durant mes projets, lors de mon stage ou encore, de mon expérience en alternance, tous axés principalement sur le développement web.
          Par ailleurs, le développement web est devenu ma thématique favorite au cours de ces trois années, à tel point que je souhaite désormais me spécialiser dans ce domaine. À l'inverse, les thématiques relatives au domaine du réseau, ou encore, des mathématiques, m'ont moins attiré, principalement à cause de certaines difficultés, que j'ai néanmoins réussi à surmonter avec persévérance et travail.
        </p>
        <p>Pour l'instant, je ne prévois pas de continuer mes études après le BUT Informatique. La formation étant majoritairement axée pour démarrer directement dans le monde du travail, je compte en profiter et potentiellement devenir développeuse Fullstack, étant donné que j'apprécie le développement frontend et backend. Mais peut-être que je changerai d'avis un jour ! Qui sait...</p>
      </div>
    </div>


  </div>
</template>

<style scoped>

#language_stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
}

#other_skills {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>