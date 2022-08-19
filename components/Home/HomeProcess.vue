<template>
  <section id="home-process">
    <div class="wrapper">
      <MainTitle
        :title="$i18n.locale === 'zh' ? '移民服务流程' : 'Service Process'"
        titleEN="SERVICE PROCESS"
      />
      <ul class="service-process-grid">
        <li
          class="service-process-item"
          v-for="(step, index) in $i18n.locale === 'zh'
            ? serviceSteps
            : serviceStepsEN"
          :key="index"
        >
          <h4>
            {{ step.title }}
          </h4>
          <div class="icon-wrap">
            <img :data-src="step.iconUrl" alt="" class="lazyload" />
          </div>
          <p class="content">
            {{ step.content }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      serviceSteps,
      serviceStepsEN,
    };
  },
};
const serviceSteps = [
  {
    title: "专家资讯",
    iconUrl: "/img/icons/process/chat_icon.SVG",
    content: " 资深移民顾问提供贴心1对1咨询服务",
  },
  {
    title: "提交简历",
    iconUrl: "/img/icons/process/upload_file_icon.SVG",
    content: " 提交您的简历至加彼岸，我司严格遵守保密协议",
  },
  {
    title: "个案评估",
    iconUrl: "/img/icons/process/assessment_icon.SVG",
    content: " 持牌移民律师审查客户资料，匹配合适项目",
  },
  {
    title: "方案制定",
    iconUrl: "/img/icons/process/submit_doc_icon.SVG",
    content: " 移民顾问量身定制详细申请方案",
  },
  {
    title: "准备材料",
    iconUrl: "/img/icons/process/prepare_materials_icon.SVG",
    content: " 客服管家收集申请所需资料，绝无遗漏",
  },
  {
    title: "递交申请",
    iconUrl: "/img/icons/process/plan_icon.SVG",
    content: " 资深文案&律师整理申请材料，多重审查后递交",
  },
  {
    title: "签证批准",
    iconUrl: "/img/icons/process/approve_icon.SVG",
    content: " 获得移民通过函*如发生拒签律师将协助复议",
  },
  {
    title: "登陆安家",
    iconUrl: "/img/icons/process/done_icon.SVG",
    content: " 加拿大直营公司提供一站式登陆安家置业服务",
  },
];
const serviceStepsEN = [
  {
    title: "Expert Consultation",
    iconUrl: "/img/icons/process/chat_icon.SVG",
    content:
      "Senior immigration consultants provide intimate 1-to-1 consulting services",
  },
  {
    title: "Submit Your Resume",
    iconUrl: "/img/icons/process/upload_file_icon.SVG",
    content:
      "Submit your resume to Beyond Canada, we strictly adhere to the confidentiality agreement",
  },
  {
    title: "Case Assessment",
    iconUrl: "/img/icons/process/assessment_icon.SVG",
    content:
      "Licensed immigration attorneys review client information and match with suitable projects",
  },
  {
    title: "Program Customization",
    iconUrl: "/img/icons/process/submit_doc_icon.SVG",
    content:
      "Our immigration consultants will customize a detailed application plan",
  },
  {
    title: "Preparation of Documents",
    iconUrl: "/img/icons/process/prepare_materials_icon.SVG",
    content:
      "Customer Service Manager collects the required documents for the application, so that nothing is left out",
  },
  {
    title: "Submission of application",
    iconUrl: "/img/icons/process/plan_icon.SVG",
    content:
      "Senior copywriters & lawyers organize the application documents and submit them after multiple reviews",
  },
  {
    title: "Visa approval",
    iconUrl: "/img/icons/process/approve_icon.SVG",
    content:
      "Obtain immigration approval letter, and in case of rejection, the lawyer will assist in reconsideration",
  },
  {
    title: "Arrival and settle down",
    iconUrl: "/img/icons/process/done_icon.SVG",
    content: "One-stop services to settle down in Canada",
  },
];
</script>

<style lang="scss" scoped>
#home-process {
  padding: 80px 0;
}
.service-process-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  // column-gap: 20px;
}

.service-process-grid .service-process-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 35px 60px auto;
  justify-content: center;
  justify-items: center;

  padding: 10px 10px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  .icon-wrap {
    background-color: $navy;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
    }
  }

  .content {
    flex-grow: 1;
    position: relative;
    background-color: #f3f3f3;
    padding: 15px 10px;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
    border-radius: 5px;
    -webkit-box-shadow: 7px 5px 15px 4px #d1d1d1;
    box-shadow: 7px 5px 15px 4px #d1d1d1;
    border-top: 3px solid $navy;
    letter-spacing: 1px;
  }
  .content::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #2f2f2f;
  }
  &:lang(en) {
    grid-template-rows: 70px 60px auto;
  }
}

.service-process-grid .service-process-item:not(:last-child)::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 70px;
  width: 100%;
  height: 0;
  border-top: 1px solid #1b285450;
  z-index: -1;
}
.service-process-grid .service-process-item:lang(en):not(:last-child)::before {
  top: 105px;
}
@media all and (max-width: 768px) {
  .service-process-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .service-process-grid .service-process-item:not(:last-child)::before {
    border-top: none;
  }
}
@media all and (max-width: 500px) {
  .service-process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
