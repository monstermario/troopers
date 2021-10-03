<template>
  <div class="main-content" id="storsyline">
    <video autoplay muted loop playsinline class="myVideo">
      <source src="../assets/img/bg/storyline-loop-comp.mp4" type="video/mp4" />
    </video>
    <div class="router-content">
      <div class="storyline appear">
        <h1 class="mb-2 md:mb-6">storyline</h1>
        <p class="mb-6 md:mb-16">
          The Ethereal Empire is deploying an elite force to protect its
          Metaverse.
          <br /><br />
          Troopers have been established to win the ever-growing inevitability
          of a conflict for the Metaverse, which The EtherTroopers must win in
          order to maintain power and control of their kingdom.
          <br /><br />
          Word from the control room is that the conflict for power is nearing
          ever closer from a Rebel force. The stature of which, is currently
          unknown and therefore a highly skilled and powerful defence must be
          trained, and deployed with speed in anticipation for an unknown enemy.
          <br /><br />
          As the threat draws nearer, more details will be shared as to who and
          what this rebel threat is, and their traits..
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Team",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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

@media (min-width: 768px) and (max-height: 800px) {
  .storyline {
    h1 {
      font-size: 45px;
    }
    & > p {
      max-width: 100%;
      margin-bottom: 24px;
    }
  }
}
</style>
