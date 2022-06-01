<template>
  <div id="eeForm">
    <header
      class="general-header"
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/evaluation/evaluation-header.jpg')`,
      }"
    >
      <div class="wrapper">
        <h1>加拿大移民快速通道（EE）评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item>加拿大移民快速通道（EE）评分系统</a-breadcrumb-item>
      </a-breadcrumb>
      <br />
      <br />
      <div class="recent-scores">
        <div>
          <div v-for="(s, i) in scores" :key="i" :class="i === 0 && 'first'">
            日期：{{ s.date }} | 分数：<span class="mark">{{ s.score }}</span>
          </div>
        </div>
      </div>
      <a-card>
        <a-affix :offset-top="0">
          <div class="pointsCounter">
            <h2>
              您目前EE评分为：<strong>{{ subtotal }}分</strong>
            </h2>
          </div>
        </a-affix>
        <div class="form">
          <div class="section">
            <div class="box last">
              <div class="label">婚姻</div>
              <div class="question">
                <a-radio-group v-model="marriage" @change="onChange(marriage)">
                  <a-radio value="single"> 单身 </a-radio>
                  <a-radio value="married"> 已婚或有伴侣 </a-radio>
                </a-radio-group>
              </div>
            </div>
          </div>
          <div class="section">
            <h3>1.基础信息</h3>
            <div class="box">
              <div class="label">年龄</div>
              <div class="question">
                <a-input-number
                  v-model="age"
                  :min="1"
                  :max="100"
                ></a-input-number>
              </div>
              <div class="result">
                {{ ageCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1"> 初中以下 </a-radio>
                  <a-radio :value="2"> 高中 </a-radio>
                  <a-radio :value="3"> 1年高等教育 </a-radio>
                  <a-radio :value="4"> 2年高等教育 </a-radio>
                  <a-radio :value="5"> 3年以上高等教育 </a-radio>
                  <a-radio :value="6"> 双专业 (3年以上 + 1年以上) </a-radio>
                  <a-radio :value="7">
                    硕士学位或专业学位（如医学博士）
                  </a-radio>
                  <a-radio :value="8"> 博士学位 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ eduCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">第一语言</div>
              <div class="question lang">
                <div>
                  <a-radio-group v-model="langTest1.test">
                    <a-radio :value="1"> 雅思 </a-radio>
                    <a-radio :value="2"> 思培（CELPIP） </a-radio>
                    <a-radio :value="3"> TEF </a-radio>
                  </a-radio-group>
                </div>
                <div class="input">
                  听<a-input-number
                    :min="0"
                    v-model="langTest1.l"
                  ></a-input-number>
                  说<a-input-number
                    :min="0"
                    v-model="langTest1.s"
                  ></a-input-number>
                  读<a-input-number
                    :min="0"
                    v-model="langTest1.r"
                  ></a-input-number>
                  写<a-input-number
                    :min="0"
                    v-model="langTest1.w"
                  ></a-input-number>
                </div>
              </div>
              <div class="result">
                {{ langTest1Calc }}
              </div>
            </div>
            <div class="box">
              <div class="label">第二语言</div>
              <div class="question lang">
                <div>
                  <a-radio-group v-model="langTest2.test">
                    <a-radio :value="1"> 无 </a-radio>
                    <a-radio :value="2"> 雅思 </a-radio>
                    <a-radio :value="3"> 思培（CELPIP） </a-radio>
                    <a-radio :value="4"> TEF </a-radio>
                  </a-radio-group>
                </div>
                <div v-if="langTest2.test !== 1" class="input">
                  听<a-input-number
                    :min="0"
                    v-model="langTest2.l"
                  ></a-input-number>
                  说<a-input-number
                    :min="0"
                    v-model="langTest2.s"
                  ></a-input-number>
                  读<a-input-number
                    :min="0"
                    v-model="langTest2.r"
                  ></a-input-number>
                  写<a-input-number
                    :min="0"
                    v-model="langTest2.w"
                  ></a-input-number>
                </div>
              </div>
              <div class="result">
                {{ langTest2Calc }}
              </div>
            </div>
            <div class="box last">
              <div class="label">工作经验</div>
              <div class="question exp">
                <div style="margin-bottom: 30px">
                  加拿大工作经验（可以不连续）<a-input-number
                    :min="0"
                    :max="100"
                    v-model="exp"
                    style="margin-right: 10px"
                  ></a-input-number>
                  年
                </div>
                <div style="margin-bottom: 30px">
                  加拿大境外工作经验（可以不连续）<a-input-number
                    :min="0"
                    :max="100"
                    v-model="expAbroad"
                    style="margin-right: 10px"
                  ></a-input-number>
                  年
                </div>
                <div>
                  是否持有加拿大技工文凭？
                  <a-radio-group v-model="tech">
                    <a-radio :value="1">有</a-radio>
                    <a-radio :value="2">没有</a-radio>
                  </a-radio-group>
                </div>
              </div>
              <div class="result">
                {{ expCalc }}
              </div>
            </div>
          </div>
          <div class="section" v-if="marriage == 'married'">
            <h3>1.5.配偶加分项</h3>
            <div class="box">
              <div class="label">学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduPartner">
                  <a-radio :value="1"> 初中以下 </a-radio>
                  <a-radio :value="2"> 高中 </a-radio>
                  <a-radio :value="3"> 1年大专 </a-radio>
                  <a-radio :value="4"> 2年大专 </a-radio>
                  <a-radio :value="5"> 3年以上大专或本科 </a-radio>
                  <a-radio :value="6"> 双专业 (3年以上 + 1年以上) </a-radio>
                  <a-radio :value="7">
                    硕士学位或专业学位（如医学博士）
                  </a-radio>
                  <a-radio :value="8"> 博士学位 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ eduCalcPartner }}
              </div>
            </div>
            <div class="box">
              <div class="label">第一语言</div>
              <div class="question lang">
                <div>
                  <a-radio-group v-model="langTest3.test">
                    <a-radio :value="1"> 无 </a-radio>
                    <a-radio :value="2"> 雅思 </a-radio>
                    <a-radio :value="3"> 思培（CELPIP） </a-radio>
                    <a-radio :value="4"> TEF </a-radio>
                  </a-radio-group>
                </div>
                <div class="input" v-if="langTest3.test !== 1">
                  听<a-input-number
                    :min="0"
                    v-model="langTest3.l"
                  ></a-input-number>
                  说<a-input-number
                    :min="0"
                    v-model="langTest3.s"
                  ></a-input-number>
                  读<a-input-number
                    :min="0"
                    v-model="langTest3.r"
                  ></a-input-number>
                  写<a-input-number
                    :min="0"
                    v-model="langTest3.w"
                  ></a-input-number>
                </div>
              </div>
              <div class="result">
                {{ langTest3Calc }}
              </div>
            </div>
            <div class="box last">
              <div class="label">工作经验</div>
              <div class="question">
                加拿大工作经验（可以不连续）<a-input-number
                  v-model="expPartner"
                  style="margin-right: 10px"
                ></a-input-number>
                年
              </div>
              <div class="result">
                {{ expCalcPartner }}
              </div>
            </div>
          </div>
          <div class="section">
            <h3>2.适应性加分（最高100分）</h3>
            <div class="combo-box">
              <div class="box box1">
                <div class="label">学历 & 语言</div>
                <div class="question">
                  第一语言CLB7级以上，同时有1年及以上高等教育
                  <br />
                  第一语言CLB9级以上，同时有1年及以上高等教育
                </div>
              </div>
              <div class="box box2 last">
                <div class="label">
                  学历 <br />
                  & <br />
                  工作经验
                </div>
                <div class="question">
                  1年加拿大工作经验，同时有1年及以上高等教育
                  <br />
                  2年加拿大工作经验，同时有1年及以上高等教育
                </div>
              </div>
              <div class="result">
                {{ eduTotalPts }}
              </div>
            </div>

            <div class="combo-box">
              <div class="box box1">
                <div class="label">
                  语言 <br />&<br />
                  海外工作经验
                </div>
                <div class="question">
                  第一语言CLB7级以上，同时有1年以上海外工作经验
                  <br />
                  第一语言CLB9级以上，同时有1年以上海外工作经验
                </div>
              </div>
              <div class="box box2 last">
                <div class="label">全部工作经验</div>
                <div class="question">
                  1年加拿大国内工作经验 + 1年以上海外工作经验<br />
                  2年以上加拿大国内工作经验 + 1年以上海外工作经验
                </div>
              </div>
              <div class="result">
                {{ expTotalPts }}
              </div>
            </div>

            <div class="box"></div>
            <div class="box last">
              <div class="label">
                语言 <br />
                & <br />
                技工文凭
              </div>
              <div class="question">
                第一语言CLB5以上，CLB7以下且持有加拿大技工文凭
                <br />
                第一语言CLB7及以上且持有加拿大技工文凭
              </div>
              <div class="result">
                {{ langXtechCalc }}
              </div>
            </div>
          </div>
          <div class="section">
            <h3>3.附加分</h3>
            <div class="box">
              <div class="label">省提名</div>
              <div class="question">
                <a-radio-group v-model="rec">
                  <a-radio :value="1"> 有 </a-radio>
                  <a-radio :value="2"> 没有 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ recCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">兄弟姐妹是PR或公民居住在加拿大</div>
              <div class="question">
                <a-radio-group v-model="brothers">
                  <a-radio :value="1"> 有 </a-radio>
                  <a-radio :value="2"> 没有 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ brothersCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">雇主Offer</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="offer">
                  <a-radio :value="1"> 无 </a-radio>
                  <a-radio :value="2"> NOC 00 类工作LMIA </a-radio>
                  <a-radio :value="3"> 其他类工作LMIA </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ offerCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">英法双语</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="bilingual">
                  <a-radio :value="1"> 无 </a-radio>
                  <a-radio :value="2">
                    法语达到CLB7 + 英语CLB4或以下（25分）
                  </a-radio>
                  <a-radio :value="3">
                    法语达到CLB7 + 英语CLB5或以上（50分）
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ bilingualCalc }}
              </div>
            </div>
            <div class="box last">
              <div class="label">加拿大学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="caEdu">
                  <a-radio :value="1"> 无 </a-radio>
                  <a-radio :value="2"> 一年或两年的加拿大高等教育 </a-radio>
                  <a-radio :value="3"> 三年或以上加拿大高等教育 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ caEduCalc }}
              </div>
            </div>
          </div>
        </div>
      </a-card>
      <NuxtLink to="/evaluation" class="back-btn" exact style="margintop: 20px">
        <img src="/img/icons/back-btn.png" alt="" />
        <span>返回上一页</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 加拿大移民快速通道（EE）评分系统 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加拿大移民快速通道（EE）评分系统 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const scores = await $axios.$get(`/ee-scores`, {
      params: {
        _sort: "published_at:desc",
      },
      pagination: {
        pageSize: 3,
      },
    });

    return { scores };
  },
  data() {
    return {
      marriage: "single",
      age: 0,
      exp: 0,
      expAbroad: 0,
      edu: 0,
      tech: 0,
      langTest1: {
        test: undefined,
        l: 0,
        s: 0,
        r: 0,
        w: 0,
        clbL: 0,
        clbS: 0,
        clbR: 0,
        clbW: 0,
      },
      langTest2: {
        test: undefined,
        l: 0,
        s: 0,
        r: 0,
        w: 0,
        clbL: 0,
        clbS: 0,
        clbR: 0,
        clbW: 0,
      },
      langTest3: {
        test: undefined,
        l: 0,
        s: 0,
        r: 0,
        w: 0,
        clbL: 0,
        clbS: 0,
        clbR: 0,
        clbW: 0,
      },
      eduPartner: 0,
      expPartner: 0,
      offer: 0,
      rec: 0,
      brothers: 0,
      bilingual: 0,
      caEdu: 0,
      adaptPoints: 0,
      eduTotalPts: 0,
      expTotalPts: 0,
    };
  },
  methods: {
    onChange(item) {
      // console.log(this.ageCalc)
      console.log(item);
    },
  },
  computed: {
    ageCalc: function () {
      this.age = Math.round(this.age);
      if (this.marriage == "married") {
        return this.age == 18
          ? 90
          : this.age == 19
          ? 95
          : this.age > 19 && this.age < 30
          ? 100
          : this.age == 30
          ? 95
          : this.age == 31
          ? 90
          : this.age == 32
          ? 85
          : this.age == 33
          ? 80
          : this.age == 34
          ? 75
          : this.age == 35
          ? 70
          : this.age == 36
          ? 65
          : this.age == 37
          ? 60
          : this.age == 38
          ? 55
          : this.age == 39
          ? 50
          : this.age == 40
          ? 45
          : this.age == 41
          ? 35
          : this.age == 42
          ? 25
          : this.age == 43
          ? 15
          : this.age == 44
          ? 5
          : 0;
      } else if (this.marriage == "single") {
        return this.age == 18
          ? 99
          : this.age == 19
          ? 105
          : this.age > 19 && this.age < 30
          ? 110
          : this.age == 30
          ? 105
          : this.age == 31
          ? 99
          : this.age == 32
          ? 94
          : this.age == 33
          ? 88
          : this.age == 34
          ? 83
          : this.age == 35
          ? 77
          : this.age == 36
          ? 72
          : this.age == 37
          ? 66
          : this.age == 38
          ? 61
          : this.age == 39
          ? 55
          : this.age == 40
          ? 50
          : this.age == 41
          ? 39
          : this.age == 42
          ? 28
          : this.age == 43
          ? 17
          : this.age == 44
          ? 6
          : 0;
      } else {
        return 0;
      }
    },
    eduCalc: function () {
      if (this.marriage == "married") {
        return this.edu == 1
          ? 0
          : this.edu == 2
          ? 28
          : this.edu == 3
          ? 84
          : this.edu == 4
          ? 91
          : this.edu == 5
          ? 112
          : this.edu == 6
          ? 119
          : this.edu == 7
          ? 126
          : this.edu == 8
          ? 140
          : 0;
      } else if (this.marriage == "single") {
        return this.edu == 1
          ? 0
          : this.edu == 2
          ? 30
          : this.edu == 3
          ? 90
          : this.edu == 4
          ? 98
          : this.edu == 5
          ? 120
          : this.edu == 6
          ? 128
          : this.edu == 7
          ? 135
          : this.edu == 8
          ? 150
          : 0;
      } else {
        return 0;
      }
    },
    //First Language Function
    langTest1Calc: function () {
      //IELTS
      if (this.langTest1.test == 1) {
        this.langTest1.clbL =
          this.langTest1.l >= 8.5
            ? 10
            : this.langTest1.l >= 8
            ? 9
            : this.langTest1.l >= 7.5
            ? 8
            : this.langTest1.l >= 6
            ? 7
            : this.langTest1.l >= 5.5
            ? 6
            : this.langTest1.l >= 5
            ? 5
            : this.langTest1.l >= 4.5
            ? 4
            : 0;
        this.langTest1.clbS =
          this.langTest1.s >= 7.5
            ? 10
            : this.langTest1.s >= 7
            ? 9
            : this.langTest1.s >= 6.5
            ? 8
            : this.langTest1.s >= 6
            ? 7
            : this.langTest1.s >= 5.5
            ? 6
            : this.langTest1.s >= 5
            ? 5
            : this.langTest1.s >= 4
            ? 4
            : 0;
        this.langTest1.clbR =
          this.langTest1.r >= 8
            ? 10
            : this.langTest1.r >= 7
            ? 9
            : this.langTest1.r >= 6.5
            ? 8
            : this.langTest1.r >= 6
            ? 7
            : this.langTest1.r >= 5
            ? 6
            : this.langTest1.r >= 4
            ? 5
            : this.langTest1.r >= 3.5
            ? 4
            : 0;
        this.langTest1.clbW =
          this.langTest1.w >= 7.5
            ? 10
            : this.langTest1.w >= 7
            ? 9
            : this.langTest1.w >= 6.5
            ? 8
            : this.langTest1.w >= 6
            ? 7
            : this.langTest1.w >= 5.5
            ? 6
            : this.langTest1.w >= 5
            ? 5
            : this.langTest1.w >= 4
            ? 4
            : 0;
      } else if (this.langTest1.test == 2) {
        //CELPIP
        this.langTest1.clbL = this.langTest1.l;
        this.langTest1.clbS = this.langTest1.s;
        this.langTest1.clbR = this.langTest1.r;
        this.langTest1.clbW = this.langTest1.w;
      } else if (this.langTest1.test == 3) {
        //TEF Canada
        this.langTest1.clbL =
          this.langTest1.l >= 316
            ? 10
            : this.langTest1.l >= 298
            ? 9
            : this.langTest1.l >= 280
            ? 8
            : this.langTest1.l >= 249
            ? 7
            : this.langTest1.l >= 217
            ? 6
            : this.langTest1.l >= 181
            ? 5
            : this.langTest1.l >= 145
            ? 4
            : 0;
        this.langTest1.clbS =
          this.langTest1.s >= 393
            ? 10
            : this.langTest1.s >= 371
            ? 9
            : this.langTest1.s >= 349
            ? 8
            : this.langTest1.s >= 310
            ? 7
            : this.langTest1.s >= 271
            ? 6
            : this.langTest1.s >= 226
            ? 5
            : this.langTest1.s >= 181
            ? 4
            : 0;
        this.langTest1.clbR =
          this.langTest1.r >= 263
            ? 10
            : this.langTest1.r >= 248
            ? 9
            : this.langTest1.r >= 233
            ? 8
            : this.langTest1.r >= 207
            ? 7
            : this.langTest1.r >= 181
            ? 6
            : this.langTest1.r >= 151
            ? 5
            : this.langTest1.r >= 121
            ? 4
            : 0;
        this.langTest1.clbW =
          this.langTest1.w >= 393
            ? 10
            : this.langTest1.w >= 371
            ? 9
            : this.langTest1.w >= 349
            ? 8
            : this.langTest1.w >= 310
            ? 7
            : this.langTest1.w >= 271
            ? 6
            : this.langTest1.w >= 226
            ? 5
            : this.langTest1.w >= 181
            ? 4
            : 0;
      } else {
        this.langTest1.clbL = 0;
        this.langTest1.clbS = 0;
        this.langTest1.clbR = 0;
        this.langTest1.clbW = 0;
      }

      if (this.marriage == "married") {
        const clbLPoints =
          this.langTest1.clbL >= 10
            ? 32
            : this.langTest1.clbL >= 9
            ? 29
            : this.langTest1.clbL >= 8
            ? 22
            : this.langTest1.clbL >= 7
            ? 16
            : this.langTest1.clbL >= 6
            ? 8
            : this.langTest1.clbL >= 4
            ? 6
            : 0;
        const clbSPoints =
          this.langTest1.clbS >= 10
            ? 32
            : this.langTest1.clbS >= 9
            ? 29
            : this.langTest1.clbS >= 8
            ? 22
            : this.langTest1.clbS >= 7
            ? 16
            : this.langTest1.clbS >= 6
            ? 8
            : this.langTest1.clbS >= 4
            ? 6
            : 0;
        const clbRPoints =
          this.langTest1.clbR >= 10
            ? 32
            : this.langTest1.clbR >= 9
            ? 29
            : this.langTest1.clbR >= 8
            ? 22
            : this.langTest1.clbR >= 7
            ? 16
            : this.langTest1.clbR >= 6
            ? 8
            : this.langTest1.clbR >= 4
            ? 6
            : 0;
        const clbWPoints =
          this.langTest1.clbW >= 10
            ? 32
            : this.langTest1.clbW >= 9
            ? 29
            : this.langTest1.clbW >= 8
            ? 22
            : this.langTest1.clbW >= 7
            ? 16
            : this.langTest1.clbW >= 6
            ? 8
            : this.langTest1.clbW >= 4
            ? 6
            : 0;
        return clbLPoints + clbSPoints + clbRPoints + clbWPoints;
      } else if (this.marriage == "single") {
        const clbLPoints =
          this.langTest1.clbL >= 10
            ? 34
            : this.langTest1.clbL >= 9
            ? 31
            : this.langTest1.clbL >= 8
            ? 23
            : this.langTest1.clbL >= 7
            ? 17
            : this.langTest1.clbL >= 6
            ? 9
            : this.langTest1.clbL >= 4
            ? 6
            : 0;
        const clbSPoints =
          this.langTest1.clbS >= 10
            ? 34
            : this.langTest1.clbS >= 9
            ? 31
            : this.langTest1.clbS >= 8
            ? 23
            : this.langTest1.clbS >= 7
            ? 17
            : this.langTest1.clbS >= 6
            ? 9
            : this.langTest1.clbS >= 4
            ? 6
            : 0;
        const clbRPoints =
          this.langTest1.clbR >= 10
            ? 34
            : this.langTest1.clbR >= 9
            ? 31
            : this.langTest1.clbR >= 8
            ? 23
            : this.langTest1.clbR >= 7
            ? 17
            : this.langTest1.clbR >= 6
            ? 9
            : this.langTest1.clbR >= 4
            ? 6
            : 0;
        const clbWPoints =
          this.langTest1.clbW >= 10
            ? 34
            : this.langTest1.clbW >= 9
            ? 31
            : this.langTest1.clbW >= 8
            ? 23
            : this.langTest1.clbW >= 7
            ? 17
            : this.langTest1.clbW >= 6
            ? 9
            : this.langTest1.clbW >= 4
            ? 6
            : 0;
        return clbLPoints + clbSPoints + clbRPoints + clbWPoints;
      } else {
        return 0;
      }
    },
    langTest2Calc: function () {
      if (this.langTest2.test == 2) {
        this.langTest2.clbL =
          this.langTest2.l >= 8.5
            ? 10
            : this.langTest2.l >= 8
            ? 9
            : this.langTest2.l >= 7.5
            ? 8
            : this.langTest2.l >= 6
            ? 7
            : this.langTest2.l >= 5.5
            ? 6
            : this.langTest2.l >= 5
            ? 5
            : this.langTest2.l >= 4.5
            ? 4
            : 0;
        this.langTest2.clbS =
          this.langTest2.s >= 7.5
            ? 10
            : this.langTest2.s >= 7
            ? 9
            : this.langTest2.s >= 6.5
            ? 8
            : this.langTest2.s >= 6
            ? 7
            : this.langTest2.s >= 5.5
            ? 6
            : this.langTest2.s >= 5
            ? 5
            : this.langTest2.s >= 4
            ? 4
            : 0;
        this.langTest2.clbR =
          this.langTest2.r >= 8
            ? 10
            : this.langTest2.r >= 7
            ? 9
            : this.langTest2.r >= 6.5
            ? 8
            : this.langTest2.r >= 6
            ? 7
            : this.langTest2.r >= 5
            ? 6
            : this.langTest2.r >= 4
            ? 5
            : this.langTest2.r >= 3.5
            ? 4
            : 0;
        this.langTest2.clbW =
          this.langTest2.w >= 7.5
            ? 10
            : this.langTest2.w >= 7
            ? 9
            : this.langTest2.w >= 6.5
            ? 8
            : this.langTest2.w >= 6
            ? 7
            : this.langTest2.w >= 5.5
            ? 6
            : this.langTest2.w >= 5
            ? 5
            : this.langTest2.w >= 4
            ? 4
            : 0;
      } else if (this.langTest2.test == 3) {
        this.langTest2.clbL = this.langTest2.l;
        this.langTest2.clbS = this.langTest2.s;
        this.langTest2.clbR = this.langTest2.r;
        this.langTest2.clbW = this.langTest2.w;
      } else if (this.langTest2.test == 4) {
        this.langTest2.clbL =
          this.langTest2.l >= 316
            ? 10
            : this.langTest2.l >= 298
            ? 9
            : this.langTest2.l >= 280
            ? 8
            : this.langTest2.l >= 249
            ? 7
            : this.langTest2.l >= 217
            ? 6
            : this.langTest2.l >= 181
            ? 5
            : this.langTest2.l >= 145
            ? 4
            : 0;
        this.langTest2.clbS =
          this.langTest2.s >= 393
            ? 10
            : this.langTest2.s >= 371
            ? 9
            : this.langTest2.s >= 349
            ? 8
            : this.langTest2.s >= 310
            ? 7
            : this.langTest2.s >= 271
            ? 6
            : this.langTest2.s >= 226
            ? 5
            : this.langTest2.s >= 181
            ? 4
            : 0;
        this.langTest2.clbR =
          this.langTest2.r >= 263
            ? 10
            : this.langTest2.r >= 248
            ? 9
            : this.langTest2.r >= 233
            ? 8
            : this.langTest2.r >= 207
            ? 7
            : this.langTest2.r >= 181
            ? 6
            : this.langTest2.r >= 151
            ? 5
            : this.langTest2.r >= 121
            ? 4
            : 0;
        this.langTest2.clbW =
          this.langTest2.w >= 393
            ? 10
            : this.langTest2.w >= 371
            ? 9
            : this.langTest2.w >= 349
            ? 8
            : this.langTest2.w >= 310
            ? 7
            : this.langTest2.w >= 271
            ? 6
            : this.langTest2.w >= 226
            ? 5
            : this.langTest2.w >= 181
            ? 4
            : 0;
      } else {
        this.langTest2.clbL = 0;
        this.langTest2.clbS = 0;
        this.langTest2.clbR = 0;
        this.langTest2.clbW = 0;
      }

      if (this.marriage == "married" || this.marriage == "single") {
        const clbLPoints =
          this.langTest2.clbL >= 9
            ? 6
            : this.langTest2.clbL >= 7
            ? 3
            : this.langTest2.clbL >= 5
            ? 1
            : 0;
        const clbSPoints =
          this.langTest2.clbS >= 9
            ? 6
            : this.langTest2.clbS >= 7
            ? 3
            : this.langTest2.clbS >= 5
            ? 1
            : 0;
        const clbRPoints =
          this.langTest2.clbR >= 9
            ? 6
            : this.langTest2.clbR >= 7
            ? 3
            : this.langTest2.clbR >= 5
            ? 1
            : 0;
        const clbWPoints =
          this.langTest2.clbW >= 9
            ? 6
            : this.langTest2.clbW >= 7
            ? 3
            : this.langTest2.clbW >= 5
            ? 1
            : 0;
        return clbLPoints + clbSPoints + clbRPoints + clbWPoints;
      } else {
        return 0;
      }
    },
    langTest3Calc: function () {
      if (this.langTest3.test == 2) {
        this.langTest3.clbL =
          this.langTest3.l >= 8.5
            ? 10
            : this.langTest3.l >= 8
            ? 9
            : this.langTest3.l >= 7.5
            ? 8
            : this.langTest3.l >= 6
            ? 7
            : this.langTest3.l >= 5.5
            ? 6
            : this.langTest3.l >= 5
            ? 5
            : this.langTest3.l >= 4.5
            ? 4
            : 0;
        this.langTest3.clbS =
          this.langTest3.s >= 7.5
            ? 10
            : this.langTest3.s >= 7
            ? 9
            : this.langTest3.s >= 6.5
            ? 8
            : this.langTest3.s >= 6
            ? 7
            : this.langTest3.s >= 5.5
            ? 6
            : this.langTest3.s >= 5
            ? 5
            : this.langTest3.s >= 4
            ? 4
            : 0;
        this.langTest3.clbR =
          this.langTest3.r >= 8
            ? 10
            : this.langTest3.r >= 7.5
            ? 9
            : this.langTest3.r >= 6.5
            ? 8
            : this.langTest3.r >= 6
            ? 7
            : this.langTest3.r >= 5
            ? 6
            : this.langTest3.r >= 4
            ? 5
            : this.langTest3.r >= 3.5
            ? 4
            : 0;
        this.langTest3.clbW =
          this.langTest3.w >= 7.5
            ? 10
            : this.langTest3.w >= 7
            ? 9
            : this.langTest3.w >= 6.5
            ? 8
            : this.langTest3.w >= 6
            ? 7
            : this.langTest3.w >= 5.5
            ? 6
            : this.langTest3.w >= 5
            ? 5
            : this.langTest3.w >= 4
            ? 4
            : 0;
      } else if (this.langTest3.test == 3) {
        this.langTest3.clbL = this.langTest3.l;
        this.langTest3.clbS = this.langTest3.s;
        this.langTest3.clbR = this.langTest3.r;
        this.langTest3.clbW = this.langTest3.w;
      } else if (this.langTest3.test == 4) {
        this.langTest3.clbL =
          this.langTest3.l >= 316
            ? 10
            : this.langTest3.l >= 298
            ? 9
            : this.langTest3.l >= 280
            ? 8
            : this.langTest3.l >= 249
            ? 7
            : this.langTest3.l >= 217
            ? 6
            : this.langTest3.l >= 181
            ? 5
            : this.langTest3.l >= 145
            ? 4
            : 0;
        this.langTest3.clbS =
          this.langTest3.s >= 393
            ? 10
            : this.langTest3.s >= 371
            ? 9
            : this.langTest3.s >= 349
            ? 8
            : this.langTest3.s >= 310
            ? 7
            : this.langTest3.s >= 271
            ? 6
            : this.langTest3.s >= 226
            ? 5
            : this.langTest3.s >= 181
            ? 4
            : 0;
        this.langTest3.clbR =
          this.langTest3.r >= 263
            ? 10
            : this.langTest3.r >= 248
            ? 9
            : this.langTest3.r >= 233
            ? 8
            : this.langTest3.r >= 207
            ? 7
            : this.langTest3.r >= 181
            ? 6
            : this.langTest3.r >= 151
            ? 5
            : this.langTest3.r >= 121
            ? 4
            : 0;
        this.langTest3.clbW =
          this.langTest3.w >= 393
            ? 10
            : this.langTest3.w >= 371
            ? 9
            : this.langTest3.w >= 349
            ? 8
            : this.langTest3.w >= 310
            ? 7
            : this.langTest3.w >= 271
            ? 6
            : this.langTest3.w >= 226
            ? 5
            : this.langTest3.w >= 181
            ? 4
            : 0;
      } else {
        this.langTest3.clbL = 0;
        this.langTest3.clbS = 0;
        this.langTest3.clbR = 0;
        this.langTest3.clbW = 0;
      }

      if (this.marriage == "married") {
        const clbLPoints =
          this.langTest3.clbL >= 9
            ? 5
            : this.langTest3.clbL >= 7
            ? 3
            : this.langTest3.clbL >= 5
            ? 1
            : 0;
        const clbSPoints =
          this.langTest3.clbS >= 9
            ? 5
            : this.langTest3.clbS >= 7
            ? 3
            : this.langTest3.clbS >= 5
            ? 1
            : 0;
        const clbRPoints =
          this.langTest3.clbR >= 9
            ? 5
            : this.langTest3.clbR >= 7
            ? 3
            : this.langTest3.clbR >= 5
            ? 1
            : 0;
        const clbWPoints =
          this.langTest3.clbW >= 9
            ? 5
            : this.langTest3.clbW >= 7
            ? 3
            : this.langTest3.clbW >= 5
            ? 1
            : 0;
        return clbLPoints + clbSPoints + clbRPoints + clbWPoints;
      } else {
        return 0;
      }
    },
    expCalc: function () {
      if (this.marriage == "married") {
        return this.exp >= 5
          ? 70
          : this.exp >= 4
          ? 63
          : this.exp >= 3
          ? 56
          : this.exp >= 2
          ? 46
          : this.exp >= 1
          ? 35
          : 0;
      } else if (this.marriage == "single") {
        return this.exp >= 5
          ? 80
          : this.exp >= 4
          ? 72
          : this.exp >= 3
          ? 64
          : this.exp >= 2
          ? 53
          : this.exp >= 1
          ? 40
          : 0;
      } else {
        return 0;
      }
    },
    eduCalcPartner: function () {
      if (this.marriage == "married") {
        return this.eduPartner == 1
          ? 0
          : this.eduPartner == 2
          ? 2
          : this.eduPartner == 3
          ? 6
          : this.eduPartner == 4
          ? 7
          : this.eduPartner == 5
          ? 8
          : this.eduPartner == 6
          ? 10
          : this.eduPartner == 7
          ? 10
          : this.eduPartner == 8
          ? 10
          : 0;
      } else {
        return 0;
      }
    },
    expCalcPartner: function () {
      if (this.marriage == "married") {
        return this.expPartner >= 5
          ? 10
          : this.expPartner >= 4
          ? 9
          : this.expPartner >= 3
          ? 8
          : this.expPartner >= 2
          ? 7
          : this.expPartner >= 1
          ? 5
          : 0;
      } else {
        return 0;
      }
    },
    eduXexpCalc: function () {
      return this.exp >= 2 && this.edu >= 6
        ? 50
        : this.exp >= 1 && this.exp < 2 && this.edu >= 6
        ? 25
        : this.exp >= 2 && this.edu < 6 && this.edu >= 3
        ? 25
        : this.exp >= 1 && this.exp < 2 && this.edu < 6 && this.edu >= 3
        ? 13
        : 0;
    },
    eduXlangCalc: function () {
      return this.langTest1.clbL >= 9 &&
        this.langTest1.clbS >= 9 &&
        this.langTest1.clbR >= 9 &&
        this.langTest1.clbW >= 9 &&
        this.edu >= 6
        ? 50
        : this.langTest1.clbL >= 9 &&
          this.langTest1.clbS >= 9 &&
          this.langTest1.clbR >= 9 &&
          this.langTest1.clbW >= 9 &&
          this.edu < 6 &&
          this.edu >= 3
        ? 25
        : this.langTest1.clbL >= 7 &&
          this.langTest1.clbS >= 7 &&
          this.langTest1.clbR >= 7 &&
          this.langTest1.clbW >= 7 &&
          this.edu >= 6
        ? 25
        : this.langTest1.clbL >= 7 &&
          this.langTest1.clbS >= 7 &&
          this.langTest1.clbR >= 7 &&
          this.langTest1.clbW >= 7 &&
          this.edu < 6 &&
          this.edu >= 3
        ? 13
        : 0;
    },
    langXexpAbroadCalc: function () {
      return this.langTest1.clbL >= 9 &&
        this.langTest1.clbS >= 9 &&
        this.langTest1.clbR >= 9 &&
        this.langTest1.clbW >= 9 &&
        this.expAbroad >= 3
        ? 50
        : this.langTest1.clbL >= 9 &&
          this.langTest1.clbS >= 9 &&
          this.langTest1.clbR >= 9 &&
          this.langTest1.clbW >= 9 &&
          this.expAbroad < 3 &&
          this.expAbroad >= 1
        ? 25
        : this.langTest1.clbL >= 7 &&
          this.langTest1.clbS >= 7 &&
          this.langTest1.clbR >= 7 &&
          this.langTest1.clbW >= 7 &&
          this.expAbroad >= 3
        ? 25
        : this.langTest1.clbL >= 7 &&
          this.langTest1.clbS >= 7 &&
          this.langTest1.clbR >= 7 &&
          this.langTest1.clbW >= 7 &&
          this.expAbroad < 3 &&
          this.expAbroad >= 1
        ? 13
        : 0;
    },
    expXexpAbroadCalc: function () {
      return this.exp >= 2 && this.expAbroad >= 3
        ? 50
        : this.exp >= 1 && this.exp < 2 && this.expAbroad >= 3
        ? 25
        : this.exp >= 2 && this.expAbroad < 3 && this.expAbroad >= 1
        ? 25
        : this.exp >= 1 &&
          this.exp < 2 &&
          this.expAbroad < 3 &&
          this.expAbroad >= 1
        ? 13
        : 0;
    },
    langXtechCalc: function () {
      if (this.tech == 1) {
        return this.langTest1.clbL >= 7 &&
          this.langTest1.clbS >= 7 &&
          this.langTest1.clbR >= 7 &&
          this.langTest1.clbW >= 7
          ? 50
          : this.langTest1.clbL >= 5 &&
            this.langTest1.clbS >= 5 &&
            this.langTest1.clbR >= 5 &&
            this.langTest1.clbW >= 5
          ? 25
          : 0;
      } else {
        return 0;
      }
    },
    recCalc: function () {
      return this.rec == 1 ? 600 : 0;
    },
    brothersCalc: function () {
      return this.brothers == 1 ? 15 : 0;
    },
    offerCalc: function () {
      return this.offer == 2 ? 200 : this.offer == 3 ? 50 : 0;
    },
    bilingualCalc: function () {
      return this.bilingual == 2 ? 25 : this.bilingual == 3 ? 50 : 0;
    },
    caEduCalc: function () {
      return this.caEdu == 2 ? 15 : this.caEdu == 3 ? 30 : 0;
    },
    adaptPointsTotalCalc: function () {
      let total = this.adaptPoints;
      let eduTotal = this.eduXlangCalc + this.eduXexpCalc;
      let expTotal = this.langXexpAbroadCalc + this.expXexpAbroadCalc;
      if (eduTotal >= 50) {
        eduTotal = 50;
      } else {
        eduTotal = eduTotal;
      }
      if (expTotal >= 50) {
        expTotal = 50;
      } else {
        expTotal = expTotal;
      }
      this.eduTotalPts = eduTotal;
      this.expTotalPts = expTotal;
      total = eduTotal + expTotal + this.langXtechCalc;
      // this.eduXlangCalc +
      // this.eduXexpCalc +
      // this.langXexpAbroadCalc +
      // this.expXexpAbroadCalc +
      if (total >= 100) {
        return (this.adaptPoints = 100);
      } else {
        return (this.adaptPoints = total);
      }
    },
    subtotal: function () {
      return (
        this.ageCalc +
        this.eduCalc +
        this.langTest1Calc +
        this.langTest2Calc +
        this.expCalc +
        this.eduCalcPartner +
        this.langTest3Calc +
        this.expCalcPartner +
        this.brothersCalc +
        this.offerCalc +
        this.bilingualCalc +
        this.caEduCalc +
        this.recCalc +
        this.adaptPointsTotalCalc
      );
    },
  },
};
</script>

<style lang="scss">
#eeForm {
  background-color: #efefef;

  .wrapper {
    padding: 100px 0;
  }
  .ant-card-body {
    padding-top: 0;
  }
  .pointsCounter {
    background-color: $navy;
    padding: 15px 0;
    margin-left: -24px;
    margin-right: -24px;
    margin-bottom: 30px;
    h2,
    h3 {
      color: white;
      margin: 0;
      text-align: center;
      font-weight: 400;
    }
    strong {
      color: #34ff48;
    }
  }

  .section {
    margin-bottom: 40px;

    h3 {
      margin-bottom: 20px;
    }

    .box {
      border-top: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      display: flex;

      &.last {
        border-bottom: 1px solid #efefef;
      }

      .label {
        border-right: 1px solid #efefef;
        padding: 20px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 150px;
        text-align: center;
      }

      .question {
        padding: 20px 30px;
        flex-grow: 1;
        display: flex;
        align-items: center;

        .ant-radio-wrapper {
          margin-right: 30px;
        }

        &.vertical-radio {
          .ant-radio-wrapper {
            display: block;
          }
        }

        &.lang,
        &.exp {
          flex-direction: column;

          & > div {
            width: 100%;

            .ant-input-number {
              margin-right: 30px;
              margin-left: 10px;
            }

            &.input {
              margin-top: 30px;
            }
          }
        }
      }

      .result {
        margin-left: auto;
        padding: 20px 30px;
        width: 100px;
        border-left: 1px solid #efefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
@media all and (max-width: 1000px) {
  #eeForm {
    .ant-affix {
      top: 80px !important;
    }
    .pointsCounter {
      h2,
      h3 {
        font-size: 14px;
      }
    }
    .wrapper {
      width: 98vw;
      padding: 30px 0;
    }
    .section {
      .box {
        flex-direction: column;
        .label {
          border-right: none;
          border-bottom: 1px solid #efefef;
          width: 100%;
          justify-content: flex-start;
          padding: 10px 20px;
        }
        .question {
          .ant-radio-wrapper {
            margin-right: 0px;
          }
          label {
            margin-bottom: 5px;
          }
        }
        .result {
          width: 100%;
          border-left: none;
          border-top: 1px solid #efefef;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.combo-box {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "box1 result"
    "box2 result";
  margin-bottom: 15px;
  .box1 {
    grid-area: box1;
  }
  .box2 {
    grid-area: box2;
  }
  .result {
    grid-area: result;
    margin-left: auto;
    padding: 20px 30px;
    width: 100px;
    border: 1px solid #efefef;
    border-left: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.recent-scores {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  border: 1px solid $navy;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 24px;
  .first {
    font-weight: bold;
    color: $navy;
    .mark {
      text-decoration: underline;
    }
  }
}
@media all and (max-width: 1000px) {
  .combo-box {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto;
    gap: 0px 0px;
    grid-template-areas:
      "box1"
      "box2"
      "result";
    .result {
      margin-left: 0;
      align-items: flex-start;
      width: 100%;
      border-top: none;
      border-left: 1px solid #efefef;
    }
  }
}
@media all and (max-width: $sm) {
  .recent-scores {
    grid-template-columns: 1fr;
  }
}
</style>
