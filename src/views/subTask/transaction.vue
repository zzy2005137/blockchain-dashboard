<template>
  <div class="tx-body">
    <h5 class="tx-header">进度数据更新交易细节</h5>
    <el-descriptions title="" :column="1" size="mini" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          交易ID
        </template>
        {{ txData.id }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          交易确认码
        </template>
        VALID
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          时间戳
        </template>

        {{ txData.timestamp }}
      </el-descriptions-item>
      <!-- <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          链码名称
        </template>
        blockchain-manufacture
      </el-descriptions-item> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          所在区块编号
        </template>
        <el-tag size="medium">{{ txData.blockNumber }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          区块哈希
        </template>
        {{ txData.blockhash }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          数据哈希
        </template>
        {{ txData.datahash }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  props: ["txData"],
};
</script>
<style scoped>
.tx-header {
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  text-align: center;
  font-weight: 400;
  padding: 5px;
  letter-spacing: 3px;
  background-color: #004d6b;
}

.tx-body {
  margin-top: 2rem;
}
</style>
