<template>
  <div id="app" class="app">
    <Header />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/ui/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
#app {
  font-family: "SpaceType-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}
body {
  background: #333;
}

.slide-fade-enter-active {
  transition: all 0s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter {
  /* transform: translateX(-100vw);
  opacity: 0; */
}
.slide-fade-leave-to {
  /* transform: translateY(-80px); */
  opacity: 0;
}
</style>
