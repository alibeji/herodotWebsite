<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login()
    {
        $credentials = [
            'password' => request('password')
        ];

        if(filter_var(request('login'), FILTER_VALIDATE_EMAIL)) {
            $credentials['email'] = request('login');
        } else {
            $credentials['username'] = request('login');
        }

        if (Auth::guard('web')->attempt($credentials)) { // API guard doesn't support attempt method
            $success['token'] = Auth::guard('web')->user()->createToken('HRAuth')->accessToken;

            return response()->json($success);
        }

        return response()->json(['auth' => "Entered credentials doesn't match our records"], 401);
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);

       /* if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }*/

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $success['token'] = $user->createToken('HRAuth')->accessToken;
        $success['name'] = $user->name;

        return response()->json(['success' => $success]);
    }

    public function getDetails()
    {
        return response()->json(['user' => Auth::user()]);
    }
}