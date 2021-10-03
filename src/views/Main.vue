<template>
  <div class="scroll">
    <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
    <div class="section"><Home /></div>
    <div class="section"><Team /></div>
    <div class="section"><Storyline /></div>
    <div class="section"><Collection /></div>
    <!-- </full-page> -->
  </div>
</template>

<script>
import Home from "./Home.vue";
import Storyline from "./Storyline.vue";
import Team from "./Team.vue";
import Collection from "./Collection.vue";

export default {
  name: "Main",
  components: { Home, Team, Storyline, Collection },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["home", "team", "storyline", "collection"],
        scrollingSpeed: 1300,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  transition: all 3s ease;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

p {
  max-width: 640px;
}
</style>
