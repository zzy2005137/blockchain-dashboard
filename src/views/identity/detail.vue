<template>
  <div class="app-container">
    <!-- 设备详情 -->
    <el-descriptions
      class="margin-top"
      title="设备详情"
      :column="2"
      :size="size"
      border
    >
      <el-descriptions-item
        v-for="(value, key) in plainInfo"
        :key="key"
        class="text item"
      >
        <template slot="label">
          {{ key }}
        </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- END 详情 -->
    <!-- 可检试验项目 -->
    <el-descriptions
      class="test"
      title="可检试验项目"
      :column="1"
      :size="size"
      border
    >
      <el-descriptions-item
        v-for="(value, key) in equipments[index]['可检试验项目']"
        :key="key"
      >
        <template slot="label" :width="50">
          {{ key }}
        </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- END可检试验项目 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  //   props: ["id"],
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapState({
      equipments: (state) => state.identity.identities,
    }),
    plainInfo() {
      let obj = {};
      let src = this.$store.state.identity.identities[this.index];
      for (let [key, val] of Object.entries(src)) {
        if (key != "可检试验项目" && key != "可检物资类别") {
          //   obj.key = val;
          console.log(key);
          obj[key] = val;
        }
      }
      return obj;
    },
  },
  methods: {
    check() {
      console.log(this.$route.params.id);
    },
  },
  created() {
    if (this.$route.params.id !== ":id") {
      this.index = this.$route.params.id;
    }
  },
};
</script>

<style scoped>
.test {
  margin-top: 1rem;
}
</style>
