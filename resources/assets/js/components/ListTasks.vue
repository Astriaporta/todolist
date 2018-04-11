<template>
  <div id="liste" class="ui container" v-bind:style="{ 'margin-left': computedMarginLeft }">
    <task/>
  </div>
</template>

<script>
  import Task from './Task.vue'

  export default {
    name: 'ListTask',
    data() {
      return {
        marginLeft: '10%',
        isImportant: "!important",
        tasksList: this.dataList
      };
    },
    template: '<task/>',
    computed: {
      computedMarginLeft: {
        get: function () {
          return this.marginLeft + this.isImportant;
        },
        set: function (nw) {
          this.marginLeft = nw + this.isImportant;
        }
      }
    },
    components: {
      Task
    }
  }

</script>

<style>
  #liste {
    transition: margin-left .5s;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #444;
  }
</style>