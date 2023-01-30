<template>
  <article id="education" class="artmargin">
    <h1 id="Edu" class="intro-title observed">
      Education<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="greenComputer" class="introduction observed">
      <span class="intro-subtitle">교육</span>
      <h2>
        <a
          href="https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20210000349578&tracseTme=1&crseTracseSe=C0061&trainstCstmrId=500020044993#undefined"
          class="titlehover"
        >
          [디지털컨버전스]뷰(Vue) 활용 프론트엔드 웹개발자 양성과정
        </a>
      </h2>
      <span class="explainDate">2022/9/1 ~ 2023/2/14</span>
      <article>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">노원 그린컴퓨터 아카데미 교육과정</div>
        </div>
      </article>
    </article>
  </article>
</template>

<script>
export default {
  name: "educationPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#education {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
}

@media (max-width: 600px) {
  #education {
    row-gap: 55px;
  }
}
</style>
