<template>
  <div class="TreeChart">
    <ul>
      <li
          v-for="(item ,index) in navigation"
          :key="'item'+index"

      >
        <div class="a"  @click="item.open = !item.open">
<!--          <i v-if="item.subNav" class="fas" :class="{' fa-caret-right' : !item.open, 'fa-caret-down' : item.open}"></i>-->
          <svg width="15" v-if="item.subNav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path v-if="item.open" d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm168-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H168z"/>
            <path v-else d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 112c13.3 0 24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64c0 13.3 10.7 24 24 24z"/>
          </svg>
          <i v-else></i>
          {{ item.title }}</div>
        <Dropdown v-if="item.subNav" :list="item" />
      </li>
    </ul>

  </div>
</template>

<script src="./_TreeChart.js" lang="js"></script>
<style>
.TreeChart {
  width      : 280px;
  min-height : 100vh;
  background : #bbbbbb;
}

ul {
  list-style : none;
  padding    : 0;
  margin     : 0;
}

li {
  border-bottom : 1px solid #ddd;
}

i {
  padding    : 10px;
  transition : .5s;
  width      : 25px;
  display    : inline-block;

}

.a {
  padding        : 12px 0;
  cursor         : pointer;
  color          : #000;
  text-transform : uppercase;

}


</style>
