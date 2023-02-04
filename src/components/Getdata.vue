<template>
  <div>结果:</div>
  <table>
    <tr>
      <th>name</th>
      <th>email</th>
      <th>time</th>
      <th>url</th>
    </tr>
    <template v-for="(item) in result.data.placeholder">
      <tr :style="{ 'background': item.color }">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </template>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import '../api/api'
import axios from 'axios'
export default defineComponent({
  setup() {
    let result: any = ref();
    async function getData() {
      result.value = await axios.get('http://abc:3030/api/test')
        .then(res => res)
        .catch(err => err)
    }
    getData()
    return {
      result
    }
  }
})
</script>

<style scoped lang="scss">
table {
  width: 100%;
  td {
    padding: 5px 10px;
    cursor: default;
    &:hover {
      background-color: rgba($color: #fff, $alpha: 0.3);
    }
  }
}
</style>