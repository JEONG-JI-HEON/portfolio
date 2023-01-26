<template>
  <article id="contact" class="artmargin">
    <h1 id="ConT" class="intro-title observed">
      Contact<span class="purplePoint">.</span>
      <div class="underLine"></div>
    </h1>
    <article class="introduction">
      <span id="myContact" class="intro-subtitle observed"
        >끝까지 봐주셔서 감사합니다.</span
      >
      <article>
        <div
          v-for="contact in contact"
          :key="contact.id"
          class="contact-accordion"
          v-bind:class="{ open: contact.isOpen }"
        >
          <div
            @click="toggleAccordion(contact.id)"
            class="contact-title"
            v-bind:class="{ open: contact.isOpen }"
          >
            {{ contact.title }}
            <div class="arrow" v-bind:class="{ open: contact.isOpen }"></div>
          </div>
          <div class="contact-content" v-bind:class="{ open: contact.isOpen }">
            {{ contact.content1 }}
          </div>
          <div class="contact-content" v-bind:class="{ open: contact.isOpen }">
            {{ contact.content2 }}
          </div>
          <div class="contact-content" v-bind:class="{ open: contact.isOpen }">
            {{ contact.content3 }}
          </div>
        </div>
      </article>
    </article>
  </article>
</template>

<script>
export default {
  name: "contactPage",
  props: {},
  data() {
    return {
      contact: [
        {
          id: 1,
          title: "연락처",
          content1: "010-5052-0397",
          content2: "wlgjs0804@naver.com",
          content3: "https://github.com/JEONG-JI-HEON",
          isOpen: true,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(id) {
      this.contact.forEach((contact) => {
        if (contact.id === id) {
          contact.isOpen = !contact.isOpen;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact {
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 70px;
}

.contact-accordion {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: margin 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

.contact-accordion::before {
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

.contact-accordion.open {
  margin: 16px 0;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}
.contact-accordion.open:last-child {
  margin-bottom: 0;
}

.contact-title {
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

.contact-title.open {
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

.contact-content {
  max-height: 0;
  padding: 0px 16px;
  overflow: hidden;
  background-color: white;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition-duration: 0.237s;
}

.contact-content.open {
  max-height: 100px;
  padding: 8px 16px 16px;
}
</style>
