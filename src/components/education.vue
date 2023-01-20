<template>
  <article id="education" class="artmargin">
    <h1 class="intro-title">
      Education<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article class="introduction">
      <span class="intro-subtitle">교육</span>
      <h2>
        <a href="#">
          [디지털컨버전스]뷰(Vue) 활용 프론트엔드 웹개발자 양성과정</a
        >
      </h2>
      <span>2022/9/1 ~ 2023/2/14</span>
      <article>
        <div>
          <div></div>
          <div>노원 그린컴퓨터 아카데미 교육과정</div>
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
  padding-bottom: 500px;
}

.introduction {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  position: relative;
  width: 900px;
  background-color: rgb(245, 245, 245);
}
</style>
