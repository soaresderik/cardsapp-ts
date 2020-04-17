<template>
  <div id="app">
    <header>
      {{ nameComponent }}
    </header>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  get nameComponent() {
    return this.$route.name;
  }
}
</script>