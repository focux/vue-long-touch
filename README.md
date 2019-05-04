# vue-long-touch

[![npm](https://img.shields.io/npm/v/vue-long-touch.svg) ![npm](https://img.shields.io/npm/dm/vue-long-touch.svg)](https://www.npmjs.com/package/vue-long-touch)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Detect when an element has been touched for X ms.

> ⚠ This only works in touch devices due that we are using touch events to detect when you press some element.

[Demo](https://j1vvwylmj3.codesandbox.io/)


<br>

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-long-touch
```

## Import

```javascript
import Vue from 'vue'
import LongTouch from 'vue-long-touch';

Vue.use(LongTouch)
```

OR

```javascript
import Vue from 'vue'
import LongTouch from 'vue-long-touch';

Vue.use(LongTouch, { duration: 900 })
```

# Usage

The 1v-long-touch1 directive is very easy to use. Just pass a function as the value:

```html

```


# Example

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/j1vvwylmj3?fontsize=14)

```html
<template>
  <div id="app" v-long-touch="handleLongTouch">
    Long Touch {{times}} times
    <p>(just work on touch devices)</p>
    <p>* You can test it using Chrome Developer Console.</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      times: 0
    };
  },
  methods: {
    handleLongTouch() {
      this.times += 1;
    }
  }
};
</script>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
