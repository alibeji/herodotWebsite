<?php
/**
 * Created by PhpStorm.
 * User: marwen
 * Date: 4/22/19
 * Time: 3:40 PM
 */

namespace App\Http\Controllers\Resource;


use App\Category;
use App\Http\Controllers\Controller;
use App\Message;
use App\Thread;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ThreadController extends Controller
{

    public function index(Request $request)
    {
        $category_id = $request->get('categoryId', null);
        if(is_null($category_id))
            return Thread::all();

        return Category::find($category_id)->threads;
    }

    public function get(int $id)
    {
        return Thread::find($id);
    }

    public function store(Request $request)
    {
        $user = Auth::guard("api")->user();

        if(is_null($user))
            return response("You should log in to perform this action", 401);

        $thread = new Thread();
        $thread->title = $request->get('title');
        $thread->user_id = $user->id;

        $category = Category::find($request->get("categoryId"));
        $category->threads()->save($thread);

        $msg = new Message();
        $msg->text = $request->get("message");
        $msg->user_id = $user->id;

        $thread->messages()->save($msg);

        return $msg;
    }
}