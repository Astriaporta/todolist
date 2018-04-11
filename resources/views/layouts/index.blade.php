<?php $menu = false; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>TodoList</title>
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  <!-- Fonts -->
  <link rel="stylesheet" type="text/css" href="/css/font-awesome/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://semantic-ui.com/dist/semantic.css">
</head>
<body>

@if($menu)
@include('layouts.nav')
@endif
@include('layouts.content')

@include('layouts.footer')
</body>
</html>
