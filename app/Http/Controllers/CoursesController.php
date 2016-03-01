<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CoursesController extends Controller
{

    public function listCourses()
    {
        return view('courses.list');
    }

    public function show($id)
    {
        return view('courses.showCourse')->with(compact('id'));
    }
}
