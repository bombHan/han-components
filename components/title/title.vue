<!-- title组件 -->
<template>
  <div class="zz-title">
    <div style="display: flex; align-items: center">
      <div class="block" :style="`height: ${titleSize}px`"></div>
      <div class="title" :style="`font-size: ${titleSize}px;${titleStyle}`">
        {{ title }}
      </div>
    </div>
    <div class="subTitle" :style="`${subTitleStyle}`">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "zz-title",
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    subTitle: {
      type: String,
      default: "",
      required: false,
    },
    titleSize: {
      type: () => {
        return String | Number;
      },
      default: 16,
      required: false,
    },
    titleStyle: {
      type: String,
      default: "",
      required: false,
    },
    subTitleStyle: {
      type: String,
      default: "",
      required: false,
    },
  },
  data() {
    return {};
  },
  // 方法集合
  methods: {},
  // 计算属性
  computed: {},
  // 侦听
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>

<style lang="scss" scoped>
.zz-title {
  display: flex;
  align-items: flex-end;
  .block {
    width: 3px;
    height: 16px;
    background: #1890ff;
    margin-right: 7px;
  }
  .title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0;
    font-weight: bold;
  }
  .subTitle {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.35);
  }
}
</style>
