<!--
 * @Description: 商品菜单
-->
<template>
  <SideBar :groups='groups'></SideBar>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  components: {
    SideBar,
  },

  data() {
    return {
      groups: [
        {
          label: "模拟商品",
          list: [
            {
              name: "全部商品",
              path: "/mall/goods/goods-manager",
            },
            {
              name: "全部分类",
              path: "/mall/goods/group-manager",
            },
          ],
        },
      ],
    };
  },
};
</script>