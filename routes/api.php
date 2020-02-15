<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->group(function () {
    Route::get('/user', 'UserController@getDetails');
    Route::get('/categories', 'Resource\CategoryController@index');
    Route::get('/categories/{id}', 'Resource\CategoryController@get');

    Route::get('/threads', 'Resource\ThreadController@index');
    Route::post('/threads', 'Resource\ThreadController@store');
    Route::get('/threads/{id}', 'Resource\ThreadController@get');

    Route::get('/messages', 'Resource\MessageController@index');
    Route::post('/messages', 'Resource\MessageController@store');
    Route::get('/messages/{id}', 'Resource\MessageController@get');
});

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

