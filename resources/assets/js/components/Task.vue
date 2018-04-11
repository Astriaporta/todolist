<template>
  <div id="task">
    <h1 v-bind:class="['ui', {inverted:blackTheme}, 'header']">Listes des taches</h1>
    <div v-bind:class="['ui', 'raised', {inverted:blackTheme}, 'segment']" v-for="task in taskList">
      <button href="javascript:;" @click="completed(task, task.completed)" v-bind:class="classCompleted(task.completed)">
        {{textCompleted(task.completed)}}
      </button>
      <div class="ui grid">
        <div class="thirteen wide column">
          <p>{{ task.title }}</p>
          <p class="fsxs">{{ task.adate }}</p>
        </div>
        <div class="one wide column">
          <router-link :to="{name: 'see', params: {id:task.id}}" class="circular ui icon button yellow"><i class="fa fa-eye fa-2x yellow" aria-hidden="true"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    data() {
      return {
        taskList: [],
        errors: [],
        blackTheme: false
      };
    },
    created () {
      this.getTasks();
    },
    methods: {
      textCompleted: function (isCompleted) {
        return isCompleted == 1 ? "Terminée" : "Pas terminée";
      },
      classCompleted: function (isCompleted) {
        return {
          ui: true,
          green: isCompleted == 1,
          blue: isCompleted == 0,
          ribbon: true,
          label: true,
          cursor: true,
          pointer: true
        };
      },
      getTasks: function () {
        this.axios.get('/task/list').then(response => {
          this.taskList = response.data;
          //console.log(response.data);
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      completed: function (task, isCompleted) {
        const checked = isCompleted;

        if (checked == 1) {
          task.completed = 0;
        }
        if (checked == 0) {
          task.completed = 1;
        }

        this.axios.patch('/task/' + task.id, task).then(response => {
          //this.taskList = response.data;
          //console.log(response);
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      }
    }
  }
</script>
