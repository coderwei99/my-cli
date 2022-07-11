<template>
  <div>hello</div>
  <div>my cli</div>
  <div>
    <button @click="btnClick">111</button>
    <router-link to="/home">home</router-link>
  </div>
  <div>
    <router-link to="/about">about</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnClick = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped></style>
