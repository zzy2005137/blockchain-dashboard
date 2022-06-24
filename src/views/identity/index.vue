<template>
  <div class="app-container">
    <!-- 设备信息表 -->
    <h2 class="header">设备信息表</h2>
    <el-table
      v-loading="listLoading"
      :data="equipments"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      class="equipments-table shadow"
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>

      <el-table-column label="工位编号" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row["工位编号"] }}
        </template>
      </el-table-column>
      <el-table-column label="设备型号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row["设备型号"] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联盟ID" align="center">
        <template slot-scope="scope">
          {{ scope.row["身份ID"] }}
        </template>
      </el-table-column>
      <el-table-column label="选项" width="220" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="small"
            @click="showKey(scope.row['公钥'])"
            >查看公钥</el-button
          >
          <el-button type="primary" size="small" @click="toDetail(scope.$index)"
            >设备详情</el-button
          >
        </template>
      </el-table-column>
      <!-- <el-table-column label="详情" width="110" align="center">
        <template>
          <el-button type="primary" size="small">详情</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <!-- END 设备信息表 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      equipments: (state) => state.identity.identities,
    }),
  },
  methods: {
    showKey(key) {
      alert(key);
    },
    filter(key) {},
    toDetail(index) {
      this.$router.push({ path: "/identity/detail/" + index });
    },
  },
};
</script>

<style scoped></style>
