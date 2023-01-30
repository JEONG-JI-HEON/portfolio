<template>
  <article id="profile" class="artmargin">
    <h1 id="Prof" class="intro-title observed">
      Profile<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article class="myProfile observed" id="profiles">
      <article class="informationP">
        <span class="intro-subtitle">인적사항</span>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">정지헌</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">1998.08.04</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">고려대학교 사범대학부속고등학교 졸업</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">육군 병장 만기전역</div>
        </div>
      </article>
      <article class="informationE">
        <span class="intro-subtitle">경험사항</span>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">나이스 프렌즈 (2018.09 ~ 2019.05)</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">제 20대 대통령 선거 투표사무원</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">제 8회 전국동시지방선거 투표사무원</div>
        </div>
      </article>
    </article>
    <article id="skills" class="introduction observed">
      <span class="intro-subtitle">Skills</span>
      <article class="introduction-skills">
        <div class="skillIcons">
          <div class="skillImg" id="html5I"></div>
          <div class="skillImg" id="cssI"></div>
          <div class="skillImg" id="jsI"></div>
          <div class="skillImg" id="jQureyI"></div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">HTML5, CSS, JavaScript, jQuery</div>
        </div>
      </article>
      <article class="introduction-skills">
        <div class="skillIcons">
          <div class="skillImg" id="expressI"></div>
          <div class="skillImg" id="vueI"></div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">express.js, Vue.js</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">웹 프레임워크</div>
        </div>
      </article>
      <article class="introduction-skills">
        <div class="skillIcons">
          <div class="skillImg" id="nodeI"></div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">Node.js</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">JavaScript 런타임</div>
        </div>
      </article>
      <article class="introduction-skills">
        <div class="skillIcons">
          <div class="skillImg" id="mySQLI"></div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">MySQL</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">데이터베이스</div>
        </div>
      </article>
    </article>
  </article>
</template>

<script>
export default {
  name: "profilePage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
}

.myProfile {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 900px;
}

.informationP,
.informationE {
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  position: relative;
}

.introduction-skills {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  position: relative;
}

.skillIcons {
  display: flex;
}

.skillImg {
  width: 50px;
  height: 50px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
}

#html5I {
  background-image: url(../../public/img/html5.png);
}

#cssI {
  background-image: url(../../public/img/css3.png);
}

#jsI {
  background-image: url(../../public/img/js.png);
}

#jQureyI {
  background-image: url(../../public/img/jquery.png);
}

#expressI {
  background-image: url(../../public/img/Express.png);
}

#vueI {
  background-image: url(../../public/img/vue.png);
}

#nodeI {
  background-image: url(../../public/img/nodejs.png);
}

#mySQLI {
  background-image: url(../../public/img/mysql.png);
}

@media (max-width: 1080px) {
  .myProfile {
    width: 80vw;
  }
}

@media (max-width: 900px) {
  .myProfile {
    flex-direction: column;
    row-gap: 25px;
  }
}

@media (max-width: 600px) {
  #profile {
    row-gap: 55px;
  }
}
</style>
