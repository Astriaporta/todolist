<template>

  <div>
    <!-- viewing mode -->

    <div v-if="!editTask && !newTask" class="ui container">
      <h1 v-bind:class="['ui', {inverted:blackTheme}, 'header']">{{formdata.title}}</h1>
      <div v-bind:class="['ui', 'raised', {inverted:blackTheme}, 'segment']">
        <p v-if="formdata.completed == 1" class="ui green ribbon label">Terminée</p>
        <p v-if="formdata.completed == 0" class="ui blue ribbon label">Pas terminée</p>
        <p>{{formdata.content}}</p>
        <p>{{formdata.adate}}</p>
      </div>
      <div>
        <button id="edit" class="ui yellow button" @click="edit()">Edit</button>
        <button class="ui button" @click="cancel()">Cancel</button>
        <button class="ui red button" @click="destroy()">Delete</button>
      </div>
    </div>

    <!-- store/editing mode -->

    <div v-if="editTask || newTask" class="ui container">
      <div v-bind:class="['ui', {inverted:blackTheme}, 'form']">
        <div class="field">
          <label>Titre</label>
          <input type="text" placeholder="Titre" v-model.trim="formdata.title" v-bind:value="formdata.title"/>
        </div>
        <div class="field">
          <label>Contenu</label>
          <textarea placeholder="Contenu" v-model.trim="formdata.content">{{formdata.content}}</textarea>
        </div>
        <div class="field">
          <label>Date limite</label>
          <input class="dateTime" type="text" v-model.trim="formdata.adate" v-bind:value="formdata.adate"/>
        </div>
        <div class="ui buttons">
          <button class="ui button" @click="cancel()">Cancel</button>
          <div class="or"></div>
          <button class="ui yellow button" v-if="newTask" @click="store()">Create</button>
          <button class="ui yellow button" v-if="editTask" @click="update()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FormTask',
    props: ['newTask'],
    data() {
      return {
        formdata: {
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
      computedFormData: {
        get: function () {
          return this.formdata;
        },
        set: function (params) {
          this.formdata = {
            title: params.title,
            content: params.content,
            adate: params.adate
          };
        }
      }
    },
    methods: {
      show(id) {
        this.axios.get('/task/' + id).then(response => {
          this.formdata = response.data;
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      edit () {
        this.editTask = true
      },
      store () {
        let task = this.computedFormData;

        this.axios.post('/task/new', task).then(response => {
          window.location.href = '#/';
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      update () {
        let task = this.computedFormData;

        this.axios.patch('/task/' + task.id, task).then(response => {
          this.editTask = false;
        }).catch(error => {
          this.errors.push(error);
          console.error(error);
        });
      },
      destroy() {
        if (this.formdata.id !== null)
       this.axios.delete('/task/' + this.formdata.id).then(response => {
         window.location.href = '#/';
       }).catch(error => {
         this.errors.push(error);
         console.error(error);
       });
      },
      cancel () {
        window.location.href = '#/';
      }
    }
  }
</script>
