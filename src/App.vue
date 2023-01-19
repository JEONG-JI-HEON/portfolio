<template>
  <section id="introSection">
    <Intro />
  </section>
  <section id="mainSection">
    <nav>
      <scrollSpy />
    </nav>
    <div id="contents">
      <education />
      <profile />
      <project />
      <clones />
      <contact />
    </div>
  </section>
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
  background-color: white;
  position: relative;
  z-index: 1;
}
</style>
