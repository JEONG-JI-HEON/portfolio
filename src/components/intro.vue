<template>
  <div class="intro">
    <div class="left-intro">
      <ul class="linkContainer">
        <li>
          <a href="" class="coloringText"
            >GitHub<span class="purplePoint">.</span>
          </a>
        </li>
        <li>
          <a href="" class="coloringText"
            >Discord<span class="purplePoint">.</span>
          </a>
        </li>
      </ul>
      <div class="bottomContainer">
        <a href="">wlgjs0804@naver.com</a>
        <p>Last update: 2023/01/19</p>
      </div>
    </div>
    <div class="right-intro">
      <article class="intro-text">
        <div class="top-text">
          <span>도전을 좋아하는</span>
        </div>
        <div class="middle-text">
          <strong class="myName">정지헌</strong>
          <span>입니다.</span>
        </div>
        <div class="bottom-text">
          <span>프론트엔드 개발자를 희망하고 있습니다.</span>
          <span>항상 만족하지 않고 끊임없이 변화를 추구하려 합니다.</span>
          <span>그렇기에 항상 배우는 자세를 잃지 않으려 합니다.</span>
        </div>
        <div class="bottom-arrow"></div>
      </article>
      <div class="introBg">
        <img src="../../public/img/introBg.jpg" alt="" />
      </div>
      <div class="bottom-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "introPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  color: white !important;
  width: 100%;
  height: 100%;
  display: flex;
}

.left-intro {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  width: 20vw;
  height: 100%;
  background-color: rgb(32, 34, 36);
  opacity: 0;
  transition: opacity 1s ease 0s;
}

.linkContainer {
  display: flex;
  position: relative;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 57px;
  row-gap: 15px;
  font-family: "NEXON Lv2 Gothic Bold";
  font-weight: bold;
}

.linkContainer > li {
  width: 100%;
  height: 100%;
}

.linkContainer > li > a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 30px;
  text-align: left;
  padding: 10px;
  transition: all 0.25s ease 0s;
}

.linkContainer > li .yellowPoint {
  font-size: 30px;
}

.bottomContainer {
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.bottomContainer > p {
  color: rgba(255, 255, 255, 0.7);
}

.right-intro {
  width: 80vw;
  height: 100%;
}

.intro-text {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
}

.intro-text .top-text {
  position: relative;
  top: -10%;
  opacity: 0;
  transition: all 0.7s ease 0s;
}

.intro-text .middle-text {
  position: relative;
  top: -10%;
  opacity: 0;
  transition: all 0.7s ease 0s;
}

.myName {
  font-size: 85px;
  position: relative;
}

.myName::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 20px;
  background-color: rgb(137, 119, 173);
  z-index: -1;
  transition: width 0.5s ease;
}

.myName.expand::after {
  width: 100%;
}

.intro-text .bottom-text {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 30px;
  font-weight: normal;
  position: relative;
  top: -10%;
  opacity: 0;
  transition: all 0.7s ease 0s;
}

.bottom-arrow {
  width: 30px;
  height: 30px;
  background-image: url(../../public/img/scroll_down.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 100px;
  animation: 1.5s ease 0s infinite normal none running bounce;
  position: relative;
  top: -10%;
  opacity: 0;
  transition: all 0.7s ease 0s;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(-27px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.introBg {
  position: fixed;
  top: 0;
  left: 20%;
  width: 100vw;
  height: 100%;
}

.introBg img {
  display: block;
  width: 80vw;
  height: 100vh;
  opacity: 0.5;
  object-fit: cover;
}
</style>
