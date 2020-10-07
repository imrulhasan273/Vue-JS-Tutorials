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
