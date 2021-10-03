<template>
  <div class="scroll">
    <Home />
    <Team />
    <Storyline />
    <Collection />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "./Home.vue";
import Storyline from "./Storyline.vue";
import Team from "./Team.vue";
import Collection from "./Collection.vue";

export default {
  name: "Main",
  components: { Home, Team, Storyline, Collection },
  data() {
    return {};
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
