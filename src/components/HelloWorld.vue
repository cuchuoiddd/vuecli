<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="emitGlobalClickEvent">
      Click me!
    </button>
  </div>
</template>

<script>
import EventBus from '../store/EventBus'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    emitGlobalClickEvent() {
      // Send the event on a channel (hello) with a payload
      EventBus.$emit('hello', 'i hear you');
      console.log(23423)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
