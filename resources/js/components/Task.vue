<template>
  <div :class="['card', {inverted:blackTheme}]">
    <div :class="['h1px',{red:task.completed==0}, {'green accent-4':task.completed == 1}]"></div>
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">
        {{ task.title }}
        <a class="waves-effect waves-teal btn-flat right" @click="completed(task, task.completed)"><i class="material-icons right">{{textCompleted(task.completed)}}</i></a>
        <router-link :to="{name: 'see', params: {id:task.id}}">
          <i class="material-icons right">remove_red_eye</i>
        </router-link>
      </span>
      <p class="fsxs">{{ task.adate }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        require: true,
        type: Object
      }
    },
    data() {
      return {
        errors: [],
        blackTheme: false
      };
    },
    methods: {
      textCompleted(isCompleted) {
        return isCompleted == 1 ? "clear" : "check";
      },
      classCompleted(isCompleted) {
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
      completed(task, isCompleted) {
        const checked = isCompleted;

        if (checked == 1) {
          task.completed = 0;
        }
        if (checked == 0) {
          task.completed = 1;
        }

        axios.patch('/task/' + task.id, task).then(response => {
          this.$emit('reload');
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      }
    }
  }
</script>
