<template>
  <ul>
    <li v-for="(item, index) in renderData" :key="index">{{ item.id }}</li>
  </ul>
</template>

<script lang="ts">
import { AnyRecord } from 'dns'
import { defineComponent } from 'vue'
import data from '../mock/index'
export default defineComponent({
  setup() {
    // console.log(data)
    const renderData = (data as any).list
    return {
      renderData
    }
  }
})
</script>

<style scoped>
</style>