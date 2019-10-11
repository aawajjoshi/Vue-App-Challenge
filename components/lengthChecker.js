const check = (x, y) => {
  return x - y;
};

const checker = new Vue({
  el: "#checker",
  data: {
    guest: "Aawaj",
    sentence: "Hello"
  },
  computed: {
    result: function() {
      const maxLength = 250;
      const sentLength = parseInt(this.sentence.length);
      return `${this.guest}, you can type ${check(
        maxLength,
        sentLength
      )} more characters.`;
    }
  }
});
