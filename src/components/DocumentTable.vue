<template>
  <section class="my-4 print:mb-2">
    <h4
      class="font-harbins mb-6 mt-12 text-center text-base font-extralight uppercase tracking-widest before:mx-auto before:mb-2 before:block before:h-0.5 before:w-4 before:bg-gray-200"
    >
      {{ header }}
    </h4>
    <table class="w-full table-fixed">
      <tbody>
        <tr :key="rowIdx" v-for="(row, rowIdx) in formattedData">
          <td :key="cellIdx" class="text-center" v-for="(cell, cellIdx) in row">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const { tableData } = defineProps({ tableData: Object })
const { data, header } = tableData

const numCols = ref(3)
const numRows = computed(() => Math.ceil(data.length / numCols.value))

const formattedData = computed(() =>
  data.reduce((a, c, i) => {
    a[i % numRows.value] = [...a[i % numRows.value], c]
    return a
  }, new Array(numRows.value).fill([]))
)
</script>
