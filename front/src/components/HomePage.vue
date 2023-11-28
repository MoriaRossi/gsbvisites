<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToGererRapports() {
  router.push('/GererRapports');
}
</script>

<template>
  <div>
    <h1 style="position: relative; top: -150px;">Home Page</h1>
    <button class="button" @click="goToGererRapports" style="position:relative; top: -120px; left: 120px;">Gerer rapports
    </button>
  </div>
</template>