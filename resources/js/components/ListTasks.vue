<template>
  <div id="liste">
    <task v-for="task in tasksList" :key="task.id" :task="task" @reload="getTasks()"></task>
  </div>
</template>

<script>
  import Task from './Task.vue'

  export default {
    name: 'ListTask',
    components: { Task },
    data() {
      return {
        marginLeft: '10%',
        isImportant: "!important",
        tasksList: [],
        blackTheme: false
      };
    },
    mounted() {
      this.getTasks();
    },
    methods: {
      getTasks() {
        axios.get('/task/list').then(response => {
          this.tasksList = response.data;
          //console.log(response.data);
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
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
