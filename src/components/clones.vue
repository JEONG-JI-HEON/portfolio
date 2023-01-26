<template>
  <article id="clones" class="artmargin">
    <h1 id="Clo" class="intro-title observed">
      Clones<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article class="introduction">
      <span id="cloning" class="intro-subtitle">클론 코딩</span>
      <h2 id="dosiraktong" class="observed">
        <a href="#" class="titlehover">도시락통</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg dosiraktong"></div>
      </div>
    </article>
    <article class="introduction">
      <h2 id="singrunzip" class="observed">
        <a href="#" class="titlehover">싱그러운집</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg singrunzip"></div>
      </div>
    </article>
    <article class="introduction">
      <h2 id="therichmond" class="observed">
        <a href="#" class="titlehover">더 리치먼드</a>
      </h2>
      <div class="cloneImg-wrap">
        <div class="cloneImg therichmond"></div>
      </div>
    </article>
  </article>
</template>

<script>
export default {
  name: "clonesPage",
  props: {},
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
}
.cloneImg {
  width: 700px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
</style>
