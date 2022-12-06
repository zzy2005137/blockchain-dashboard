<template>
  <div class="app-container">
    <!-- 任务图 -->
    <el-row>
      <el-col :span="10"
        ><img src="@/assets/img/engine.webp" alt="" id="img-main-task"
      /></el-col>
      <el-col :span="14">
        <el-descriptions
          class="margin-top"
          title="制造任务描述"
          :column="2"
          size=""
          border
        >
          <el-descriptions-item>
            <template slot="label"> 任务名称 </template>
            某航空发动机
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 关键零件数目 </template>
            6
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 制造商数目 </template>
            6
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 预计完工时间 </template>
            2011-10-08
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 验收标准 </template>
            点击查看
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 工艺路线</template>
            <el-tag size="small">点击查看</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 备注信息</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis rem officia eos porro quaerat doloremque quae asd
            Perferendis rem officia eos porro quaerat doloremque quae asd
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <br />
    <!-- 步骤条 -->
    <el-steps :active="2" finish-status="success" simple>
      <el-step title="制造任务创建"></el-step>
      <el-step title="子任务订单确认"></el-step>
      <el-step title="子任务执行"></el-step>
      <el-step title="制造任务完成"></el-step>
    </el-steps>
    <br />
    <!-- 搜索框 -->
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        placeholder="任务名称"
        style="width: 200px"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.importance"
        placeholder="ID"
        clearable
        style="width: 90px"
        class="filter-item"
      >
        <el-option
          v-for="item in importanceOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select
        v-model="listQuery.type"
        placeholder="制造商"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option
          v-for="item in calendarTypeOptions"
          :key="item.key"
          :label="item.display_name + '(' + item.key + ')'"
          :value="item.key"
        />
      </el-select>
      <el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        搜索
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        添加
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        导出
      </el-button>
    </div>
    <br />
    <!-- 任务列表 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="70">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="子任务名称">
        <template slot-scope="scope">
          {{ scope.row.author }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID">
        e10adc3949ba59abbe56e057f20f883e
      </el-table-column>
      <el-table-column label="制造商" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="状态"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{
            scope.row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="更新时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template>
          <el-button
            size="mini"
            type="primary"
            @click="handleModifyStatus(row, 'detail')"
          >
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

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
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "状态",
      },
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
  width: 88%;
}
</style>
