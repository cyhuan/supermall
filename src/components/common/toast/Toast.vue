<template>
  <div class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: pink;
}
</style>