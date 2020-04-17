import Vue from "vue";
import Vuex from "vuex";
import api from "../utils/api";
import { InputCards, DeckListResponse } from "./interfaces";
import cardRotator from "@/utils/cardRotator";

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
    async getDeckById({ commit, state }, deckId) {
      try {
        // Get user hand
        const { data } = await api.get<DeckListResponse>(
          `/deck/${deckId}/pile/${deckId}/list`
        );
        const { cards } = data.piles[deckId];
        const codes = cards.map((i) => i.code);
        const ordered = cardRotator(codes, state.rotationCard);

        commit("setCards", ordered);
      } catch (err) {
        throw new Error("Internal server error.");
      }
    },
  },
  modules: {},
});
