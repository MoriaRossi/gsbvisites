<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function GoToModifier(){}

function GoToCreerRapport(){
    router.push('/CreerRapport');

}


</script>
<template>
    <h1 style="position: relative;
    top: -150px;">Mes rapports</h1>
    <button class="button" @click="GoToModifier" style="position: relative;
    top: -150px; left: 120px;">Modifier
    </button>
    <button class="button" @click="GoToCreerRapport" style="position: relative;
    top: -150px; left: 140px;">Créer un rapport
    </button>
</template>