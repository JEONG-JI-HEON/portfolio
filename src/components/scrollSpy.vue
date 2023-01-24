<template>
  <div class="scrollSpy">
    <div
      v-for="scrollS in scrollSpy"
      :key="scrollS"
      v-bind:class="scrollS.title"
    >
      <p class="spy-title">{{ scrollS.title }}</p>
      <ul>
        <li
          v-if="scrollS.content1"
          class="scrollCon"
          @click="goSection"
          v-bind:data-target="scrollS.content1Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content1 }}
        </li>
        <li
          v-if="scrollS.content2"
          class="scrollCon"
          @click="goSection"
          v-bind:data-target="scrollS.content2Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content2 }}
        </li>
        <li v-if="scrollS.content3" class="scrollCon">
          <div class="miniCircle"></div>
          {{ scrollS.content3 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "scrollSpy",
  props: {},
  methods: {
    goSection(e) {
      if (!e.target.matches(".scrollCon")) return;
      e.preventDefault();
      const section = document.getElementById(e.target.dataset.target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  setup() {
    const scrollSpy = reactive([
      {
        title: "Education",
        content1: "노원 그린컴퓨터아카데미",
        content1Id: "greenComputer",
      },
      {
        title: "Profile",
        content1: "인적사항&경험사항",
        content1Id: "profiles",
        content2: "Skills",
        content2Id: "skills",
      },
      {
        title: "Project",
        content1: "팀 프로젝트",
        content1Id: "teamProject",
        content2: "개인 프로젝트",
        content2Id: "persProject",
      },
      {
        title: "Clone",
        content1: "도시락통",
        content2: "싱그러운 집",
        content3: "더 리치먼드",
      },
      { title: "Contact", content1: "Contact" },
    ]);
    return {
      scrollSpy,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollSpy {
  display: flex;
  position: relative;
  top: 85px;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: auto;
  width: 209.4px;
  height: 60vh;
}

.spy-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.scrollCon {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
}

.scrollCon:hover {
  color: #b8b8b8;
}

.miniCircle {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(110, 110, 110);
}
</style>
