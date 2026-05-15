import Vue from "vue";
import message from "ant-design-vue/lib/message";
import notification from "ant-design-vue/lib/notification";

import Affix from "ant-design-vue/lib/affix";
import BackTop from "ant-design-vue/lib/back-top";
import Breadcrumb from "ant-design-vue/lib/breadcrumb";
import Button from "ant-design-vue/lib/button";
import Card from "ant-design-vue/lib/card";
import Carousel from "ant-design-vue/lib/carousel";
import Checkbox from "ant-design-vue/lib/checkbox";
import Col from "ant-design-vue/lib/col";
import Collapse from "ant-design-vue/lib/collapse";
import DatePicker from "ant-design-vue/lib/date-picker";
import Form from "ant-design-vue/lib/form";
import Icon from "ant-design-vue/lib/icon";
import Input from "ant-design-vue/lib/input";
import InputNumber from "ant-design-vue/lib/input-number";
import Pagination from "ant-design-vue/lib/pagination";
import Radio from "ant-design-vue/lib/radio";
import Row from "ant-design-vue/lib/row";
import Select from "ant-design-vue/lib/select";
import Table from "ant-design-vue/lib/table";
import Tabs from "ant-design-vue/lib/tabs";
import Timeline from "ant-design-vue/lib/timeline";
import Upload from "ant-design-vue/lib/upload";

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;

const components = [
  Affix,
  BackTop,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Pagination,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Timeline,
  Upload,
];

components.forEach((c) => Vue.use(c));
