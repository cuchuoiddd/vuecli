<template>
  <div class="header">
    <router-link to="/" v-if="msg!=='Trang chủ'">
      <span class="float-left">Home</span>
    </router-link>
    {{msg}}
  </div>
</template>

<script>
import EventBus from "./../store/EventBus";

export default {
  name: "HeaderComponent",
  data() {
    return {
      msg: "Trang chủ"
    };
  },
  created() {
    EventBus.$on("msg", this.handler);
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off("msg", this.handler);
  },
  methods: {
    handler(e) {
      this.msg = e;
    }
  }
};
</script>

<style>
</style>