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
      @click="createNewDeck"
    >
      Submit
    </button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({ name: "form-card" })
export default class FormCard extends Vue {
   @Action newDeck

   data() {
    return {
      inputs: [...new Array(10)].map((i, idx) => ({
        label: `CARD ${idx + 1}`,
        value: ""
      })),
      rotationCard: ""
    };
  }

  async createNewDeck() {
    try {
      const cards = this.inputs
        .filter(i => i.value !== "")
        .map(i => i.value.toUpperCase());

      const inputs = {
        cards,
        rotationCard: this.rotationCard
      };

      if (!cards.length) {
        this.$toast.error("You need to fill at least one card field.");
        return;
      }

      if (!this.rotationCard.length) {
        this.$toast.error("Rotation Card is required");
        return;
      }

      if (
        ![this.rotationCard.toUpperCase(), ...cards].every(i =>
          i.match(/([2-9|A|K|J|Q|]|10)[H|S|C|D]+/g)
        )
      ) {
        this.$toast.error("Invalid Card(s)");
        return;
      }

      const deckId = await this.newDeck(inputs);

      this.$router.push(`/deck/${deckId}`);
    } catch (err) {
      this.$toast.error(err.message);
      return;
    }
      
    }
}

</script>