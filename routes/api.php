<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/save-task',[TaskApiController::class, 'saveTask']);
Route::get('/get-task-list',[TaskApiController::class, 'getTaskAll']);
Route::put('/mark-as-done/{taskId}',[TaskApiController::class, 'markAsDone']);