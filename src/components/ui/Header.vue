<template>
  <div class="header">
    <div class="main-header">
      <div class="lg:mr-8 mb-3 md:mb-8 pt-4 md:pt-14">
        <div class="md:flex justify-between items-end">
          <h3
            class="
              ml-5
              md:ml-0
              text-2xl
              flex
              justify-between
              items-center
              md:block
            "
          >
            <router-link to="/">ET</router-link>

            <Hamburger />
            <!-- <a href="#" class="md:hidden">
            <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 17.067V20h18v-2.933H0zm4.5-8.534v2.934H18V8.533H4.5zM0 0v2.933h18V0H0z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </a> -->
          </h3>
          <div class="nav w-full md:ml-4 md:pr-20 flex justify-end">
            <div class="flex justify-end hidden md:block">
              <a
                :href="nav.url"
                v-for="(nav, index) in navs"
                :key="`nav-${index}`"
                :class="getRoute === nav.url ? 'active' : ''"
                >{{ nav.title }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center header-btns">
        <div class="bg-slider">
          <div class="slider">
            <div class="slider-content">
              <p>GIVEAWAY ALERT! JOIN OUR DISCORD!</p>
              <P>12 PM PST PRESALE 09/24</P>
              <p>GIVEAWAY ALERT! JOIN OUR DISCORD!</p>
              <P>12 PM PST PRESALE 09/24</P>
            </div>
            <div class="slider-content">
              <p>GIVEAWAY ALERT! JOIN OUR DISCORD!</p>
              <P>12 PM PST PRESALE 09/24</P>
              <p>GIVEAWAY ALERT! JOIN OUR DISCORD!</p>
              <P>12 PM PST PRESALE 09/24</P>
            </div>
          </div>
        </div>
        <a href="#">
          <svg width="26" height="19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.556.1.217.267c-3.9 1.158-5.697 2.917-5.697 2.917s.476-.268 1.278-.646C7.67 1.592 9.513 1.302 10.27 1.236c.13-.023.238-.045.368-.045a17.837 17.837 0 0 1 4.375-.045 17.32 17.32 0 0 1 6.52 2.138s-1.71-1.67-5.393-2.828L16.444.1h.078c.489.01 3.187.162 6.009 2.338 0 0 3.119 5.81 3.119 12.978l-.012.02-.034.056c-.313.486-2.23 3.166-6.582 3.308 0 0-.78-.957-1.43-1.803 2.472-.718 3.612-2.195 3.865-2.564l.042-.063.014-.022a12.273 12.273 0 0 1-2.491 1.313c-1.083.468-2.123.78-3.141.957-2.08.401-3.986.29-5.61-.022a17.814 17.814 0 0 1-3.184-.957c-.499-.2-1.04-.445-1.582-.757-.065-.045-.13-.067-.195-.111a.3.3 0 0 1-.086-.067c-.39-.223-.607-.379-.607-.379s1.04 1.781 3.79 2.627l-.103.135-.212.273c-.567.73-1.135 1.44-1.135 1.44C2.17 18.644.35 15.416.35 15.416c0-7.168 3.12-12.978 3.12-12.978C6.29.262 8.99.11 9.477.1h.078zm-.607 8.304c-1.234 0-2.209 1.113-2.209 2.47 0 1.359.996 2.472 2.21 2.472 1.234 0 2.209-1.113 2.209-2.471.021-1.358-.975-2.471-2.21-2.471zm7.907 0c-1.235 0-2.21 1.113-2.21 2.47 0 1.359.997 2.472 2.21 2.472 1.234 0 2.21-1.113 2.21-2.471s-.976-2.471-2.21-2.471z"
              fill="#4DC9FF"
              fill-rule="nonzero"
            />
          </svg>
        </a>
        <a href="#" @click="connectMetaMask">
          <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.403 14.654c.548-.168 1.194-.345 1.821-.57.24-.086.201-.4-.056-.524-.398-.192-.807-.364-1.213-.54-.18-.079-.347-.045-.439.131-.18.348-.356.7-.51 1.061-.103.241.046.44.397.442m-4.347-.326c-.003-.017 0-.048-.01-.071-.191-.394-.37-.793-.586-1.172-.042-.075-.249-.128-.34-.093a13.89 13.89 0 0 0-1.286.567c-.252.128-.244.464.013.55a29.08 29.08 0 0 0 1.836.537c.216.057.372-.099.373-.318m1.96 5.505v-.002c.518 0 1.038.008 1.556-.003.307-.006.413-.112.384-.358-.042-.36-.09-.72-.149-1.077-.044-.273-.326-.533-.598-.536-.802-.01-1.604-.009-2.406 0-.262.002-.586.277-.613.496-.04.332-.082.664-.11.998-.032.374.055.473.435.48.5.01 1 .002 1.5.002m11.32-16.049c-.017-.066-.03-.14-.056-.208-.294-.807-.587-1.613-.885-2.418-.153-.413-.296-.452-.672-.197L14.09 6.152c-.37.25-.376.405-.02.682.89.692 1.783 1.383 2.678 2.07.102.078.221.15.344.184 1.374.372 2.75.737 4.125 1.101.343.09.436.031.525-.308.41-1.56.821-3.119 1.23-4.679.123-.468.24-.938.364-1.418M2.679 10.221c.019-.004.092-.018.165-.037 1.356-.361 2.713-.721 4.068-1.087a.961.961 0 0 0 .329-.153c.925-.709 1.848-1.42 2.766-2.139.313-.245.307-.4-.024-.628-.913-.63-1.832-1.253-2.75-1.876A3112.167 3112.167 0 0 0 2.26.927c-.298-.202-.465-.151-.587.172-.302.804-.604 1.608-.89 2.417a.866.866 0 0 0-.013.459c.121.526.265 1.048.401 1.57l1.133 4.357c.044.17.09.332.375.32M21.883 21c-.13-.033-.341-.082-.55-.14-1.245-.34-2.492-.676-3.733-1.032-.391-.112-.695-.046-1.022.201a68.175 68.175 0 0 1-2.524 1.803c-.151.104-.37.153-.558.156-.973.015-1.946.018-2.92-.002a1.158 1.158 0 0 1-.6-.192c-.874-.605-1.733-1.23-2.592-1.854a.839.839 0 0 0-.77-.14c-1.408.392-2.818.774-4.226 1.162-.498.137-.746.01-.892-.48a422.5 422.5 0 0 1-1.263-4.323c-.04-.14-.008-.315.038-.459.424-1.333.851-2.666 1.293-3.994.136-.407.204-.766.023-1.207-.217-.528-.283-1.117-.408-1.68C.789 7.062.399 5.308.017 3.55A.876.876 0 0 1 .04 3.12c.271-.854.568-1.7.833-2.555.136-.437.439-.692.993-.482 2.15.814 4.308 1.612 6.47 2.398.301.11.638.173.96.177 1.577.017 3.156-.02 4.733.019.83.02 1.595-.134 2.364-.432 1.898-.735 3.813-1.426 5.721-2.132.631-.234.86-.12 1.071.522.207.63.38 1.272.63 1.884.232.572.227 1.117.09 1.709-.473 2.052-.91 4.111-1.36 6.168-.007.027-.006.06-.021.08-.307.44-.128.865.019 1.304.437 1.31.86 2.624 1.275 3.94a.94.94 0 0 1 .013.512 445.306 445.306 0 0 1-1.246 4.27c-.11.37-.286.506-.702.5"
              fill="#4DC9FF"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <p class="wallet-address" v-if="userAddress">
          {{ getMiniAddress(userAddress) }}
        </p>
      </div>
      <div class="left-nav">
        <div id="leftNav">
          <a
            :href="nav.url"
            v-for="(nav, index) in navs"
            :class="getRoute === nav.url ? 'active' : ''"
            :key="`nav-${index}`"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3 from "web3";
import * as MetaMask from "@/utils/MetaMask.js";
import Hamburger from "./Hamburger.vue";

export default {
  name: "Header",
  components: { Hamburger },
  data() {
    return {
      navs: [
        { id: 0, url: "#home", title: "HOME BASE" },
        { id: 1, url: "#team", title: "TEAM" },
        { id: 2, url: "#storyline", title: "STORYLINE" },
        { id: 3, url: "#collection", title: "COLLECTION" },
        { id: 4, url: "#roadmap", title: "ROADMAP" },
      ],
      lastScroll: 0,
      isScrolling: true,
      currentIndex: 0,
    };
  },
  mounted() {
    console.log(this.$route);
  },
  created() {
    window.addEventListener("wheel", this.handleWheel);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleWheel);
  },
  methods: {
    async connectMetaMask() {
      try {
        if (this.isMetaMaskInstalled) {
          this.userAddress = await MetaMask.getUserAccount();
          console.log(this.userAddress);
          await MetaMask.loadWeb3();
          this.userAddress = await MetaMask.getUserAccount();
          this.$store.commit("setAddress", this.userAddress);
          console.log(this.userAddress);
        } else {
          console.log("install metamask");
        }
      } catch (err) {
        console.log(err);
      }
    },
    getMiniAddress(address) {
      return MetaMask.makeMiniAddress(address);
    },
    handleWheel(event) {
      if (this.isScrolling) {
        this.isScrolling = false;
        setTimeout(() => {
          this.isScrolling = true;
        }, 500);
        if (event.deltaY < 0) {
          let newUrl = Math.floor(window.scrollY / window.innerHeight) - 1;
          if (newUrl > 0) {
            window.location.hash = this.navs[newUrl].url;
            window.scrollTo(0, newUrl * window.innerHeight);
          } else {
            window.location.hash = "#home";
            window.scrollTo(0, 0);
          }
        } else if (event.deltaY > 0) {
          let newUrl = Math.floor(window.scrollY / window.innerHeight) + 1;
          if (newUrl < this.navs.length) {
            window.location.hash = this.navs[newUrl].url;
          }
          window.scrollTo(0, newUrl * window.innerHeight);
        }
      }
    },
  },
  computed: {
    isMetaMaskInstalled: () => MetaMask.isMetaMaskInstalled(),
    userAddress: function () {
      return this.$store.state.userAddress;
    },
    getRoute: function () {
      console.log(this.$route.hash);
      return this.$route.hash;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
}
.main-header {
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
}
.wallet-address {
  padding: 0 14px;
  font-size: 13px;
  line-height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-left: none;
  /* font-family: "SpaceType-Regular"; */
}
.nav {
  background: url(../../assets/img/menu-line.png) right bottom no-repeat;
  /* padding-right: 85px; */
  min-height: 25px;
}

.nav a {
  font-weight: bold;
  margin: 0 10px;
  font-size: 18px;
  padding: 6px 0;
}

.nav a.active {
  border-bottom: 2px solid #cc01ff;
}

.header-btns a {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/img/bg-btn.png);
  background-size: 100% 100%;
  margin-left: 4px;
  flex-shrink: 0;
}
.header-btns a:hover {
  background: url(../../assets/img/bg-btn-hover.png);
  background-size: 100% 100%;
}
.left-nav {
  position: fixed;
  left: auto;
  top: 160px;
  bottom: 0;
  width: 20px;
  display: flex;
  align-items: center;
  z-index: 30;
}
.left-nav #leftNav {
  padding: 7px 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
.left-nav #leftNav a {
  height: 68px;
  width: 6px;
  position: relative;
  padding: 0 7px;
}
.left-nav #leftNav a::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #eee;
  position: absolute;
  top: calc(50% - 3px);
  left: 4px;
}
.left-nav #leftNav a::after {
  content: "";
  width: 2px;
  background: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
}
.left-nav #leftNav a:hover::after,
.left-nav #leftNav a.active::after {
  content: "";
  width: 6px;
  left: 4px;
  border-radius: 5px;
}
.bg-slider {
  max-width: 817px;
  height: 44px;
  position: relative;
  margin-right: 10px;
  background: url(../../assets/img/bg-slider.png);
  background-size: 100% 100%;
  padding: 10px 10px;
}
.slider {
  overflow: hidden;
  display: flex;
}
.slider-content {
  -webkit-animation: scrollbg 20s linear infinite;
  animation: scrollbg 20s linear infinite;
  display: flex;
  align-items: center;
  width: max-content;
}
.slider-content p {
  font-size: 16px;
  margin-right: 50px;
  width: max-content;
  font-family: "SpaceType-Regular";
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
@media (max-width: 1100px) {
  .bg-slider {
    max-width: 630px;
  }
  .wallet-address {
    display: none;
  }
}
@media (max-width: 991px) {
  .nav {
    padding-right: 0;
    background-position-x: calc(100% + 95px);
  }
}
@media (max-width: 767px) {
  .bg-slider {
    max-width: 100%;
    margin-right: 0;
  }
  .header-btns a {
    display: none;
  }
  .left-nav {
    display: none;
  }
  .nav {
    background-position-x: calc(100% + 630px);
  }
  .main-header {
    padding: 0;
  }
}
</style>
