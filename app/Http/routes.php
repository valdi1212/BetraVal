<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');
Route::get('dummy', 'UsersController@showDummy');
Route::get('courses', 'CoursesController@listCourses');
Route::get('courses/{id}', 'CoursesController@show');

Route::get('login', 'LoginController@login');
Route::get('register', 'RegistrationsController@register');
Route::post('register', 'RegistrationsController@store');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/