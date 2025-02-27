<?php

namespace App\Http\Controllers\Api;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TaskApiController extends Controller
{
    protected $taskModel;

    function __construct(){
        $this->taskModel = new Task();
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

        $this->taskModel->createTask([
            "title" => $request->title, 
            "description" => $request->description]);

        return response()->json([
            "message" => "Task created successfully",
        ], 200);
    }

    public function getTaskAll(){
        return response()->json([
            'data'=>$this->taskModel->getTaskList()
        ], 200);
    }

    public function markAsDone($taskId){
        $isUpdated = $this->taskModel->markAsDone($taskId);

        if ($isUpdated) {
            return response()->json([
                "message" => "Task updated successfully",
            ]);
        }

        return response()->json([
            'error' => 'Failed to update task',
        ], 422);
    }

    public function deleteTask($taskId){
        $isDeleted = $this->taskModel->deleteTask($taskId);

        if ($isDeleted) {
            return response()->json([
                "message" => "Task deleted successfully"
            ]);
        }

        return response()->json([
            'error' => 'Failed to delete task'
        ], 422);
    }
}
