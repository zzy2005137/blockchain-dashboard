<template>
  <div class="app-container">
    <el-button type="primary">新增角色</el-button>
    <br />
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="角色" width="150">
        <template slot-scope="scope">
          {{ scope.row.role }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属组织" align="center">
        <template slot-scope="scope">
          {{ scope.row.org }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="描述" align="center">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="操作"
        width="400"
      >
        <el-button type="primary" @click="handleEdit(scope)"
          >编辑权限</el-button
        >
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" title="编辑权限">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="role.name" placeholder="Role Name" />
        </el-form-item>
        <el-form-item label="Desc">
          <el-input
            v-model="role.desc"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Role Description"
          />
        </el-form-item>
        <el-form-item label="Menus">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          >
          </el-tree>
        </el-form-item>
      </el-form>
      <div style="text-align: right">
        <el-button type="danger" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmRole">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          role: "admin",
          name: "张三",
          org: "网络化协同制造平台",
          desc: "网络化协同制造平台管理员，可修改用户权限",
        },
        {
          role: "user",
          name: "李四",
          org: "制造企业1",
          desc: "制造企业1用户",
        },
        {
          role: "user",
          name: "王五",
          org: "制造企业2",
          desc: "制造企业2用户",
        },
        {
          role: "visitor",
          name: "赵钱",
          org: "无",
          desc: "visitor",
        },
      ],
      dialogVisible: false,
      role: {
        role: "admin",
        name: "张三",
        org: "网络化协同制造平台",
        desc: "网络化协同制造平台管理员，可修改用户权限",
      },
      data: [
        {
          id: 1,
          label: "子任务页面",
          children: [
            {
              id: 4,
              label: "工艺路线图",
            },
            {
              id: 5,
              label: "加工过程数据",
            },
            {
              id: 6,
              label: "质量验收数据",
            },
            {
              id: 7,
              label: "加工数据上传",
            },
          ],
        },
        {
          id: 2,
          label: "制造任务页面",
          children: [
            {
              id: 8,
              label: "工艺路线图",
            },
            {
              id: 9,
              label: "制造商列表",
            },
          ],
        },
        {
          id: 3,
          label: "权限管理",
          children: [
            {
              id: 8,
              label: "添加用户",
            },
            {
              id: 9,
              label: "编辑权限",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleEdit(scope) {
      //   this.dialogType = "edit";
      this.dialogVisible = true;
      //   this.checkStrictly = true;
      //   this.role = deepClone(scope.row);
      //   this.$nextTick(() => {
      //     const routes = this.generateRoutes(this.role.routes);
      //     this.$refs.tree.setCheckedNodes(this.generateArr(routes));
      //     // set checked state of a node not affects its father and child nodes
      //     this.checkStrictly = false;
      //   });
    },
  },
};
</script>
<style lang=""></style>
