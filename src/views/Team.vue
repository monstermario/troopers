<template>
  <div class="main-content">
    <video data-autoplay muted loop class="myVideo">
      <source src="../assets/img/bg/team-loop-comp.mp4" type="video/mp4" />
    </video>
    <div class="router-content">
      <div class="home appear">
        <h1 class="mb-2 md:mb-6 flex justify-center md:justify-start">TEAM</h1>
        <p class="mb-6 md:mb-16 text-center md:text-left">
          A team of Nomad’s from across the galaxy, congregating their skillsets
          to lead EtherTroopers into new realms within the Metaverse.
        </p>

        <div class="team-members" id="teamMembers">
          <div class="flex justify-start members">
            <div
              class="member-item"
              v-for="(member, index) in members"
              :key="'member-' + index"
            >
              <div class="member-avatar">
                <img :src="member.avatar" alt="" />
              </div>
              <div class="member-info">
                <div class="flex justify-between items-center bg-white px-2">
                  <h5 :style="{ color: member.color }">{{ member.role }}</h5>
                  <h4>{{ member.name }}</h4>
                </div>
                <p class="p-2" v-if="member.description">
                  {{ member.description }}
                </p>
              </div>
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
  name: "Team",
  data() {
    return {
      members: [
        {
          name: "Dhruvil Bhayani",
          role: "artist",
          color: "#cc01ff",
          description:
            "Dhruvil is a self taught photographer and 3D artist based in India. Implementing his knowledge of photography into 3D, to craft his own world.",
          avatar: "/img/1.jpg",
          twitter: "null",
          telegram: "null",
          be: "null",
        },
        {
          name: "SuicideX",
          role: "PLATOON LEADER",
          color: "#ff5401",
          description:
            "Co-Founder in other world’s with CAMX. A brand specialist who has worked with a plethora of blue chip companies in a variety of fields.",
          avatar: "/img/2.jpg",
          twitter: null,
          telegram: "null",
          be: null,
        },
        {
          name: "CAMX",
          role: "PLATOON LEADER",
          color: "#ff5401",
          description:
            "A multitude of successful ventures in his repertoire, and a true visionary when it comes to scaling businesses and projects within emerging markets.",
          avatar: "/img/3.jpg",
          twitter: null,
          telegram: null,
          be: null,
        },
        {
          name: "patrk",
          role: "HEAD DEVELOPER",
          color: "#015aff",
          description: "",
          avatar: "/img/4.jpg",
          twitter: null,
          telegram: null,
          be: null,
        },
        {
          name: "seoss",
          role: "HEAD DEVELOPER",
          color: "#015aff",
          description: "",
          avatar: "/img/5.jpg",
          twitter: null,
          telegram: null,
          be: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  max-width: 840px;
}
.team-members {
  width: 100vw;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  // margin: 0 -100px;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 -20px;
  }
}
.members {
  width: fit-content;
}
.member-item {
  &:not(:first-child) {
    margin-left: 10px;
  }
  min-width: 232px;

  .member-avatar {
    width: 100%;
    height: auto;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    img {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  .member-info {
    width: 100%;
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.1);
    h5 {
      font-size: 9px;
    }
    h4 {
      font-size: 12px;
      color: black;
    }
    p {
      font-size: 10px;
    }
  }
}
.home {
  height: 100%;
  width: 100%;
}
@media (min-width: 768px) and (max-height: 800px) {
  .home {
    h1 {
      font-size: 50px;
      margin-bottom: 15px;
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
    h1 {
      font-size: 30px;
      margin-bottom: 15px;
    }
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
