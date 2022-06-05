<template>
  <ul>
    <li v-for="(item,index) in treeChild.subChild" :key="index"><a href="">{{ item.title}}</a>
      <TreeChild v-if="item.subChild" :treeChild="item" />
    </li>
  </ul>
</template>

<script>
export default {
  name : "TreeChild",
  props: ['treeChild']
}
</script>