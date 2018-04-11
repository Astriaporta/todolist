<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskValidationRules;
use App\Task;


class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::orderBy('completed', 'asc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(TaskValidationRules $request)
    {
      Task::create(request(['title', 'content', 'adate']));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $task
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Task::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(TaskValidationRules $request, $id)
    {
      $task = Task::find($id);

      $task->title = $request['title'];
      $task->content = $request['content'];
      $task->adate = $request['adate'];
      $task->completed = $request['completed'];
      $task->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id)
    {
      Task::destroy($id);
    }
}
