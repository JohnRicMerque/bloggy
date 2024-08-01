<?php

namespace App\Http\Controllers\Api;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TaskApiController extends Controller
{
    protected $todoModel;

    function __construct(){
        $this->todoModel = new Task();
    }
    public function saveTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "error", $validator->errors(),
            ], 422);
        }

        $this->todoModel->createTask([
            "title" => $request->title, 
            "description" => $request->description]);

        return response()->json([
            "message" => "Task created successfully",
        ], 200);
    }
}
