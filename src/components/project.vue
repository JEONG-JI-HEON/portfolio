<template>
  <article id="project" class="artmargin">
    <h1 id="Proj" class="intro-title observed">
      Project<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article id="teamProject" class="introduction observed">
      <span class="intro-subtitle">팀 프로젝트</span>
      <div class="titleWithGithub">
        <h2>
          <a
            href="http://kbsaving-env.eba-rinmdekn.ap-northeast-2.elasticbeanstalk.com/"
            class="titlehover"
            target="_blank"
            >KB저축은행</a
          >
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/kbbank" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2022년 11월 1일 ~ 2022년 12월 30일</span>
      <div class="projectImg-wrap">
        <div class="projectImg kbsaving" @click="emitEvent(project1)"></div>
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
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project1)"
              >클릭</span
            >하여 참조
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
      <div class="titleWithGithub">
        <h2>
          <a
            href="http://arirang-env.eba-6msdgjyc.ap-northeast-2.elasticbeanstalk.com/"
            class="titlehover"
            target="_blank"
            >아리랑시네센터</a
          >
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/arirang" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2022년 10월 10일 ~ 2022년 12월 27일</span>
      <div class="projectImg-wrap">
        <div class="projectImg arirnag" @click="emitEvent(project2)"></div>
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
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project2)"
              >클릭</span
            >하여 참조
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
      <div class="titleWithGithub">
        <h2>
          <a
            href="http://seomoonmarket-env.eba-dumip8jh.ap-northeast-2.elasticbeanstalk.com/"
            class="titlehover"
            target="_blank"
            >서문시장</a
          >
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/seomoonmarket" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2022년 9월 10일 ~ 2022년 10월 7일</span>
      <div class="projectImg-wrap">
        <div class="projectImg seomoon" @click="emitEvent(project3)"></div>
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
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project3)"
              >클릭</span
            >하여 참조
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
      <div class="titleWithGithub">
        <h2>
          <a href="/" class="titlehover" target="_blank"
            >개인 포토폴리오 개발 (현재페이지)</a
          >
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
          <div class="explainTxt">나만의 포토폴리오를 가지기 위해 개발</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project4)"
              >클릭</span
            >하여 참조
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
    <article id="persProject4" class="introduction observed">
      <div class="titleWithGithub">
        <h2>
          <a
            href="https://baseball-game-orcin.vercel.app/"
            class="titlehover"
            target="_blank"
            >숫자 야구 게임</a
          >
        </h2>
        <a href="https://github.com/JEONG-JI-HEON/baseballGame" target="_blank"
          ><Vue3Lottie :animationData="animation" class="githubIcon"
        /></a>
      </div>
      <span class="explainDate">2023년 2월 ~</span>
      <div class="projectImg-wrap">
        <div class="projectImg baseball" @click="emitEvent(project5)"></div>
      </div>
      <article class="introduction-projects">
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">React의 역량을 끌어올리기 위해 개발</div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            서로 다른 숫자 4자리를 추측해나가며 맞추는 웹 게임
          </div>
        </div>
        <div class="explain">
          <div class="checkIcon"></div>
          <div class="explainTxt">
            그 밖에 자세한 사항은 이미지
            <span class="explainUnder titlehover" @click="emitEvent(project5)"
              >클릭</span
            >하여 참조
          </div>
        </div>
      </article>
      <article class="useTech">
        <h3 class="explain">
          <div class="techImg"></div>
          사용기술들
        </h3>
        <div
          v-for="tech in Baseballtechs"
          :key="tech.id"
          class="tech-accordion"
          v-bind:class="{ open: tech.isOpen }"
        >
          <div
            @click="BasetoggleAccordion(tech.id)"
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
          content:
            "기본 마크업 언어들 입니다. 이를 기반으로 디자인 및 동적효과를 주었습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content:
            "서버를 구축하기 위해 사용했습니다. 자바스크립트로도 서버개발을 할 수 있는게 큰 장점입니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "express.js",
          content:
            "Node.js와 호환이 되며, 여러 미들웨어를 사용하기 위해 사용했습니다. 특히 사용한 주된 이유가 ejs를 사용하기 편하고 routing이 편해서입니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "mySQL",
          content:
            "회원정보, 공지사항, 사진게시판의 데이터를 저장해두기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "aws",
          content:
            "Elastic Beanstalk으로 만든 환경에 제 Github를 연결한 CodePipeline를 통해 배포를 하였습니다. 데이터는 RDS를 통해 데이터베이스를 만들고 거기에 mySQL의 정보를 불러와 연결했습니다.",
          isOpen: false,
        },
      ],
      Seomoontechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript",
          content:
            "기본 마크업 언어들 입니다. 이를 기반으로 디자인 및 동적효과를 주었습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content:
            "서버를 구축하기 위해 사용했습니다. 자바스크립트로도 서버개발을 할 수 있는게 큰 장점입니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "express.js",
          content:
            "Node.js와 호환이 되며, 여러 미들웨어를 사용하기 위해 사용했습니다. 특히 사용한 주된 이유가 ejs를 사용하기 편하고 routing이 편해서입니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "mySQL",
          content:
            "회원정보, 공지사항, 사진게시판의 데이터를 저장해두기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "aws",
          content:
            "Elastic Beanstalk으로 만든 환경에 제 Github를 연결한 CodePipeline를 통해 배포를 하였습니다. 데이터는 RDS를 통해 데이터베이스를 만들고 거기에 mySQL의 정보를 불러와 연결했습니다.",
          isOpen: false,
        },
      ],
      Porttechs: [
        {
          id: 1,
          title: "HTML5, CSS, JavaScript",
          content:
            "기본 마크업 언어들 입니다. 이를 기반으로 디자인 및 동적효과를 주었습니다.",
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
          content:
            "구글의 배포 시스템인 firebase를 사용했습니다. 비교적 쉬운 절차와 무료인 시스템인 것이 장점입니다.",
          isOpen: false,
        },
      ],
      Baseballtechs: [
        {
          id: 1,
          title: "React",
          content:
            "UI 개발에 집중할 수 있습니다. 컴포넌트를 이용해서 재사용 가능하고, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다. 또한 JSX 문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있어서 사용했습니다.",
          isOpen: false,
        },
        {
          id: 2,
          title: "Node.js",
          content: "react.js를 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 3,
          title: "lottie-react",
          content: "로딩 이미지, 목숨 이미지를 불러오기 위해 사용했습니다.",
          isOpen: false,
        },
        {
          id: 4,
          title: "Prettier",
          content:
            "프로젝트 코드의 통일화를 위해 사용했습니다. 따옴표와 쌍 따옴표의 통일, 한 줄에 몇 자 이상시 자동 줄바꿈 등 코드의 일관성을 지킬 수 있습니다.",
          isOpen: false,
        },
        {
          id: 5,
          title: "Vercel",
          content:
            "깃허브 주소만 입력하면 바로 배포가 됩니다. CI/CD가 자동으로 구현되어 있어서 메인 브랜치에 merge, commit 됐을 때, 혹은 메인이 아닌 브랜치에서 merge, commit 시에 preview deployment를 제공하여 오류가 나는지 확인해줍니다. 또한 내부적으로 CI 파이프라인에서 에러가 나거나, 사용하지 않는 변수와 같은 실수들에 에러를 내뱉어 배포가 된 이후에 에러가 나는 것을 방지할 수 있습니다.",
          isOpen: false,
        },
      ],
      animation,
      project1: {
        title: "KB저축은행",
        projectIntro:
          "기존의 KB저축은행 사이트를 재해석하여 리뉴얼한 사이트입니다.",
        projectMainFs: [
          "로그인, 회원가입",
          "간단한 금융계산기, 계좌조회",
          "공지사항 작성 및 수정과 삭제",
          "카드 신청 및 조회와 상품소개",
        ],
        mySections: [
          "로그인 및 회원가입",
          "메인페이지 일부분 디자인 및 전체적인 스와이퍼효과",
          "금융계산기, 계좌조회 페이지",
        ],
        clarifications: [
          "메인 페이지의 스크롤 효과는 스와이퍼를 이용해 구현했습니다.",
          "또한 계좌조회나 카드신청 기능을 넣기 위해 회원가입시 계좌번호 역시 만들어지게 설계했습니다.",
          "회원가입시 아이디 중복체크 기능을 넣었고 주소는 카카오에서 제공하는 API를 사용했고 가입된 회원정보는 mySQL 테이블에 저장됩니다.",
          "mySQL에 담긴 데이터들과 함께 배포하기위해 aws를 이용했습니다.",
        ],
        developStorys: [
          "교육과정 중 진행한 처음이자 마지막인 팀프로젝트 입니다. 약 두달간 진행된 프로젝트이며 시간을 쪼개 다른 개인프로젝트와 병행하면서 제작했습니다.",
          "아무래도 다른 팀원과 처음으로 진행한 프로젝트다 보니 의견조율과 소통이 어색했고 그 과정에서 시간을 많이 사용했습니다.",
          "하지만 꾸준히 대화를 하고 의견조율에 신경을 많이써서 촉박한 시간이였지만 끝내 마무리 지을수 있었습니다.",
          "또한 깃허브의 사용법을 아예 몰랐었지만 이 프로젝트를 진행함으로써 사용법을 알 수 있는 경험이었습니다.",
        ],
        improves: [
          "사실 거의 모든 은행페이지들은 보안프로그램이 필수라 봐도 되지만 그 기능은 제외하고 구현했습니다.",
          "그렇다 보니 타 은행페이지들과 느낌이 많이 다른 페이지가 되었습니다.",
          "회원가입에 아이디 중복체크를 구현하기 위해 회원가입 페이지에서 모든 회원들의 아이디 정보를 가져오게 됐는데 이는 보안상 매우매우 취약해질뿐만 아니라 회원정보의 데이터가 많아 질시 로딩이 느려질 수 있습니다.",
          "로그인기능이 있지만 로그인이 된 상태에서만의 기능은 따로 없습니다.",
        ],
        projectMockup: true,
      },
      project2: {
        title: "아리랑시네센터",
        projectIntro:
          "기존의 아리랑시네센터 사이트를 재해석하여 리뉴얼한 사이트입니다.",
        projectMainFs: [
          "로그인, 회원가입",
          "네이버 영화정보 API를 이용한 영화검색",
          "공지사항 작성 및 수정과 삭제",
        ],
        clarifications: [
          "회원가입시 아이디 중복체크 기능을 넣었고 주소는 카카오에서 제공하는 API를 사용했고 가입된 회원정보는 mySQL 테이블에 저장됩니다.",
          "로그인 시 네이버 로그인이 가능하게 구현했습니다.",
          "로그인정보가 유지되게 세션을 사용했고 유효기간도 설정해두어 시간이 지나면 자동으로 로그아웃됩니다.",
          "네이버 검색 API중 영화정보가 담겨있는 API를 가져와 검색기능을 만들었습니다.",
          "mySQL에 담긴 데이터들과 함께 배포하기위해 aws를 이용했습니다.",
        ],
        developStorys: [
          "교육과정 중 진행한 개인프로젝트 입니다. 평소 제작해보고 싶었던 사이트라서 제작하였습니다.",
          "이 프로젝트를 진행하면서 전반적인 자바스크립트의 역량을 올릴 수 있었습니다.",
          "API를 처음 알고, 처음 사용하게 된 프로젝트라서 JSON파일을 불러오는 과정에서 많은 고민을 했고, 이는 Node.js의 request 기능을 이용하여 원하는 정보들을 불러올 수 있었습니다.",
          "네이버 로그인을 연동하는 과정에서 로그인이 유지되지 않는 문제에 봉착했었는데 세션에 대한 개념을 알게되어 express-session을 통해 API의 access_token을 불러와 세션에 저장하여 로그인기능을 마무리 지었습니다.",
        ],
        improves: [
          "회원가입에 아이디 중복체크를 구현하기 위해 회원가입 페이지에서 모든 회원들의 아이디 정보를 가져오게 됐는데 이는 보안상 매우매우 취약해질뿐만 아니라 회원정보의 데이터가 많아 질시 로딩이 느려질 수 있습니다.",
          "로그인기능이 있지만 로그인이 된 상태에서만의 기능은 따로 없습니다.",
          "localhost에선 문제가 없었지만 aws에서 배포한 사이트에서는 네이버 영화정보의 링크가 오류가 났습니다. 에러 코드는 500으로 네이버 개발자포럼에 문의를 한 상태입니다.",
        ],
        projectMockup: true,
      },
      project3: {
        title: "서문시장 야시장",
        projectIntro:
          "기존의 서문시장 야시장 사이트를 재해석하여 리뉴얼한 사이트입니다.",
        projectMainFs: ["로그인, 회원가입", "공지사항 작성 및 수정과 삭제"],
        clarifications: [
          "회원가입시 아이디 중복체크 기능을 넣었고 주소는 카카오에서 제공하는 API를 사용했고 가입된 회원정보는 mySQL 테이블에 저장됩니다.",
          "mySQL에 담긴 데이터들과 함께 배포하기위해 aws를 이용했습니다.",
        ],
        developStorys: [
          "교육과정 중 진행한 첫번째 개인프로젝트 입니다.",
          "마크업 언어의 역량을 끌어 올리고자, 기능보단 디자인에 중점을 두고 제작했습니다.",
          "사이트의 컨셉에 맞춰 야시장 느낌이 나게 연출했습니다.",
          "swiper를 적극 활용하여 시각적인 효과를 주었습니다.",
        ],
        improves: [
          "회원가입에 아이디 중복체크를 구현하기 위해 회원가입 페이지에서 모든 회원들의 아이디 정보를 가져오게 됐는데 이는 보안상 매우매우 취약해질뿐만 아니라 회원정보의 데이터가 많아 질시 로딩이 느려질 수 있습니다.",
          "로그인기능이 있지만 로그인이 된 상태에서만의 기능은 따로 없습니다.",
          "메인페이지의 fade효과는 일일히 scroll높이에 따라 줬다 보니 정확도가 많이 떨어집니다. 이는 IntersectionObserver 함수를 활용하여 정확도를 높일 수 있습니다.",
          "메인페이지에 이미지가 많아, 사이트 로딩이 오래 걸리는 편입니다. 전반적인 리소스 절감 조치가 필요해 보입니다.",
        ],
        projectMockup: true,
      },
      project4: {
        title: "포토폴리오",
        projectIntro: "저 자신을 소개하는 포토폴리오 페이지입니다.",
        projectMainFs: [
          "깔끔한 디자인으로 저 자신을 소개",
          "Vue.js를 활용한 빠른 데이터 불러오기",
        ],
        clarifications: [
          "별다른 데이터가 없기에, 비교적 쉽고 빠르게 배포할 수 있는 Firebase를 이용했습니다.",
        ],
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
      project5: {
        title: "숫자 야구 게임",
        projectIntro: "서로 다른 숫자 4자리를 맞추는 게임입니다.",
        projectMainFs: [
          "게임 시작 버튼을 누를시 랜덤으로 서로 다른 숫자 4자리를 생성",
          "React.js를 활용한 새로고침 없이 데이터 초기화",
        ],
        clarifications: [
          "React의 Next.js를 만든 Vercel를 이용하여 배포하였습니다.",
        ],
        developStorys: [
          "React로 진행한 첫번째 프로젝트 입니다.",
          "React를 사용해 개발하였으며 React에 대한 이해와 역량을 쌓을 수 있었습니다.",
          "움직이는 로딩 이미지와 목숨 아이콘들은 'lottie-react'라는 라이브러리를 활용해 넣었습니다.",
          "배포는 Vercel에서 진행했으며 Next.JS를 만든 곳에서 만든 배포 시스템입니다. 깃허브 주소만 있다면 쉽게 배포할 수 있고 무료이기 때문에 선택하게 되었습니다.",
        ],
        improves: [
          "디자인이 너무 단순해 부가적인 이미지들을 추후 추가할 예정입니다.",
          "순위나 기록을 볼수 있는 페이지를 만들어 좀 더 게임 스럽게 할 필요가 보입니다.",
        ],
        projectMockup: true,
      },
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
    BasetoggleAccordion(id) {
      this.Baseballtechs.forEach((techs) => {
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
