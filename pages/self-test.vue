<template>
  <div>
    <div class="wrapper">
      <h1>自测系统</h1>
      <div>
        <label for="">age</label>
        <a-input-number v-model="age" :min="1" :max="100" />
      </div>
      <div>
        <label for="">edu</label>
        <a-select v-model="edu" style="width: 200px">
          <a-select-option value="highSchool"> 高中及以下 </a-select-option>
          <a-select-option value="college"> 大专 </a-select-option>
          <a-select-option value="bachelor"> 本科 </a-select-option>
          <a-select-option value="master"> 硕士 </a-select-option>
          <a-select-option value="doctor"> 博士 </a-select-option>
        </a-select>
        {{ edu }}
      </div>
      <div>
        <label for="">eng</label>
        <a-select v-model="firstLang" style="width: 200px">
          <a-select-option value="none"> 完全不会 </a-select-option>
          <a-select-option value="lvl34"> 雅思3-4分 </a-select-option>
          <a-select-option value="lvl5"> 雅思5分 </a-select-option>
          <a-select-option value="lvl6"> 雅思6分 </a-select-option>
          <a-select-option value="lvl7"> 雅思7分以上 </a-select-option>
        </a-select>
        {{ firstLang }}
      </div>
      <div>
        <label for="">job</label>
        <a-select v-model="job" style="width: 300px">
          <a-select-option value="job1">
            计算机／互联网／通信／电子
          </a-select-option>
          <a-select-option value="job2">销售／客服／技术支持</a-select-option>
          <a-select-option value="job3">会计／金融／银行／保险</a-select-option>
          <a-select-option value="job4">生产／运营／采购／物料</a-select-option>
          <a-select-option value="job5">生物／制药／科研</a-select-option>
          <a-select-option value="job6">医疗／护理</a-select-option>
          <a-select-option value="job7">市场／广告／影视媒体</a-select-option>
          <a-select-option value="job8"
            >文学艺术／设计师／体育从业者</a-select-option
          >
          <a-select-option value="job9">建筑／工程／房地产 </a-select-option>
          <a-select-option value="job10">人力资源／行政／出纳</a-select-option>
          <a-select-option value="job11"
            >咨询／法律／教育／科研</a-select-option
          >
          <a-select-option value="job12">农业／服务业 </a-select-option>
          <a-select-option value="job13">公务员／学生／其他</a-select-option>
        </a-select>
        {{ job }}
      </div>
      <div>
        <label for="">title</label>
        <a-select v-model="title" style="width: 300px">
          <a-select-option value="nonManager"> 非管理 </a-select-option>
          <a-select-option value="manager"> 管理 </a-select-option>
          <a-select-option value="selfEmployment"> 自雇 </a-select-option>
          <a-select-option value="other"> 其他 </a-select-option>
        </a-select>
        {{ title }}
      </div>
      <div>
        <label for="">region</label>
        <a-select v-model="region" style="width: 300px">
          <a-select-option value="ontario">安大略省</a-select-option>
          <a-select-option value="manitoba">曼尼托巴省</a-select-option>
          <a-select-option value="pei">爱德华王子岛</a-select-option>
          <a-select-option value="newfoundland">纽芬兰省</a-select-option>
          <a-select-option value="bc">BC省</a-select-option>
          <a-select-option value="alberta">阿尔伯塔省</a-select-option>
          <a-select-option value="saskatchewan">萨斯喀彻温省</a-select-option>
          <a-select-option value="newBrunswick">新不伦瑞克省</a-select-option>
          <a-select-option value="novaScotia">新斯科舍省</a-select-option>
          <a-select-option value="quebec">魁北克省</a-select-option>
        </a-select>
        {{ region }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      edu: "",
      firstLang: "",
      job: "",
      title: "",
      region: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
