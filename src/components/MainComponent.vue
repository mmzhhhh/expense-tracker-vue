<template>
  <el-container
    direction="vertical"
    style="text-align: center; padding-left: 20px; padding-right: 20px"
  >
    <el-header>
      <el-row align="middle" justify="space-between">
        <el-col :span="12">
          <h3>Expense Tracker</h3>
        </el-col>
        <el-col :span="12">
          <el-button @click="showTransactionForm" type="primary"
            >Add New Transaction</el-button
          >
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <SummaryComponent />
    </el-main>
    <el-footer>
      <el-row align="middle" justify="space-between">
        <ExpenseViewComponent/>
      </el-row>
    </el-footer>
  </el-container>
  <AddTranscationComponent />
</template>

<script setup>
import AddTranscationComponent from "./AddTranscationComponent.vue";
import ExpenseViewComponent from "./ExpenseViewComponent.vue";
import SummaryComponent from "./SummaryComponent.vue";
import { useTransactionStore } from "@/stores/transactionStore";
const transactionStore = useTransactionStore();
const showTransactionForm = () => {
  transactionStore.showForm();
};
</script>

<style lang="css" scoped>
</style>
