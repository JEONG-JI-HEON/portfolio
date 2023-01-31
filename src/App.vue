<template>
  <section id="introSection">
    <Intro />
  </section>
  <section id="mainSection">
    <nav id="scrollSpy-wrap">
      <scrollSpy />
    </nav>
    <div id="contents-wrap">
      <education />
      <profile />
      <project
        @openMockup="
          showMockup = true;
          mockupData = $event;
        "
      />
      <clones
        @openMockup="
          showMockup = true;
          mockupData = $event;
        "
      />
      <contact />
    </div>
  </section>
  <footer id="footer-wrap">
    Copyright 2023. JeongJiHeon all rights reserved.
  </footer>
  <MockupWindow
    v-if="showMockup"
    @close="showMockup = false"
    :data="mockupData"
  />
  <button class="scrollTopBtn" @click="scrollToTop"></button>
</template>

<script>
import Intro from "./components/intro.vue";
import scrollSpy from "./components/scrollSpy.vue";
import education from "./components/education.vue";
import profile from "./components/profile.vue";
import project from "./components/project.vue";
import clones from "./components/clones.vue";
import contact from "./components/contact.vue";

import MockupWindow from "./mockup/mockup.vue";

export default {
  name: "App",
  components: {
    Intro,
    scrollSpy,
    education,
    profile,
    project,
    clones,
    contact,
    MockupWindow,
  },
  data() {
    return {
      showMockup: false,
      mockupData: null,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    openMockup(data) {
      this.showMockup = true;
      this.mockupData = data;
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        let leftIntro = document.querySelector(".left-intro");
        let topTxt = document.querySelector(".top-text");
        leftIntro.style.opacity = 1;
        topTxt.style.opacity = 1;
        topTxt.style.top = 0;
      }, 1000);
      setTimeout(() => {
        let middleTxt = document.querySelector(".middle-text");
        middleTxt.style.opacity = 1;
        middleTxt.style.top = 0;
      }, 1500);
      setTimeout(() => {
        let bottomTxt = document.querySelector(".bottom-text");
        let middleLine = document.querySelector(".myName");
        bottomTxt.style.opacity = 1;
        bottomTxt.style.top = 0;
        middleLine.classList.add("expand");
      }, 2000);
      setTimeout(() => {
        let arrow = document.querySelector(".bottom-arrow");
        arrow.style.opacity = 1;
        arrow.style.top = 0;
      }, 3000);
    });
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

#introSection {
  width: 100%;
  height: 100vh;
  background-color: #202224;
  position: relative;
}

#mainSection {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
  z-index: 1;
  display: flex;
}
#scrollSpy-wrap {
  position: sticky;
  top: 0px;
  width: 20vw;
  height: 100vh;
}

#contents-wrap {
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
}

#footer-wrap {
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 220px;
  background-color: rgb(245, 245, 245);
  color: rgb(133, 133, 133);
  z-index: 1;
}

.scrollTopBtn {
  position: fixed;
  right: 24px;
  bottom: 0px;
  width: 60px;
  height: 60px;
  background-color: rgb(239, 239, 239);
  background-image: url(../public/img/top.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  border-radius: 26px;
  border: none;
  transition: all 0.3s ease 0s;
  margin: 25px;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
    rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
  cursor: pointer;
}

.scrollTopBtn:hover {
  background-color: rgb(200, 200, 200);
}

@media (max-width: 1100px) {
  #scrollSpy-wrap {
    display: none;
  }
  .scrollTopBtn {
    display: none;
  }
}

@media (max-width: 1080px) {
  #introSection {
    height: 136vh;
  }
}

@media (max-width: 600px) {
  #contents-wrap {
    padding: 20px;
  }
}
</style>
