<template>
  <div class="tree">
    <ul>
      <li v-for="(item,index) in treeCharts" :key="index">
        <a href="">{{ item.title }}</a>
        <TreeChild v-if="item.subChild" :treeChild="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TreeChild from "../components/TreeChild.vue";

export default {
  name      : "Tree",
  components: {TreeChild},
  data() {
    return {
      treeCharts: [
        {
          title   : 'child',
          subChild: [
            {
              title   : 'child-1',
              subChild: [
                {
                  title   : 'child-2',
                  subChild: [
                    {
                      title: 'child-3',
                    },
                    {
                      title: 'child-3',
                    },
                  ]
                },
                {
                  title   : 'child-2',
                  subChild: [
                    {
                      title: 'child-3',
                    },
                    {
                      title: 'child-3',
                    },
                  ]
                },
              ]
            },
            {title: 'child-1'},
            {title: 'child-1',
              subChild: [
                {
                  title   : 'child-2',
                  subChild: [
                    {
                      title: 'child-3',
                    },
                    {
                      title: 'child-3',
                    },
                  ]
                },
                {
                  title   : 'child-2',
                  subChild: [
                    {
                      title: 'child-3',
                    },
                    {
                      title: 'child-3',
                    },
                  ]
                },
              ]
            }

          ]
        }
      ]
    }
  },
}
</script>

<style>
.tree {
  max-width: 660px;
  height: auto;
  text-align: center;
  overflow-x: auto;
}

.tree ul {
  padding         : 20px 0 0;
  list-style      : none;
  position        : relative;
  transition      : all .5s;
  display         : flex;
}

.tree li {
  display         : table-cell;
  text-align      : center;
  list-style-type : none;
  position        : relative;
  padding         : 10px;
  transition      : .5s;
  border-bottom   : none;
}

.tree li:before, .tree li:after {
  content    : "";
  position   : absolute;
  top        : 0;
  right      : 50%;
  border-top : 1px solid #ccc;
  width      : 51%;
  height     : 10px;
}

.tree li:after {
  right       : auto;
  left        : 50%;
  border-left : 1px solid #ccc
}

.tree li:only-child:after, .tree li:only-child:before {
  display : none;
}

.tree li:only-child {
  padding-top : 0
}

.tree li:first-child:before, .tree li:last-child:after {
  border : 0 none;
}

.tree li:last-child:before {
  border-right  : 1px solid #ccc;
  border-radius : 0 5px 0 0;
}

.tree li:first-child:after {
  border-radius : 5px 0 0 0;
}

.tree ul ul:before {
  content     : "";
  position    : absolute;
  top         : 0;
  left        : 50%;
  border-left : 1px solid #ccc;
  width       : 0;
  height      : 20px;
}

.tree a {
  border               : 1px solid #ccc;
  padding              : 10px;
  display              : inline-grid;
  border-radius        : 5px;
  text-decoration-line : none;
  transition           : all .5s;
  text-transform       : uppercase;
}
</style>