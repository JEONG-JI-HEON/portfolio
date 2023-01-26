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
      <project />
      <clones />
      <contact />
    </div>
  </section>
  <footer id="footer-wrap">
    Copyright 2023. JeongJiHeon all rights reserved.
  </footer>
</template>

<script>
import Intro from "./components/intro.vue";
import scrollSpy from "./components/scrollSpy.vue";
import education from "./components/education.vue";
import profile from "./components/profile.vue";
import project from "./components/project.vue";
import clones from "./components/clones.vue";
import contact from "./components/contact.vue";

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
  width: 100%;
  height: 220px;
  background-color: rgb(245, 245, 245);
  color: rgb(133, 133, 133);
  z-index: 1;
}
</style>
