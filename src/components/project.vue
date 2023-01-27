<template>
  <article id="project" class="artmargin">
    <h1 id="Proj" class="intro-title observed">
      Project<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="teamProject" class="introduction observed">
      <span class="intro-subtitle">팀 프로젝트</span>
      <h2 class="titleWithGithub">
        <a
          href="http://kbsaving-env.eba-rinmdekn.ap-northeast-2.elasticbeanstalk.com/"
          class="titlehover"
          >KB저축은행</a
        >
        <a href=""
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </h2>
      <span class="explainDate">2022년 11월 1일 ~ 2022년 12월 30일</span>
      <div class="projectImg-wrap">
        <div class="projectImg kbsaving"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">3인이서 프로젝트 진행</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            로그인, 회원가입, 금융계산기, 계좌조회 및 메인페이지 디자인 일부분과
            스크립트 담당
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지 클릭하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div
          v-for="tech in KBArirangtechs"
          :key="tech.id"
          class="tech-accordion"
          v-bind:class="{ open: tech.isOpen }"
        >
          <div
            @click="KBAtoggleAccordion(tech.id)"
            class="tech-title"
            v-bind:class="{ open: tech.isOpen }"
          >
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
    <article id="persProject1" class="introduction observed">
      <span class="intro-subtitle">개인 프로젝트</span>
      <h2 class="titleWithGithub">
        <a
          href="http://arirang-env.eba-6msdgjyc.ap-northeast-2.elasticbeanstalk.com/"
          class="titlehover"
          >아리랑시네센터</a
        >
        <a href=""
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </h2>
      <span class="explainDate">2022년 10월 10일 ~ 2022년 12월 27일</span>
      <div class="projectImg-wrap">
        <div class="projectImg arirnag"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">영화 소개 및 검색 페이지</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">기존의 아리랑시네센터 페이지를 리뉴얼</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            공지사항, 게시판 작성 및 로그인, 회원가입 기능 구현
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            네이버 API를 이용하여 네이버 로그인, 영화 검색기능 구현
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지 클릭하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div
          v-for="tech in KBArirangtechs"
          :key="tech.id"
          class="tech-accordion"
          v-bind:class="{ open: tech.isOpen }"
        >
          <div
            @click="KBAtoggleAccordion(tech.id)"
            class="tech-title"
            v-bind:class="{ open: tech.isOpen }"
          >
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
    <article id="persProject2" class="introduction observed">
      <h2 class="titleWithGithub">
        <a
          href="http://seomoonmarket-env.eba-dumip8jh.ap-northeast-2.elasticbeanstalk.com/"
          class="titlehover"
          >서문시장</a
        >
        <a href=""
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </h2>
      <span class="explainDate">2022년 9월 10일 ~ 2022년 10월 7일</span>
      <div class="projectImg-wrap">
        <div class="projectImg seomoon"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">기존의 서문시장야시장 페이지를 리뉴얼</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            공지사항, 게시판 작성 및 로그인, 회원가입 기능 구현
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지 클릭하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div
          v-for="tech in Seomoontechs"
          :key="tech.id"
          class="tech-accordion"
          v-bind:class="{ open: tech.isOpen }"
        >
          <div
            @click="SeomoontoggleAccordion(tech.id)"
            class="tech-title"
            v-bind:class="{ open: tech.isOpen }"
          >
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
    <article id="persProject3" class="introduction observed">
      <h2 class="titleWithGithub">
        <a href="#" class="titlehover">개인 포토폴리오 개발 (현재페이지)</a>
        <a href=""
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </h2>
      <span class="explainDate">2023년 1월 ~ 2023년 2월</span>
      <div class="projectImg-wrap">
        <div class="projectImg portfolio"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">나만의 포토폴리오를 가지기 위해 개발</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지 클릭하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div
          v-for="tech in Porttechs"
          :key="tech.id"
          class="tech-accordion"
          v-bind:class="{ open: tech.isOpen }"
        >
          <div
            @click="PorttoggleAccordion(tech.id)"
            class="tech-title"
            v-bind:class="{ open: tech.isOpen }"
          >
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
  </article>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import animation from "@/assets/lottie/github.json";

export default {
  name: "projectPage",
  components: {
    Vue3Lottie,
  },
  props: {},
  data() {
    return {
      KBArirangtechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript, jQuery",
          content: "이를 기반으로 디자인 및 동적효과를 주었습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "서버를 구축하기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "express.js",
          content: "Node.js와 더불어 router를 통해 구조를 만들었습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "mySQL",
          content:
            "회원정보, 공지사항, 사진게시판의 데이터를 저장하고, 데이터를 불러오기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "aws",
          content:
            "Elastic Beanstalk으로 만든 환경에 제 Github를 연결한 CodePipeline를 통해 배포를 하였습니다. 데이터는 RDS를 통해 데이터베이스를 만들고 거기에 mySQL과 연결하여 연동했습니다.",
          isOpen: false,
        },
      ],
      Seomoontechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript",
          content: "이를 기반으로 디자인 및 동적효과를 주었습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "서버를 구축하기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "express.js",
          content: "Node.js와 더불어 router를 통해 구조를 만들었습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "mySQL",
          content:
            "회원정보, 공지사항, 사진게시판의 데이터를 저장하고, 데이터를 불러오기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "aws",
          content:
            "Elastic Beanstalk으로 만든 환경에 제 Github를 연결한 CodePipeline를 통해 배포를 하였습니다. 데이터는 RDS를 통해 데이터베이스를 만들고 거기에 mySQL과 연결하여 연동했습니다.",
          isOpen: false,
        },
      ],
      Porttechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript, jQuery",
          content: "이를 기반으로 디자인 및 동적효과를 주었습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "Vue.js를 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "Vue.js",
          content:
            "Vue.js를 기반으로 포트폴리오를 제작했습니다. vue-cli를 이용해 프로젝트를 생성했습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "vue3-lottie",
          content: "깃허브의 아이콘을 불러오기 위해 사용했습니다.",
          isOpen: false,
        },
      ],
      animation,
    };
  },
  methods: {
    KBAtoggleAccordion(id) {
      this.KBArirangtechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
    SeomoontoggleAccordion(id) {
      this.Seomoontechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
    PorttoggleAccordion(id) {
      this.Porttechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
}

.titleWithGithub {
  display: flex;
  align-items: center;
  column-gap: 20px;
  transition: all 0.5s ease;
}

.githubIcon {
  width: 70px;
  height: 70px;
  margin: 0;
}

.githubIcon:hover {
  fill: red;
}

.projectImg-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
.projectImg {
  width: 700px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.introduction-projects {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  position: relative;
}

.useTech .explain {
  margin-bottom: 20px;
}

.techImg {
  width: 20px;
  height: 20px;
  background-image: url(../../public/img/pen.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 5px;
}

.kbsaving {
  background-image: url(../../public/img/kbsaving.png);
}

.arirnag {
  background-image: url(../../public/img/arirang.PNG);
}

.seomoon {
  background-image: url(../../public/img/seomoon.PNG);
}

.portfolio {
  background-image: url(../../public/img/portfolio.PNG);
}

.tech-accordion {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: margin 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

.tech-accordion::before {
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  content: "";
  opacity: 1;
  position: absolute;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: rgba(0, 0, 0, 0.12);
}

.tech-accordion.open {
  margin: 16px 0;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}
.tech-accordion.open:last-child {
  margin-bottom: 0;
}

.tech-title {
  width: 100%;
  min-height: 48px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.tech-title.open {
  padding: 20px 16px;
}

.arrow {
  width: 16px;
  height: 16px;
  background-image: url(../../public/img/acor_arrow.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.arrow.open {
  transform: rotate(180deg);
}

.tech-content {
  max-height: 0;
  padding: 0px 16px;
  overflow: hidden;
  background-color: white;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition-duration: 0.237s;
}

.tech-content.open {
  max-height: 100px;
  padding: 8px 16px 16px;
}
</style>
