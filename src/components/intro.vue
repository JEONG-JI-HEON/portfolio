<template>
  <div class="intro">
    <div class="left-intro">
      <ul class="linkContainer">
        <li>
          <a href="">GitHub<span class="yellowPoint">.</span> </a>
        </li>
        <li>
          <a href="">Discord<span class="yellowPoint">.</span> </a>
        </li>
      </ul>
      <div class="bottomContainer">
        <a href="">wlgjs0804@naver.com</a>
        <p>Last update: 2023/01/19</p>
      </div>
    </div>
    <div class="right-intro"></div>
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
  /* -webkit-box-pack: justify;
  -webkit-box-align: center; */
  align-items: center;
  width: 20vw;
  height: 100%;
  background-color: rgb(32, 34, 36);
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
  font-size: 30px;
  text-align: left;
  padding: 10px;
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
</style>
