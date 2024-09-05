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
      const transactions = { ...formData, id: Date.now() };
      this.allTransactions.push(transactions);
      localStorage.setItem(
        "transactions",
        JSON.stringify(this.allTransactions)
      );
    },
    loadTransactions() {
      const storedTransactions = localStorage.getItem("transactions");
      if (storedTransactions) {
        this.allTransactions = JSON.parse(storedTransactions);
      }
    },
    deleteTransaction(getCurrent) {
      this.allTransactions = this.allTransactions.filter(
        (transaction) => transaction.id !== getCurrent
      );
      localStorage.setItem(
        "transactions",
        JSON.stringify(this.allTransactions)
      );
    },
  },
  getters: {
    totalIncome(state) {
      return state.allTransactions
        .filter((transaction) => transaction.type === "income")
        .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
    },
    totalExpense(state) {
      return state.allTransactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
    },
    balance() {
      return this.totalIncome - this.totalExpense;
    },
  },
});
