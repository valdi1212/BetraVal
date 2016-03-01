<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class RegistrationsController extends Controller
{

	public function register()
	{
		return view('register');
	}

	public function store(CreateUserRequest $request)
	{
		$request = $request->except('_token', 'password_confirmation');
		User::create($request);

		return redirect('/');
    }
}
