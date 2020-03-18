<template>
  <div class="navbar-fixed">
    <nav class="green accent-4">
      <div class="nav-wrapper">
        <span class="brand-logo center">Listes des taches</span>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li :class="[{active: menuIndex}]" ><a @click="activeThis(0)"href="#/">Liste des taches</a></li>
          <li :class="[{active: newTask}]"><a @click="activeThis(1)" href="#/create">Ajouter</a></li>
        </ul>
      </div>
    </nav>
  </div>
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
