Vue.component("greeting", {
  template:
    "<p>re-usable component. {{name}}. <button v-on:click='changeName'>Change Name</button> </p>",

  data: function () {
    return {
      name: "Imrul",
    };
  },

  methods: {
    changeName: function () {
      this.name = "Hasan";
    },
  },
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
  el: "#vue-app-one",
});

new Vue({
  el: "#vue-app-two",
});
