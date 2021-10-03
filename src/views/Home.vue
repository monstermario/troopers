<template>
  <div class="main-content" id="home">
    <video autoplay muted loop playsinline class="myVideo">
      <source src="../assets/img/bg/home-loop-comp.mp4" type="video/mp4" />
    </video>
    <video
      autoplay
      playsinline
      muted
      @ended="firstVideo = false"
      class="myVideo"
      v-if="firstVideo"
    >
      <source src="../assets/img/bg/home-opening-comp.mp4" type="video/mp4" />
    </video>
    <img src="../assets/img/bg-main.png" class="main-img" alt="" v-else />
    <div class="router-content">
      <template v-if="!firstVideo">
        <div class="home appear flex flex-col items-around md:block">
          <h1
            class="mb-2 md:mb-8 flex flex-wrap justify-center md:justify-start"
          >
            <span>ETHER</span><span>TROOPERS</span>
          </h1>
          <p class="mb-6 md:mb-16 text-center md:text-left">
            An impending rebel threat is imminent.<br />
            8,888 EtherTroopers are being assembled on the Ethereum Blockchain
            to maintain control and uphold their kingdom. <br /><br />
            Each EtherTrooper is randomly generated, following an extensive and
            thoroughly detailed design process of the highest grade, by artist
            Dhruvil Bhayani.
          </p>

          <div class="connect-btns flex" v-if="!userAddress">
            <a
              href="#"
              class="btn-wallet flex items-center mr-4"
              @click="connectMetaMask"
            >
              <svg
                width="24"
                height="22"
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.403 14.654c.548-.168 1.194-.345 1.821-.57.24-.086.201-.4-.056-.524-.398-.192-.807-.364-1.213-.54-.18-.079-.347-.045-.439.131-.18.348-.356.7-.51 1.061-.103.241.046.44.397.442m-4.347-.326c-.003-.017 0-.048-.01-.071-.191-.394-.37-.793-.586-1.172-.042-.075-.249-.128-.34-.093a13.89 13.89 0 0 0-1.286.567c-.252.128-.244.464.013.55a29.08 29.08 0 0 0 1.836.537c.216.057.372-.099.373-.318m1.96 5.505v-.002c.518 0 1.038.008 1.556-.003.307-.006.413-.112.384-.358-.042-.36-.09-.72-.149-1.077-.044-.273-.326-.533-.598-.536-.802-.01-1.604-.009-2.406 0-.262.002-.586.277-.613.496-.04.332-.082.664-.11.998-.032.374.055.473.435.48.5.01 1 .002 1.5.002m11.32-16.049c-.017-.066-.03-.14-.056-.208-.294-.807-.587-1.613-.885-2.418-.153-.413-.296-.452-.672-.197L14.09 6.152c-.37.25-.376.405-.02.682.89.692 1.783 1.383 2.678 2.07.102.078.221.15.344.184 1.374.372 2.75.737 4.125 1.101.343.09.436.031.525-.308.41-1.56.821-3.119 1.23-4.679.123-.468.24-.938.364-1.418M2.679 10.221c.019-.004.092-.018.165-.037 1.356-.361 2.713-.721 4.068-1.087a.961.961 0 0 0 .329-.153c.925-.709 1.848-1.42 2.766-2.139.313-.245.307-.4-.024-.628-.913-.63-1.832-1.253-2.75-1.876A3112.167 3112.167 0 0 0 2.26.927c-.298-.202-.465-.151-.587.172-.302.804-.604 1.608-.89 2.417a.866.866 0 0 0-.013.459c.121.526.265 1.048.401 1.57l1.133 4.357c.044.17.09.332.375.32M21.883 21c-.13-.033-.341-.082-.55-.14-1.245-.34-2.492-.676-3.733-1.032-.391-.112-.695-.046-1.022.201a68.175 68.175 0 0 1-2.524 1.803c-.151.104-.37.153-.558.156-.973.015-1.946.018-2.92-.002a1.158 1.158 0 0 1-.6-.192c-.874-.605-1.733-1.23-2.592-1.854a.839.839 0 0 0-.77-.14c-1.408.392-2.818.774-4.226 1.162-.498.137-.746.01-.892-.48a422.5 422.5 0 0 1-1.263-4.323c-.04-.14-.008-.315.038-.459.424-1.333.851-2.666 1.293-3.994.136-.407.204-.766.023-1.207-.217-.528-.283-1.117-.408-1.68C.789 7.062.399 5.308.017 3.55A.876.876 0 0 1 .04 3.12c.271-.854.568-1.7.833-2.555.136-.437.439-.692.993-.482 2.15.814 4.308 1.612 6.47 2.398.301.11.638.173.96.177 1.577.017 3.156-.02 4.733.019.83.02 1.595-.134 2.364-.432 1.898-.735 3.813-1.426 5.721-2.132.631-.234.86-.12 1.071.522.207.63.38 1.272.63 1.884.232.572.227 1.117.09 1.709-.473 2.052-.91 4.111-1.36 6.168-.007.027-.006.06-.021.08-.307.44-.128.865.019 1.304.437 1.31.86 2.624 1.275 3.94a.94.94 0 0 1 .013.512 445.306 445.306 0 0 1-1.246 4.27c-.11.37-.286.506-.702.5"
                  fill="white"
                  fill-rule="evenodd"
                />
              </svg>
              <span>CONNET METAMASK</span>
            </a>
            <a href="#" class="btn-join flex items-center">
              <svg
                width="26"
                height="19"
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9.556.1.217.267c-3.9 1.158-5.697 2.917-5.697 2.917s.476-.268 1.278-.646C7.67 1.592 9.513 1.302 10.27 1.236c.13-.023.238-.045.368-.045a17.837 17.837 0 0 1 4.375-.045 17.32 17.32 0 0 1 6.52 2.138s-1.71-1.67-5.393-2.828L16.444.1h.078c.489.01 3.187.162 6.009 2.338 0 0 3.119 5.81 3.119 12.978l-.012.02-.034.056c-.313.486-2.23 3.166-6.582 3.308 0 0-.78-.957-1.43-1.803 2.472-.718 3.612-2.195 3.865-2.564l.042-.063.014-.022a12.273 12.273 0 0 1-2.491 1.313c-1.083.468-2.123.78-3.141.957-2.08.401-3.986.29-5.61-.022a17.814 17.814 0 0 1-3.184-.957c-.499-.2-1.04-.445-1.582-.757-.065-.045-.13-.067-.195-.111a.3.3 0 0 1-.086-.067c-.39-.223-.607-.379-.607-.379s1.04 1.781 3.79 2.627l-.103.135-.212.273c-.567.73-1.135 1.44-1.135 1.44C2.17 18.644.35 15.416.35 15.416c0-7.168 3.12-12.978 3.12-12.978C6.29.262 8.99.11 9.477.1h.078zm-.607 8.304c-1.234 0-2.209 1.113-2.209 2.47 0 1.359.996 2.472 2.21 2.472 1.234 0 2.209-1.113 2.209-2.471.021-1.358-.975-2.471-2.21-2.471zm7.907 0c-1.235 0-2.21 1.113-2.21 2.47 0 1.359.997 2.472 2.21 2.472 1.234 0 2.21-1.113 2.21-2.471s-.976-2.471-2.21-2.471z"
                  fill="white"
                  fill-rule="nonzero"
                />
              </svg>
              <span>JOIN THE COMMUNITY</span>
            </a>
          </div>
          <div
            class="mint-group flex justify-center md:justify-start items-strech"
            v-else
          >
            <h2>{{ mintAmount }}</h2>
            <div class="flex flex-col justify-between mx-2">
              <button @click="mintAmount++">+</button>
              <button @click="mintAmount--" :disabled="mintAmount == 0">
                -
              </button>
            </div>
            <button class="mintBtn">MINT NOW</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as MetaMask from "../utils/MetaMask";

export default {
  name: "Home",
  data() {
    return {
      mintAmount: 0,
      firstVideo: true,
    };
  },
  async created() {
    try {
      const address = await MetaMask.getUserAccount();
      this.$store.commit("setAddress", address);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async connectMetaMask() {
      try {
        // if (this.isMetaMaskInstalled) {
        this.userAddress = await MetaMask.getUserAccount();
        await MetaMask.loadWeb3();
        this.userAddress = await MetaMask.getUserAccount();
        this.$store.commit("setAddress", this.userAddress);
        // } else {
        //   console.log("install metamask");
        // }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    userAddress: function () {
      return this.$store.state.userAddress;
    },
  },
};
</script>

<style lang="scss" scoped>
.mint-group {
  text-align: center;
  h2 {
    font-size: 32px;
    width: 58px;
    line-height: 58px;
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.1);
  }
  button {
    width: 58px;
    line-height: 27px;
    border: 1.5px solid white;
    background: rgba(255, 255, 255, 0.1);
    font-size: 18px;
    &:disabled {
      opacity: 0.5;
    }
  }
  .mintBtn {
    background: #cc01ff;
    width: 147px;
    line-height: 58px;
    border-color: #cc01ff;
  }
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
  max-width: 480px;
}

.connect-btns a {
  padding: 17px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1.5px #fff;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: 18px;
    bottom: -4px;
    border: solid 4px white;
    width: 45px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &.btn-wallet {
    border: solid 1.5px #cc01ff;
    background-color: rgba(204, 1, 255, 0.1);
    &::before {
      border-color: #cc01ff;
      bottom: auto;
      right: auto;
      left: 18px;
      top: -4px;
    }
    &:hover {
      background-color: rgba(204, 1, 255, 0.3);
    }
  }
}
.main-img {
  max-height: 583px;
  height: 70vh;
  position: absolute;
  bottom: 0%;
  right: 0;
  -webkit-animation: appear 2s ease;
  animation: appear 2s ease;
  z-index: -1;
}

@-webkit-keyframes appearImg {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes appearImg {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 992px) {
  .main-img {
    height: 32vh;
  }
}
@media (max-width: 767px) {
  p {
    font-size: 12px;
  }
  .connect-btns a.btn-wallet {
    border-width: 2px;
    margin-right: 0;
  }
  .connect-btns a.btn-join {
    display: none;
  }
}
@media (min-width: 768px) and (max-height: 800px) {
  .home {
    h1 {
      font-size: 50px;
    }
    & > p {
      max-width: 100%;
      margin-bottom: 24px;
    }
    .member-item {
      width: 170px;
      min-width: 170px;
    }
    .member-info > div {
      flex-direction: column;
    }
  }
}
@media (min-width: 768px) and (max-height: 600px) {
  .home {
    // h1 {
    //   font-size: 30px;
    //   margin-bottom: 15px;
    // }
    & > p {
      max-width: 100%;
      margin-bottom: 15px;
      font-size: 14px;
    }
    .member-item {
      width: 170px;
      min-width: 170px;
    }
    .member-info > div {
      flex-direction: column;
    }
  }
}
</style>
