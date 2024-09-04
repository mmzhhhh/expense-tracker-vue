<template>
  <div style="width: 100%">
    <el-row align="middle" justify="space-between">
        <el-col :span="12">
            <h1>Income</h1>
        </el-col>
        <el-col :span="12">
            <h1>Expense</h1>
        </el-col>
    </el-row>
    <el-row  justify="space-between">
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in incomeDatas"
            :key="index"
            :color="'#213ebf'"
            style="font-size: larger"
          >
            <el-card shadow="always" style="background-color: #bddeff">
              <el-row>
                <el-col :span="12" style="">
                  {{ item.description }}
                </el-col>
                <el-col :span="12"> {{ item.amount }}$ </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in expenseDatas"
            :key="index"
            :color="'#FD5E53'"
            style="font-size: larger"
          >
            <el-card shadow="always" style="background-color: #ff9b9b">
              <el-row>
                <el-col :span="12" style="">
                  {{ item.description }}
                </el-col>
                <el-col :span="12"> {{ item.amount }}$ </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useTransactionStore } from "@/stores/transactionStore";
import { computed } from "vue";
const transactionStore = useTransactionStore();
const incomeDatas = computed(() => {
  return transactionStore.allTransactions.filter(
    (item) => item.type === "income"
  );
});
const expenseDatas = computed(() => {
  return transactionStore.allTransactions.filter(
    (item) => item.type === "expense"
  );
});
console.log(incomeDatas);
console.log(expenseDatas);
</script>

<style lang="css" scoped></style>
