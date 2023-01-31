<template>
  <article id="clones" class="artmargin">
    <h1 id="Clo" class="intro-title observed">
      Clones<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="dosiraktong" class="introduction observed">
      <span id="cloning" class="intro-subtitle">클론 코딩</span>
      <h2>
        <a href="#" class="titlehover">도시락통</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg dosiraktong" @click="emitEvent(clone1)"></div>
      </div>
    </article>
    <article id="singrunzip" class="introduction observed">
      <h2>
        <a href="#" class="titlehover">싱그러운집</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg singrunzip" @click="emitEvent(clone2)"></div>
      </div>
    </article>
    <article id="therichmond" class="introduction observed">
      <h2>
        <a href="#" class="titlehover">더 리치먼드</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg therichmond" @click="emitEvent(clone3)"></div>
      </div>
    </article>
  </article>
</template>

<script>
export default {
  name: "clonesPage",
  props: {},
  data() {
    return {
      clone1: {
        imagePath: "/portfolio/img/dosirakFull.8b3ea1a9.png",
      },
      clone2: {
        imagePath: "/portfolio/img/singFull.52861ae1.png",
      },
      clone3: {
        imagePath: "/portfolio/img/richFull.376ed0a4.png",
      },
    };
  },
  methods: {
    emitEvent(data) {
      this.$emit("openMockup", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#clones {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
}

.cloneImg-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.cloneImg {
  width: 700px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  transition: transform ease 0.5s;
}

.cloneImg:hover {
  transform: scale(1.05);
}

.dosiraktong {
  background-image: url(../../public/img/dosirak.PNG);
}

.singrunzip {
  background-image: url(../../public/img/sing.PNG);
}

.therichmond {
  background-image: url(../../public/img/rich.PNG);
}

@media (max-width: 900px) {
  .cloneImg {
    width: 100%;
    height: 100%;
    padding-top: 50%;
  }
}

@media (max-width: 600px) {
  #clones {
    row-gap: 55px;
  }
}
</style>
