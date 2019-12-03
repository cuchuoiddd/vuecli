<template>
  <div class="hello">
    <button @click="add">Post</button>
  </div>
</template>

<script>
import EventBus from "../EventBus";
import axios from "axios";
let config = {
  headers: {
    "Access-Control-Allow-Origin": " *"
  }
};

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Headers = {};
export default {
  name: "Test",
  created() {
    // Listening the event hello
    EventBus.$on("hello", this.handler);
  },
  mounted() {
    axios.get(`http://localhost/blog/public/api/users`).then(response => {
      console.log(11111, response.data);
    });
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off("hello", this.handler);
  },
  methods: {
    handler(e) {
      console.log("recieved: ", e);
    },
    add() {
      axios
        .post(`http://127.0.0.1:8000/api/users`,
        {
          name: "21231gf23",
          email:"abcdfg@gmail.com",
          password:"1233gsdg545"
        })
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
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
