<template lang="html">
  <nav class="ui fixed inverted menu">
    <div class="ui container">
      <a @click="activeThis(0)" v-bind:class="[{active: menuIndex}, 'yellow', 'item']" href="#/">Liste des taches</a>
      <a @click="activeThis(1)" v-bind:class="[{active: newTask}, 'yellow', 'item']" href="#/create">Ajouter</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuIndex: true,
      newTask: false
    };
  },
  methods: {
    activeThis: function (who) {
      if (who == 0) {
        this.menuIndex = true;
        this.newTask = false;
      }
      if (who == 1) {
        this.menuIndex = false;
        this.newTask = true;
      }
    }
  }
}
</script>
