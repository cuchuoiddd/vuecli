<template>
  <div id="app">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <HeaderComponent />
        </div>
        <div class="card-body">
          <router-view />
        </div>
        <div class="card-footer text-muted">
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "App",
  components: { HeaderComponent, FooterComponent }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
