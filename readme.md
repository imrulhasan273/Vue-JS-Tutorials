# Vue JS tutorials

---

# Installation

---

CDN [For Testing Purpose Only]

```php
<script src="https://unpkg.com/vue@next"></script>
```

## Folder Structure

![](markdowns/1.png)

---

# **The Vue Instance**

---

- `new Vue({});` controls the whole part or a certain part of the application.

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue JS - Tutorials</title>
    <link href="styles.css" rel="stylesheet" />
    <script src="https://unpkg.com/vue"></script>
  </head>
  <body>
    <div id="vue-app">
      <h1>{{ name }}</h1>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

- We name the `div` with `id=vue-app`

- here we shows the `name` variable with in the `div` with the `id` inside `{{ }}`.

`app.js`

```js
new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
  },
});
```

- Here `el` parameter takes the id of `div` inside `index.html` to control the div.

- pass the data with `name` variable using `data` parameter from `app.js` to the `div` with the `id`.

---

# **Data and Methods**

---

- Git: **git checkout data_methods**

## Get the method value

`index.html`

```html
<body>
  <div id="vue-app">
    <h1>{{ greet() }}</h1>
    <p>Name: {{ name }}</p>
    <p>Job: {{ job }}</p>
  </div>
  <script src="app.js"></script>
</body>
```

- we call the function usign `greet()`

`app.js`

```js
new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
    job: "Engineer",
  },
  methods: {
    greet: function () {
      return "Good Morning";
    },
  },
});
```

- `greet` is the name of function

---

## Passing data into function as parameter

`index.html`

```html
<body>
  <div id="vue-app">
    <h1>{{ greet('afternoon') }}</h1>
    <p>Name: {{ name }}</p>
    <p>Job: {{ job }}</p>
  </div>
  <script src="app.js"></script>
</body>
```

`app.js`

```js
new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
    job: "Engineer",
  },
  methods: {
    greet: function (time) {
      return "Good " + time;
    },
  },
});
```

### Output

![](markdowns/2.png)

---

## Access data inside the Vue instance

- we can also access the data inside view instance from methods.

`app.js`

```js
new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
    job: "Engineer",
  },
  methods: {
    greet: function (time) {
      to = this.name;
      return "Good " + time + " " + to;
    },
  },
});
```

---

---

# **Data Binding**

---

- How can pass a variable to `href` inside `index.html`?

`index.html`

```html
<body>
  <div id="vue-app">
    <h1>Data Binding</h1>
    <a v-bind:href="website">Portfolio</a>
  </div>
  <script src="app.js"></script>
</body>
```

> Use `v-bind:href` instead of just `href` to bind with Vue data.

`app.js`

```js
new Vue({
  el: "#vue-app", //connects with a `div` inside index.html
  data: {
    name: "Imrul Hasan",
    job: "Engineer",
    website: "https://imrulhasan.me",
  },
  methods: {
    greet: function (time) {
      to = this.name;
      return "Good " + time + " " + to;
    },
  },
});
```

### Inspect

![](markdowns/5.png)

Another example

`index.html`

```html
<input type="text" v-bind:value="name" />
```

- So `v-bind:` is used to bind data with different attributes.

---

## How to get full `tags` from **js** inside **index.html**?

`index.html`

```html
<body>
  <div id="vue-app">
    <h1>Data Binding</h1>
    <a v-bind:href="website">Portfolio</a>
    <br />
    <input type="text" v-bind:value="name" />
    <br />
    <p v-html="websiteTag"></p>
  </div>
  <script src="app.js"></script>
</body>
```

- Here we bind with `v-html`.

`app.js`

```js
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
```

## Outputs

![](markdowns/6.png)

---
