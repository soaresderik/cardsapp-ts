<template>
  <div>
    <div id="section">
      <ul>
        <li v-for="card in cards" :key="card">
          <card :card="card" />
        </li>
      </ul>
    </div>
    <div id="info">
      <p><strong>High Card: </strong>{{ cards[0] }}</p>
      <p>
        <strong>Full House Combo: </strong>
        <span v-if="allFullHouses">
          <p v-for="(fullhouse, i) in allFullHouses" :key="i">
            {{ fullhouse }}
          </p>
        </span>
        <span v-else>NONE</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import fullHouses from "@/utils/fullHouse";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class OrderedPile extends Vue {
  @State cards
  @State rotationCard
  @Action getDeckById

  get allFullHouses() {
      const allFullHouses = fullHouses(this.cards);
      return allFullHouses ? allFullHouses.map(a => a.join(", ")) : null;
  }

  async mounted() {
     await this.getDeckById(this.$route.params.deck_id);
  }
}
</script>

<style scoped>
#section {
  max-width: 500px;
  margin: 10px auto;
  border: 1px solid #979797;
  background: #d8d8d8;
  height: 300px;
}

ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px;
  padding: 8px 15px;
  list-style: none;
  overflow: hidden;
}

ul li {
  display: inline-block;
  flex-direction: column;
}

#info {
  text-align: left;
  margin: 20px auto;
  max-width: 300px;
}

@media (max-width: 450px) {
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>