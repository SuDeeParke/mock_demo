<script setup lang="ts">
import Mock from './components/Mock.vue';
import Getdata from './components/Getdata.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Mock></Mock>
  <Getdata></Getdata>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
