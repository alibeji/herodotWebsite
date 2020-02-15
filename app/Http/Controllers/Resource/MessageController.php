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

class MessageController extends Controller
{

    public function index(Request $request)
    {
        $thread_id = $request->get('threadId', null);
        if(is_null($thread_id))
            return Message::with("user")->get();

        return Thread::find($thread_id)->messages()->with("user")->get();
    }

    public function get(int $id)
    {
        return Message::find($id);
    }


    public function store(Request $request)
    {
        $user = Auth::guard("api")->user();

        if(is_null($user))
            return response("You should log in to perform this action", 401);

        $msg = new Message();
        $msg->text = $request->get("message");
        $msg->user_id = $user->id;

        $thread = Thread::find($request->get("threadId"));
        $thread->messages()->save($msg);

        return $msg;

    }
}