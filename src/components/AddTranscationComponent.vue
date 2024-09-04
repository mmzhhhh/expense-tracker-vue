<template>
  <el-dialog v-model="transactionStore.isTransactionFormVisible">
    <h1>Add New Transaction</h1>
    <el-form @submit.prevent="handleSubmit" label-width="auto">
      <el-form-item label="Enter Description">
        <el-input
          placeholder="Enter Description"
          v-model="formData.description"
          type="text"
          required
        />
      </el-form-item>
      <el-form-item label="Enter Amount">
        <el-input
          placeholder="Enter Amount"
          v-model="formData.amount"
          type="number"
          required
        />
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="formData.type">
          <el-radio value="income">income</el-radio>
          <el-radio value="expense">expense</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit" type="primary">Add</el-button>
        <el-button @click="handleFormClose">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { useTransactionStore } from "@/stores/transactionStore";
import { reactive } from "vue";
const transactionStore = useTransactionStore();

const formData = reactive({
  description: "",
  amount: null,
  type: "income",
});

const handleSubmit = () => {
  if (formData.description && formData.amount && formData.type) {
    transactionStore.addTransaction({ ...formData });

    formData.description='';
    formData.amount=null;
    formData.type="income";

    transactionStore.hideForm();

    console.log(transactionStore.allTransactions);
    
  }
};

const handleFormClose = () => {
  transactionStore.hideForm();
};
</script>

<style lang="css" scoped></style>
