<template>
  <div class="summary-main">
    <el-row align="middle" justify="space-between">
      <el-col :span="12">
        <div>
          <h3>Balance is ${{ transactionStore.balance }}</h3>
          <div class="balance-item">
            <h1>${{ transactionStore.totalIncome }}</h1>
            <p>Total Income</p>
          </div>
          <div class="balance-item">
            <h1>${{transactionStore.totalExpense}}</h1>
            <p>Total Expense</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <TransactionChartSummary/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import TransactionChartSummary from './TransactionChartSummary.vue';
import { useTransactionStore } from '@/stores/transactionStore';
const transactionStore=useTransactionStore();
</script>

<style lang="css" scoped>
.summary-main {
  border: 1px solid;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  padding: 24px;
  box-shadow: 5px 5px #000;
}
.balance-item {
  background-color: #DCDCDC;
  border: 1px solid;
  border-radius: 10px;
  border-color: #DCDCDC;
  margin-bottom: 10px;
}

.balance-item h1 {
  font-weight: bolder;
}
</style>
