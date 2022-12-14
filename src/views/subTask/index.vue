<template>
  <div class="app-container">
    <!-- 任务图 -->
    <el-row>
      <el-col :span="10">
        <img src="@/assets/img/gear.png" alt="" id="img-main-task" />

        <predictChart></predictChart>
      </el-col>
      <el-col :span="14">
        <el-descriptions title="子任务描述" :column="2" size="medium" border>
          <el-descriptions-item>
            <template slot="label"> 任务名称 </template>
            某航空发动机齿轮
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 制造商名称</template>
            某齿轮加工公司
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 当前状态 </template>
            正在加工
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 库存数目 </template>
            66
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 预计完工时间 </template>
            2022-10-08
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 当前进度 </template>
            <el-tag type="success">预计正常完成</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 工艺路线</template>
            <el-button type="primary" size="small" palin>点击查看</el-button>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 备注信息</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </el-descriptions-item>
        </el-descriptions>
        <div v-for="txData in txDatas" :key="txData.id">
          <transaction :txData="txData"></transaction>
        </div>
      </el-col>
    </el-row>

    <br />

    <br />
  </div>
</template>

<script>
import { getList } from "@/api/table";
import Transaction from "./transaction.vue";
import predictChart from "./predictChart.vue";
import txDatas from "./txDatas.json";

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
  components: {
    Transaction,
    predictChart,
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
      txDatas,
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
      });
    },
  },
};
</script>

<style scoped>
#img-main-task {
  width: 78%;
  margin-left: 2rem;
}
</style>
