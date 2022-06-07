<template>
  <div class="app-container">
    <!-- 当前单位信息 -->
    <el-descriptions
      class="margin-top"
      title="机构信息"
      :column="2"
      :size="size"
      border
    >
      <el-descriptions-item
        v-for="(value, key) in org"
        :key="key"
        class="text item"
      >
        <template slot="label"> {{ key }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- END 当前单位信息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      org: {
        当前机构: "南京检测中心",
        节点数: "1",
        证书信息:
          "baca0e6b14193e2e6ee7516947613eb161937e4c58ed44f513760bba484038b7_sk",
      },
    };
  },
};
</script>

<style scoped></style>
