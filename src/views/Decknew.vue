<template>
  <div class="decknew">
    <form-cards />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import FormCards from "../components/FormCard";

@Component({
  components: {
    FormCards
  }
})
export default class Decknew extends Vue {}
</script>
