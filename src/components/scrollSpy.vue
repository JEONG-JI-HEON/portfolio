<template>
  <div id="scrollSpy" class="scrollSpy">
    <div
      v-for="scrollS in scrollSpy"
      :key="scrollS"
      v-bind:class="scrollS.title"
    >
      <p class="spy-title scrollNav" v-bind:data-target="scrollS.titleId">
        {{ scrollS.title }}
      </p>
      <ul>
        <li
          v-if="scrollS.content1"
          class="scrollCon scrollNav"
          @click="goSection"
          v-bind:data-target="scrollS.content1Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content1 }}
        </li>
        <li
          v-if="scrollS.content2"
          class="scrollCon scrollNav"
          @click="goSection"
          v-bind:data-target="scrollS.content2Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content2 }}
        </li>
        <li
          v-if="scrollS.content3"
          class="scrollCon scrollNav"
          @click="goSection"
          v-bind:data-target="scrollS.content3Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content3 }}
        </li>
        <li
          v-if="scrollS.content4"
          class="scrollCon scrollNav"
          @click="goSection"
          v-bind:data-target="scrollS.content4Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content4 }}
        </li>
        <li
          v-if="scrollS.content5"
          class="scrollCon scrollNav"
          @click="goSection"
          v-bind:data-target="scrollS.content5Id"
        >
          <div class="miniCircle"></div>
          {{ scrollS.content5 }}
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
  computed: {},
  mounted() {
    const option1 = {
      root: null,
      rootMargin: "0px 0px -80% 0px",
      threshold: [0],
    };
    const option2 = {
      root: null,
      rootMargin: "60% 0px 0px 0px",
      threshold: [0],
    };
    let articles = document.getElementsByClassName("observed");
    const scrollNav = document.querySelectorAll(".scrollNav");
    // scrollspy??? ???????????? ?????? ??????
    this.observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrollNav.forEach((nav) => {
            if (entry.target.id === nav.dataset.target) {
              nav.classList.add("active");
            } else {
              nav.classList.remove("active");
            }
          });
        }
      });
    }, option1);
    // ?????? ???????????? ?????? ??????
    this.observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, option2);
    Array.from(articles).forEach((article) => {
      this.observer1.observe(article);
      this.observer2.observe(article);
    });
  },
  setup() {
    const scrollSpy = reactive([
      {
        title: "Education",
        titleId: "Edu",
        content1: "?????? ???????????????????????????",
        content1Id: "greenComputer",
      },
      {
        title: "Profile",
        titleId: "Prof",
        content1: "????????????&????????????",
        content1Id: "profiles",
        content2: "Skills",
        content2Id: "skills",
      },
      {
        title: "Project",
        titleId: "Proj",
        content1: "KB???????????? (???)",
        content1Id: "teamProject",
        content2: "????????????????????? (??????)",
        content2Id: "persProject1",
        content3: "???????????? (??????)",
        content3Id: "persProject2",
        content4: "??????????????? (??????)",
        content4Id: "persProject3",
        content5: "???????????? ?????? (??????)",
        content5Id: "persProject4",
      },
      {
        title: "Clones",
        titleId: "Clo",
        content1: "????????????",
        content1Id: "dosiraktong",
        content2: "???????????? ???",
        content2Id: "singrunzip",
        content3: "??? ????????????",
        content3Id: "therichmond",
      },
      {
        title: "Contact",
        titleId: "ConT",
        content1: "Contact",
        content1Id: "myContact",
      },
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
  width: 200px;
  height: 60vh;
}

.spy-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  transition: all 0.2s ease 0s;
}

.spy-title.active {
  font-size: 16px;
  transform: scale(1.1);
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

.scrollCon.active {
  /* transform: scale(1.05); */
  color: rgb(144, 132, 221);
}

.scrollCon:hover {
  color: #b8b8b8;
}

.scrollCon .miniCircle {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(110, 110, 110);
}

.scrollCon.active .miniCircle {
  background-color: rgb(144, 132, 221);
}
</style>
