<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToGererRapports() {
  router.push('/GererRapports');
}

function goToPageTest(){
  router.push('/page_test')
}




</script>

<template>
  <div>
    <h1 style="position: relative; top: -150px;">Home Page</h1>
    <button class="button" @click="goToGererRapports" style="position:relative; top: -120px; left: 120px;">Gerer rapports
    </button>
    <button class="button" @click="goToPageTest" style="position:relative; top: -120px; left: 120px;">page test
    </button>

  </div>
</template>