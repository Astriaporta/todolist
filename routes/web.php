<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (){
  return view('home.index');
});

Route::prefix('/task')->group(function () {
  Route::get('list', 'TasksController@index');
  Route::get('{id}', 'TasksController@show');
  Route::post('new', 'TasksController@store');
  Route::patch('{id}', 'TasksController@update');
  Route::delete('{id}', 'TasksController@destroy');
});
