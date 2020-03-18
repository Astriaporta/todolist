<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    {{-- <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> --}}
    {{-- <link rel="stylesheet" type="text/css" href="https://semantic-ui.com/dist/semantic.css"> --}}
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    @yield('content')

    <script src="{{mix('js/app.js')}}"></script>
  </body>
</html>
