<template>
  <article id="project" class="artmargin">
    <h1 id="Proj" class="intro-title observed">
      Project<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="project1" class="introduction observed">
      <!-- <span class="intro-subtitle">팀 프로젝트</span> -->
      <div class="titleWithGithub">
        <h2>
          <a href="http://13.125.173.106/" class="titlehover" target="_blank">세종 커피로봇 관제 대시보드</a>
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/sejong_robot" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2025년 06월 ~ 2025년 09월</span>
      <div class="projectImg-wrap">
        <div class="projectImg sejong" @click="emitEvent(project1)"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">ID: manager1 / PW: 1234</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">백엔드 개발자 2인, 프론트엔드 개발자 1인 구성으로 프로젝트 진행</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">모든 프론트엔드 기능 담당</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project1)">클릭</span>하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div v-for="tech in sejongTechs" :key="tech.id" class="tech-accordion" v-bind:class="{ open: tech.isOpen }">
          <div @click="sejongToggleAccordion(tech.id)" class="tech-title" v-bind:class="{ open: tech.isOpen }">
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
    <article id="project2" class="introduction observed">
      <div class="titleWithGithub">
        <h2>
          <a href="http://smc-env.eba-6msdgjyc.ap-northeast-2.elasticbeanstalk.com/" class="titlehover" target="_blank"
            >삼성서울병원 e-러닝 플랫폼</a
          >
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/kbsmc-admin" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2025년 10월 ~ 2026년 2월</span>
      <div class="projectImg-wrap">
        <div class="projectImg smc" @click="emitEvent(project2)"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            병원 관계자를 대상으로 교육 콘텐츠를 제공하고 수강 현황을 관리할 수 있는 모바일 웹 서비스 개발
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">e-러닝 영상 업로드 및 수정삭제, 회원 정보 관리, 유저 영상 진도율 통계</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project2)">클릭</span>하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div v-for="tech in smcTechs" :key="tech.id" class="tech-accordion" v-bind:class="{ open: tech.isOpen }">
          <div @click="smcToggleAccordion(tech.id)" class="tech-title" v-bind:class="{ open: tech.isOpen }">
            {{ tech.title }}
            <div class="arrow" v-bind:class="{ open: tech.isOpen }"></div>
          </div>
          <div class="tech-content" v-bind:class="{ open: tech.isOpen }">
            {{ tech.content }}
          </div>
        </div>
      </article>
    </article>
    <article id="project3" class="introduction observed">
      <div class="titleWithGithub">
        <h2>
          <a href="/" class="titlehover" target="_blank">개인 포트폴리오 개발 (현재페이지)</a>
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/portfolio" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2023년 1월 ~ 2023년 2월</span>
      <div class="projectImg-wrap">
        <div class="projectImg portfolio" @click="emitEvent(project4)"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">나만의 포트폴리오를 가지기 위해 개발</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project4)">클릭</span>하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div v-for="tech in portTechs" :key="tech.id" class="tech-accordion" v-bind:class="{ open: tech.isOpen }">
          <div @click="portToggleAccordion(tech.id)" class="tech-title" v-bind:class="{ open: tech.isOpen }">
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
      sejongTechs: [
        {
          id: 1,
          title: "React, react-query",
          content:
            "UI 개발에 집중할 수 있습니다. 컴포넌트를 이용해서 재사용 가능하고, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다. 또한 JSX 문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있어서 사용했습니다. react-query는 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "서버를 구축하기 위해 사용했습니다. 자바스크립트으로도 서버개발을 할 수 있는게 큰 장점입니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "Three.js",
          content:
            "로봇의 3D 모델링을 웹에서 구현하기 위해 사용했습니다. WebGL을 이용해서 3D 그래픽을 렌더링하는 라이브러리입니다. 이를 이용해서 로봇의 모델링과 애니메이션을 구현했습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "recoil",
          content:
            "리액트의 상태관리 라이브러리입니다. 컴포넌트 간에 상태를 공유할 때, prop drilling을 방지하기 위해 사용했습니다. 또한 비동기 상태 관리도 지원하여, 서버에서 데이터를 불러오는 과정에서도 유용하게 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "gsap",
          content:
            "애니메이션 라이브러리입니다. 스크롤에 따른 애니메이션 효과를 구현하기 위해 사용했습니다. 또한 다양한 애니메이션 효과를 제공하여, 웹 페이지의 시각적인 효과를 높이는 데 도움을 주었습니다.",
          isOpen: false,
        },
        {
          id: 6,
          title: "aws",
          content: "EC2에 서버를 구축하고, S3에 정적 파일을 호스팅하여 배포했습니다.",
          isOpen: false,
        },
      ],
      smcTechs: [
        {
          id: 1,
          title: "React, react-query",
          content:
            "UI 개발에 집중할 수 있습니다. 컴포넌트를 이용해서 재사용 가능하고, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다. 또한 JSX 문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있어서 사용했습니다. react-query는 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "서버를 구축하기 위해 사용했습니다. 자바스크립트으로도 서버개발을 할 수 있는게 큰 장점입니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "recoil",
          content:
            "리액트의 상태관리 라이브러리입니다. 컴포넌트 간에 상태를 공유할 때, prop drilling을 방지하기 위해 사용했습니다. 또한 비동기 상태 관리도 지원하여, 서버에서 데이터를 불러오는 과정에서도 유용하게 사용했습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "aws",
          content: "EC2에 서버를 구축하고, S3에 정적 파일을 호스팅하여 배포했습니다.",
          isOpen: false,
        },
      ],
      portTechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript",
          content: "기본 마크업 언어들 입니다. 이를 기반으로 디자인 및 동적효과를 주었습니다.",
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
          content: "Vue.js를 기반으로 포트폴리오를 제작했습니다. vue-cli를 이용해 프로젝트를 생성했습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "vue3-lottie",
          content: "깃허브의 아이콘을 불러오기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "Prettier",
          content:
            "프로젝트 코드의 통일화를 위해 사용했습니다. 따옴표와 쌍 따옴표의 통일, 한 줄에 몇 자 이상시 자동 줄바꿈 등 코드의 일관성을 지킬 수 있습니다.",
          isOpen: false,
        },
        {
          id: 6,
          title: "Firebase",
          content: "구글의 배포 시스템인 firebase를 사용했습니다. 비교적 쉬운 절차와 무료인 시스템인 것이 장점입니다.",
          isOpen: false,
        },
      ],
      animation,
      project1: {
        title: "세종 커피로봇 관제 대시보드",
        projectIntro: "세종시청 내 커피 배달 로봇의 실시간 위치 및 상태를 모니터링할 수 있는 관제 웹 서비스입니다.",
        projectMainFs: [
          "로그인",
          "어드민 페이지 (하루 배달량, 배달 시간, 배달 성공률 등 통계 제공)",
          "실시간 로봇 위치 및 상태 모니터링",
          "실시간 커피 주문 리스트",
          "로봇 제어 (로봇 멈춤, 재시작, 충전 등)",
        ],
        mySections: ["전반적인 3D Scene 구현", "모든 UI 개발", "모든 API 연동"],
        clarifications: [
          "실시간 로봇 위치 및 상태 모니터링은 3D 모델링과 애니메이션을 이용해서 구현했습니다.",
          "실시간 커피 주문 리스트는 react-query를 이용해서 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다.",
        ],
        developStorys: [
          "웹소켓을 활용하여 3D Scene에서의 데이터 동기화를 처음 적용한 프로젝트 입니다. 세종시청에서 실제로 운영중인 커피 배달 로봇의 관제 대시보드를 개발하는 프로젝트였습니다.",
          "팀원들과의 협업을 통해, 프론트엔드 개발자로서의 역량뿐만 아니라, 팀원들과의 소통과 협업 능력도 키울 수 있었습니다.",
          "react-query 라이브러리를 이용해서 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다.",
        ],
        improves: [
          "실시간 로봇 위치 및 상태 모니터링에서, 3D 모델링과 애니메이션을 이용해서 구현했는데, 로봇의 위치와 상태가 조금 더 직관적으로 보이게 개선할 수 있을 것 같습니다.",
          "실시간 커피 주문 리스트에서, react-query를 이용해서 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다. 하지만 주문 리스트가 많아질 경우, 성능이 저하되는 문제가 있었습니다. 이를 개선하기 위해서는 페이지네이션이나 무한 스크롤 등의 기능을 추가할 수 있을 것 같습니다.",
        ],
        projectMockup: true,
      },
      project2: {
        title: "삼성서울병원 e-러닝 플랫폼",
        projectIntro:
          "병원 관계자를 대상으로 교육 콘텐츠를 제공하고 수강 현황을 관리할 수 있는 모바일 웹 서비스입니다.",
        projectMainFs: [
          "로그인, 회원가입",
          "e-러닝 영상 업로드 및 수정삭제",
          "회원 정보 관리",
          "유저 영상 진도율 통계",
        ],
        clarifications: [
          "e-러닝 영상 업로드 및 수정삭제는 AWS S3를 이용해서 구현했습니다. S3에 영상을 업로드하고, 업로드된 영상의 URL을 데이터베이스에 저장하는 방식으로 구현했습니다.",
          "유저 영상 진도율 통계는 react-query를 이용해서 서버에서 데이터를 불러오는 과정에서, 로딩과 에러처리를 간편하게 할 수 있게 도와주는 라이브러리입니다. 또한 캐싱과 같은 기능도 제공하여, 서버에서 데이터를 불러오는 과정에서의 최적화를 도와줍니다.",
        ],
        developStorys: [
          "비교적 촉박한 일정이었지만, 팀원들과의 협업을 통해, 프론트엔드 개발자로서의 역량뿐만 아니라, 팀원들과의 소통과 협업 능력도 키울 수 있었습니다.",
          "디자인과 기획안이 늦게 나와서, 기본 토대를 먼저 만들어놓고 디자인과 기획안이 나오는 대로, 그에 맞춰서 개발을 진행했습니다.",
          "DB에 저장된 영상들의 URL을 불러와서, 영상이 업로드된 날짜와 함께 영상 리스트를 보여주는 기능을 구현하는 과정에서 백엔드 개발자와 굉장히 많은 소통이 필요했습니다.",
        ],
        improves: [
          "전체적으로 촉박한 일정이었음에도 불구하고, 너무 완벽하게 만들려고 했던 것 같습니다. 일정이 촉박한 만큼, 우선순위를 정해서, 꼭 필요한 기능부터 완성시키고, 그 이후에 추가적인 기능들을 완성시키는 방식으로 개발을 진행했어야 했던 것 같습니다.",
          "이번 프로젝트를 통해서 실제 실무에선 이렇게 일정이 꼬여도 잘 대처하는 경험을 할 수 있었습니다.",
        ],
        projectMockup: true,
      },
      project3: {
        title: "포트폴리오",
        projectIntro: "저 자신을 소개하는 포트폴리오 페이지입니다.",
        projectMainFs: ["깔끔한 디자인으로 저 자신을 소개", "Vue.js를 활용한 빠른 데이터 불러오기"],
        clarifications: ["별다른 데이터가 없기에, 비교적 쉽고 빠르게 배포할 수 있는 Firebase를 이용했습니다."],
        developStorys: [
          "포트폴리오 웹페이지다 보니 기능보다는 시각적인 효과를 중점에 두고 만들었습니다.",
          "Vue.js를 사용해 개발하였으며 Vue에 대한 이해와 역량을 쌓을 수 있었습니다.",
          "왼쪽 scrollSpy 기능을 구현하기위해 IntersectionObserver 함수를 사용했습니다.",
          "움직이는 github 아이콘은 'vue3-lottie'라는 라이브러리를 활용해 넣었습니다.",
        ],
        improves: [
          "복잡한 데이터 상태를 더 쉽게 관리하고 유지할수 있고 성능을 더욱 더 향상 시킬수 있게 Vuex가 필요해 보입니다.",
        ],
        projectMockup: true,
      },
    };
  },
  methods: {
    sejongToggleAccordion(id) {
      this.sejongTechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
    smcToggleAccordion(id) {
      this.smcTechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
    portToggleAccordion(id) {
      this.portTechs.forEach((techs) => {
        if (techs.id === id) {
          techs.isOpen = !techs.isOpen;
        }
      });
    },
    emitEvent(data) {
      this.$emit("openMockup", data);
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
  width: 100px;
  height: 100px;
  margin: 0;
}

.projectImg-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
}
.projectImg {
  width: 700px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  transition: transform ease 0.5s;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.projectImg:hover {
  transform: scale(1.05);
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

.sejong {
  background-image: url(../../public/img/sejong.png);
}

.smc {
  background-image: url(../../public/img/smc.png);
}

.seomoon {
  background-image: url(../../public/img/seomoon.PNG);
}

.portfolio {
  background-image: url(../../public/img/portfolio.PNG);
}
.baseball {
  background-image: url(../../public/img/baseballGame.PNG);
}

.explainUnder {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.tech-accordion {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: margin 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

.tech-accordion::before {
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  content: "";
  opacity: 1;
  position: absolute;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: rgba(0, 0, 0, 0.12);
}

.tech-accordion.open {
  margin: 16px 0;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition-duration: 0.237s;
}

.tech-content.open {
  max-height: 150px;
  padding: 8px 16px 16px;
}

@media (max-width: 900px) {
  .projectImg {
    width: 100%;
    height: 100%;
    padding-top: 50%;
  }
}

@media (max-width: 600px) {
  #project {
    row-gap: 55px;
  }

  .githubIcon {
    width: 50px;
    height: 50px;
  }

  .tech-content.open {
    max-height: 200px;
  }
}
</style>
