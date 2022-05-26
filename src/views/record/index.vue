<template>
  <div class="app-container">
    <!-- 步骤条 -->
    <el-steps :active="4" finish-status="success" simple>
      <el-step title="样品信息录入"></el-step>
      <el-step title="样品接收"></el-step>
      <el-step title="检测进行中"></el-step>
      <el-step title="检测报告上传"></el-step>
    </el-steps>

    <el-row>
      <el-col> </el-col>
    </el-row>
    <!-- END 步骤条 -->

    <!-- 样品信息 -->
    <el-descriptions
      class="margin-top"
      title="样品信息"
      :column="2"
      :size="size"
      border
    >
      <el-descriptions-item
        v-for="(value, key) in sampleInfo"
        :key="key"
        class="text item"
      >
        <template slot="label"> {{ infoKeyMap[key] }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- END 样品信息 -->

    <!-- 检测仪器列表 -->
    <h2 class="header">检测项目结果列表</h2>
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

      <el-table-column label="试验项目">
        <template slot-scope="scope">
          {{ scope.row.task }}
        </template>
      </el-table-column>
      <el-table-column label="仪器名称与型号">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="编号" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="有效期" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.validity }}
        </template>
      </el-table-column>

      <el-table-column label="准确级" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.accuracy }}
        </template>
      </el-table-column>
      <el-table-column label="检测结果" width="110" align="center">
        <template>
          <el-tag type="success">通过</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column label="详情" width="110" align="center">
        <template>
          <el-button type="primary" size="small">详情</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <!-- END 检测仪器列表 -->

    <el-row type="flex" justify="center">
      <el-button type="primary" size="small" class="btn margin-top"
        >下载完整报告</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { getList } from "@/api/table";
// import { infoKeyMap, equipmentKeyMap } from "./keyMap.js";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      list: null,
      listLoading: true,
      sampleInfo: {
        id: "21C11014",
        type: "低压开关柜",
        arrivedTime: "2021-11-10",
        ratedVotage: "380V",
        ratedCurrent: "2000A",
        frequency: "50Hz",
        poles: "3",
      },
      infoKeyMap: {
        id: "样品编号",
        type: "设备类型",
        arrivedTime: "来样时间",
        ratedVotage: "额定电压",
        ratedCurrent: "额定电流",
        frequency: "频率",
        poles: "极数",
      },

      equipments: [
        {
          task: "介电强度测试",
          name: "低压耐压仪/AN9632M",
          id: "1409963023G",
          validity: "2022.5.30",
          accuracy: "±1.5%",
        },
        {
          task: "介电强度测试",
          name: "程控自动冲击电压试验仪/BC-C",
          id: "07106",
          validity: "2022.7.1",
          accuracy: "±3%",
        },
        {
          task: "电击防护和保护电路有效性",
          name: "直流电阻测试仪/SM-33",
          id: "133425",
          validity: "2022.6.7",
          accuracy: "0.2%±0.2μΩ",
        },
        {
          task: "电气间隙和爬电距离验证",
          name: "电子数显卡尺",
          id: "12071662",
          validity: "2021.12.2",
          accuracy: "0.01mm",
        },
        {
          task: "柜体尺寸、厚度、材质检测",
          name: "手持光谱仪/NITON XL3t 980",
          id: "89926",
          validity: "2022.6.09",
          accuracy: "±0.03%",
        },
      ],
    };
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
        console.log(this.list);
      });
    },
  },
  computed: {},
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.margin-top {
  margin-top: 1rem;
}
.box-card {
  width: 400px;
}

.item {
  padding: 0.4rem;
}

.equipments-table {
  margin-top: 1rem;
}

.header {
  color: #606266;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
