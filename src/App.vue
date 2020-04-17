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

<style>
* {
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body {
  background: #dff4f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  width: 100%;
  border-radius: 2px;
  padding: 10px;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

input::placeholder {
  color: #bebebe;
  text-transform: none;
}

label {
  color: #b1b1b1;
  font-size: 12px;
  margin: 5px 0;
}

button {
  cursor: pointer;
}

header {
  margin: auto;
  padding: 20px;
  background: #258600;
  font-size: 22px;
  color: #fbe500;
  font-weight: bold;
  height: 100%;
}
</style>