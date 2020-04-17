<template>
  <div id="card" :style="color">
    <div id="content">
      <div>{{ card[0] }} {{ suit }}</div>
      <div>{{ suit }} {{ card[0] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["card"],
  data() {
    return {
      suits: {
        S: {
          icon: "♠",
          color: "black"
        },
        D: {
          icon: "♦",
          color: "red"
        },
        C: {
          icon: "♣",
          color: "black"
        },
        H: {
          icon: "♥",
          color: "red"
        }
      }
    };
  },
  computed: {
    suit() {
      return this.suits[this.card[1]].icon;
    },
    color() {
      return `color: ${this.suits[this.card[1]].color}`;
    }
  }
};
</script>

<style scoped>
#card {
  margin: 5px;
  padding: 5px;
  width: 60px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 2px 12px 0px rgba(0, 0, 0, 0.43);
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  margin: 0;
  padding: 0;
}

#content div {
  font-size: 15px;
  font-weight: bold;
  text-align: left;
}

#content div:last-of-type {
  transform: rotate(180deg);
}
</style>
