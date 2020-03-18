<template>

  <div>
    <!-- viewing mode -->

    <div v-if="!editTask && !newTask" class="container">
      <h1 :class="[{inverted:blackTheme}, 'header']">
        {{task.title}}
      </h1>
      <div :class="['raised', {inverted:blackTheme}, 'segment']">
        <p>{{ task.content }}</p>
        <p>{{ task.adate }}</p>
      </div>
      <div>
        <button class="waves-effect waves-light btn green accent-4" @click="edit()">Edit</button>
        <button class="waves-effect waves-light btn blue" @click="cancel()">Cancel</button>
        <button class="waves-effect waves-light btn red" @click="destroy()">Delete</button>
        <button :class="['waves-effect', 'waves-light', 'btn', 'right', {red:task.completed==0}, {'green accent-4':task.completed == 1}]" @click="completed()">{{textCompleted(task.completed)}}</button>
      </div>
    </div>

    <!-- store/editing mode -->

    <div v-if="editTask || newTask" class="ui container">
      <div :class="['ui', {inverted:blackTheme}, 'form']">
        <div class="row">
          <div class="input-field col s12">
            <label for="title">Titre</label>
            <input type="text" id="title" v-model.trim="task.title"/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label for="content">Contenu</label>
            <textarea id="content" class="materialize-textarea" v-model.trim="task.content"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label for="dateTime">Date limite</label>
            <input class="datepicker" id="dateTime" type="text" v-model.trim="task.adate"/>
          </div>
        </div>
        <div class="">
          <button class="btn waves-effect waves-light blue" @click="cancel()">Cancel</button>
          <button class="btn waves-effect waves-light green accent-4" v-if="newTask" @click="store()">Créer</button>
          <button class="btn waves-effect waves-light green accent-4" v-if="editTask" @click="update()">Enregister</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FormTask',
    props: {
      newTask: {
        require: true,
        type: Boolean
      }
    },
    data() {
      return {
        task: {
          id: null,
          title: "",
          content: "",
          adate: ""
        },
        marginLeft: '10%',
        isImportant: "!important",
        editTask: false,
        blackTheme: false
      }
    },
    created() {
      if (this.$route.params.id) {
        this.show(this.$route.params.id);
      }
    },
    computed: {
      computedTask: {
        get: function () {
          return this.task;
        },
        set: function (params) {
          this.task = {
            title: params.title,
            content: params.content,
            adate: params.adate
          };
        }
      }
    },
    methods: {
      textCompleted(isCompleted) {
        return isCompleted == 1 ? "Dévalider" : "Valider";
      },
      show(id) {
        axios.get('/task/' + id).then(response => {
          this.task = response.data;
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      edit () {
        this.editTask = true
      },
      store () {
        let task = this.computedTask;

        axios.post('/task/new', task).then(response => {
          window.location.href = '#/';
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      update () {
        let task = this.computedTask;

        axios.patch('/task/' + task.id, task).then(response => {
          this.editTask = false;
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      destroy() {
        if (this.task.id !== null)
       axios.delete('/task/' + this.task.id).then(response => {
         window.location.href = '#/';
       }).catch(error => {
         this.errors.push(error);
         console.error(error);
       });
      },
      cancel () {
        window.location.href = '#/';
      },
      completed() {
        let checked = this.computedTask.completed;

        if (checked == 1) {
          this.computedTask.completed = 0;
        }
        if (checked == 0) {
          this.computedTask.completed = 1;
        }

        axios.patch('/task/' + this.computedTask.id, this.computedTask).then(response => {
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      }
    }
  }
</script>
