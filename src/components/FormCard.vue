<template>
  <div>
    <section id="form">
      <div v-for="(input, index) in inputs" v-bind:key="index">
        <label>{{ input.label }}</label>
        <input
          placeholder="Enter Card"
          type="text"
          v-model="input.value"
          maxlength="3"
        />
      </div>
    </section>
    <div id="rotation">
      <h3>Rotation Card</h3>
      <input
        type="text"
        v-model="rotationCard"
        maxlength="3"
        data-cy="rotation"
      />
    </div>

    <button
      id="submit-btn"
      type="button"
      value="SUBMIT"
    >
      Submit
    </button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: "form-card" })
export default class FormCard extends Vue {}

</script>