<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  protected $guarded = [];

  public function scoopeIncomplete($query)
  {
    return $query->where('complete', 0);
  }
}
