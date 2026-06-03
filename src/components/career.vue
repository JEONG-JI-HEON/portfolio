<template>
  <article id="career" class="artmargin">
    <h1 id="Car" class="intro-title observed">
      Career<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="in4in" class="introduction observed">
      <span class="intro-subtitle">경력</span>
      <h2>
        <a href="http://www.in4in.com/" class="titlehover" target="_blank"> 인포인 </a>
      </h2>
      <span class="explainDate">2023/3/6 ~ 2026/3/29</span>
      <article>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">3D 디지털 트윈·메타버스 기반 DX 솔루션 개발</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">회사 자체 개발용 3D 엔진 개발 참여</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">프로젝트 서버 운영 관리</div>
        </div>
      </article>
    </article>
  </article>
</template>

<script>
export default {
  name: "careerPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#career {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
}

@media (max-width: 600px) {
  #career {
    row-gap: 55px;
  }
}
</style>
