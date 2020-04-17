import Vue from "vue";
import Vuex from "vuex";
import api from "../utils/api";
import { InputCards } from "./interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    rotationCard: null,
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    setRotationCard(state, rotationCard) {
      state.rotationCard = rotationCard;
    },
  },
  actions: {
    async newDeck({ commit }, inputs: InputCards) {
      try {
        const join = inputs.cards.join(",");
        // Create deck
        const { data } = await api.get(`/deck/new/?cards=${join}`);

        // Draw inputed cards
        await api.get(
          `/deck/${data.deck_id}/draw/?count=${inputs.cards.length}`
        );

        // Add drawed card to user (the second param could be a username)
        await api.get(
          `/deck/${data.deck_id}/pile/${data.deck_id}/add/?cards=${join}`
        );

        commit("setRotationCard", inputs.rotationCard);
        return data.deck_id;
      } catch (err) {
        throw new Error("Internal server error.");
      }
    },
  },
  modules: {},
});
