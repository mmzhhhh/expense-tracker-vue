import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transaction", {
  state: () => ({
    isTransactionFormVisible: false,
    allTransactions: [],
  }),
  actions: {
    showForm() {
      this.isTransactionFormVisible = true;
    },
    hideForm() {
      this.isTransactionFormVisible = false;
    },
    addTransaction(formData) {
      this.allTransactions.push(formData);
    },
  },
  getters:{
    totalIncome(state){
        return state.allTransactions.filter(transaction=>transaction.type==="income").reduce((sum,transaction)=>sum+parseFloat(transaction.amount),0);
    },
    totalExpense(state){
        return state.allTransactions.filter(transaction=>transaction.type==="expense").reduce((sum,transaction)=>sum+parseFloat(transaction.amount),0);
    },
    balance(){
        return this.totalIncome-this.totalExpense;
    }
  }
});
