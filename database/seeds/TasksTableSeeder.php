<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      for ($i=0; $i < 3; $i++) {
        DB::table('Tasks')->insert([
          'title' => 'Finish the todolist ' . $i,
          'content' => 'Finish the todo list. test edtit ' . $i
        ]);
      }
    }
}
