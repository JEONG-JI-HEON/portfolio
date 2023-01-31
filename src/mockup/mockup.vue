<template>
  <div class="backBg" v-if="data.projectMockup == true">
    <div class="mockupPageP">
      <div class="exitBtn" @click="emitClose">
        <div></div>
        <div></div>
      </div>
      <article id="mockup-wrap">
        <div class="mock-title">
          <h4>프로젝트 소개</h4>
          <div class="explain">
            <div class="explainTxt-mock">{{ data.title }}</div>
          </div>
        </div>
        <div class="mock-intro">
          <div class="explain">
            <div class="checkIcon"></div>
            <div class="explainTxt-mock">{{ data.projectIntro }}</div>
          </div>
        </div>
        <article class="mock-mainF">
          <h4>페이지의 주요기능</h4>
          <div
            class="explain"
            v-for="projectMain in data.projectMainFs"
            :key="projectMain"
          >
            <div class="checkIcon"></div>
            <div class="explainTxt-mock">{{ projectMain }}</div>
          </div>
        </article>
        <article class="mock-mySection" v-if="data.mySections">
          <h4>프로젝트에서 맡은 부분</h4>
          <div
            class="explain"
            v-for="mySection in data.mySections"
            :key="mySection"
          >
            <div class="checkIcon"></div>
            <div class="explainTxt-mock">{{ mySection }}</div>
          </div>
        </article>
        <article class="mock-clarification">
          <div
            class="explain"
            v-for="clarification in data.clarifications"
            :key="clarification"
          >
            <div class="explainTxt-mock">{{ clarification }}</div>
          </div>
        </article>
        <article class="mock-developStory">
          <h4>개발 비화</h4>
          <div
            class="explain"
            v-for="developStory in data.developStorys"
            :key="developStory"
          >
            <div class="explainTxt-mock">{{ developStory }}</div>
          </div>
        </article>
        <article class="mock-improve">
          <h4>개선해야 될점</h4>
          <div class="explain" v-for="improve in data.improves" :key="improve">
            <div class="explainTxt-mock">{{ improve }}</div>
          </div>
        </article>
      </article>
    </div>
  </div>
  <div class="backBg" v-else>
    <div class="mockupPageC">
      <div class="exitBtn" @click="emitClose">
        <div></div>
        <div></div>
      </div>
      <img :src="data.imagePath" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MockupWindow",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.backBg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
}

#mockup-wrap {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 10px;
}

.mockupPageP {
  width: 70%;
  height: 80%;
  overflow-y: auto;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 20%;
  z-index: 11;
  transform: translateY(-50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
    rgb(255 255 255 / 20%) 0px 0px;
}

.mockupPageP img {
  display: block;
  width: 100%;
}

.mockupPageC {
  width: 70%;
  height: 100%;
  overflow-y: auto;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 20%;
  z-index: 11;
  transform: translateY(-50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
    rgb(255 255 255 / 20%) 0px 0px;
}

.mockupPageC img {
  display: block;
  width: 100%;
}

.exitBtn {
  position: absolute;
  top: 35px;
  right: 20px;
  width: 20px;
  height: 20px;
  transform: translatey(-50%);
  cursor: pointer;
}

.exitBtn > div {
  position: absolute;
  top: 40%;
  right: 0;
  width: 100%;
  height: 20%;
  background-color: black;
}

.exitBtn > div:first-child {
  transform: rotate(45deg);
}

.exitBtn > div:last-child {
  transform: rotate(-45deg);
}

@media (max-width: 1100px) {
  .mockupPageP,
  .mockupPageC {
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 600px) {
  .mockupPageP,
  .mockupPageC {
    padding: 20px;
  }
}
</style>
