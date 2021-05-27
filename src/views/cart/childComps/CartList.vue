<template>
  <div class="cart-list">
    <scroll class="content">
      <li v-for="(item, index) in cartList" :key="index">{{ item }}</li>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    scroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.content {
  height: calc(100% - 44px);
}
</style>