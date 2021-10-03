<template>
  <div class="main-content">
    <video data-autoplay muted playsinline loop class="myVideo">
      <source
        src="../assets/img/bg/collection-loop-comp.mp4"
        type="video/mp4"
      />
    </video>
    <div class="router-content">
      <div class="collection appear">
        <h1 class="mb-2 md:mb-6">COLLECTION</h1>
        <p class="mb-4 md:mb-16 text-left">
          A collection of 8,888 industry grade level EtherTroopers have been
          assembled on the Ethereum Blockchain, all with a variety of traits and
          rarities. Every single piece within the Troopers ranks displays
          superior artistic quality, and is the result of hours of development,
          refinement and contemplation. No matter what rarity level, every
          EtherTrooper is a stunning piece of artwork with true attention to
          detail behind it.
        </p>

        <h4 class="mb-4 md:my-6">MINT PRICE: 0.1ETH</h4>
        <div class="collection-box overflow-hidden flex">
          <div class="collections flex">
            <div
              class="collection-item mx-2"
              v-for="collection in collections"
              :key="'collection-' + collection.id"
            >
              <img :src="collection.image" alt="" />
            </div>
          </div>
          <div class="collections flex">
            <div
              class="collection-item mx-2"
              v-for="collection in collections"
              :key="'collection-' + collection.id"
            >
              <img :src="collection.image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Collection",
  data() {
    return {
      collections: [
        { id: 1, image: "/img/1.jpg" },
        { id: 2, image: "/img/2.jpg" },
        { id: 3, image: "/img/3.jpg" },
        { id: 4, image: "/img/4.jpg" },
        { id: 5, image: "/img/1.jpg" },
        { id: 6, image: "/img/2.jpg" },
        { id: 7, image: "/img/3.jpg" },
        { id: 8, image: "/img/4.jpg" },
        { id: 9, image: "/img/1.jpg" },
        { id: 10, image: "/img/2.jpg" },
        { id: 11, image: "/img/3.jpg" },
        { id: 12, image: "/img/4.jpg" },
        { id: 13, image: "/img/1.jpg" },
        { id: 14, image: "/img/2.jpg" },
        { id: 15, image: "/img/3.jpg" },
        { id: 16, image: "/img/4.jpg" },
      ],
    };
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
  max-width: 880px;
}
h4 {
  width: fit-content;
  font-size: 12px;
  line-height: 29px;
  padding: 0px 16px;
  border: solid 1px #fff;
  background-color: rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    font-size: 10px;
    line-height: 24px;
  }
}
.collection-box {
  margin: 0 -100px;
  @media (max-width: 767px) {
    margin: 0 -20px;
  }
}
.collections {
  width: fit-content;
  -webkit-animation: scrollbg 100s linear infinite;
  animation: scrollbg 100s linear infinite;
  .collection-item {
    width: 280px;
    height: 280px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    img {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 767px) {
      width: 220px;
      height: 220px;
    }
  }
}
@-webkit-keyframes scrollbg {
  0% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes scrollbg {
  0% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
@media (min-width: 768px) and (max-height: 800px) {
  .collection {
    h1 {
      font-size: 50px;
    }
    & > p {
      max-width: 100%;
      margin-bottom: 24px;
    }
    .collection-item {
      width: 170px;
      min-width: 170px;
      height: 170px;
    }
    .member-info > div {
      flex-direction: column;
    }
  }
}
@media (min-width: 768px) and (max-height: 600px) {
  .collection {
    h1 {
      font-size: 30px;
      margin-bottom: 15px;
    }
    & > p {
      max-width: 100%;
      margin-bottom: 15px;
      font-size: 14px;
    }
    .member-info > div {
      flex-direction: column;
    }
  }
}
</style>
