<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>历史更新记录</span>
    </div>
    <div v-for="data in orderHistory.data" :key="data.TxId" class="text item">
      <p>{{ "是否删除：" + (data.IsDelete === false ? "是" : "否") }}</p>
      <p>{{ "时间戳：" + data.Timestamp }}</p>
      <p>{{ "交易ID：" + data.TxId }}</p>
      <p>{{ "当前状态：" + data.Value.Status }}</p>
      <p>{{ "样品ID：" + data.Value.orderId }}</p>
      <p>{{ "检测方：" + data.Value.owner }}</p>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      orderHistory: {
        code: 200,
        msg: "成功",
        data: [
          {
            IsDelete: "false",
            Timestamp: "2022-05-31 10:18:53.762868598 +0800 CST",
            TxId: "3eb75f6a46bf8bc0ac22bdb665f5f56d0d459d7ca393db6f2afe922022b8a7f4",
            Value: {
              Status: "未开始",
              orderId: "001",
              owner: "d4735e3a265e",
            },
          },
          {
            IsDelete: "false",
            Timestamp: "2022-05-31 10:18:58.23188273 +0800 CST",
            TxId: "f8bc1a09332c6226b471adfc3e5e6cd965ff56a6f4219615180bebe1c7cfc30c",
            Value: {
              Status: "进行中",
              orderId: "001",
              owner: "d4735e3a265e",
            },
          },
          {
            IsDelete: "false",
            Timestamp: "2022-05-31 10:20:09.71990459 +0800 CST",
            TxId: "e58c3b2a77572964c613de53394a49c36f44f8907f05f6fb73ecd49b9f4632ed",
            Value: {
              Status: "交付中",
              orderId: "001",
              owner: "d4735e3a265e",
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
