<div id="app">
  <app-menu></app-menu>
  <div class="ui grid" >
    <div class="ui container mts">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</div>
