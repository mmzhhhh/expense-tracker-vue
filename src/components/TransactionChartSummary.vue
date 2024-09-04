<template>
  <ApexCharts type="pie" width="100%" height="100%" :options="options" :series="[income,expense]"/>
</template>

<script setup>
import { computed } from "vue";
import ApexCharts from "vue3-apexcharts";
import { useTransactionStore } from "@/stores/transactionStore";
const transactionStore=useTransactionStore();
const income=computed(()=>transactionStore.totalIncome);
const expense=computed(()=>transactionStore.totalExpense);
const options = {
  labels: ["Income", "Expense"],
  colors: ["#213ebf", "#FD5E53"],
  chart: {
    width: "100px",
    height:"100px"
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotsOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "15px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};
</script>

<style lang="css" scoped></style>
