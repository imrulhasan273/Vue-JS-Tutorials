new Vue({
  el: "#vue-app",
  data: {
    age: 25,
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    click: function () {
      alert("You Click Me");
    },
  },
});
