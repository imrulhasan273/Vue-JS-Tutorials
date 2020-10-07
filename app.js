new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
    job: "Engineer",
    website: "https://imrulhasan.me",
    websiteTag: '<a href="https://imrulhasan.me">Portfolio</a>',
  },
  methods: {
    greet: function (time) {
      to = this.name;
      return "Good " + time + " " + to;
    },
  },
});
