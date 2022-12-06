<template>
  <div class="tx-body">
    <h5 class="tx-header">进度数据更新交易细节</h5>
    <el-descriptions title="" :column="1" size="mini" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          交易ID
        </template>
        cf37e19e18cc1b8aacae5732637e29f5e7bebbb7e231e1cf0026d4f59b6f13b9
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

        2022-05-31 10:18:53.762868598 +0800 CST
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
        <el-tag size="medium">4</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          区块哈希
        </template>
        b9e3dd247a490c1db3dac6f28ca3dae4fb55be71969ae7720ae19bc3c24227da
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          数据哈希
        </template>
        6b449c6dc959787702f23785ca1c3c01770ccd7d7e31b9a74f1aa5c729de137b
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {};
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
