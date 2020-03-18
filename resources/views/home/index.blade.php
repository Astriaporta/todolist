@extends('layouts.app')

@section('content')
  <div id="app">
    <app-menu></app-menu>
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
@endsection
