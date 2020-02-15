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

class CategoryController extends Controller
{

    public function index()
    {
        return Category::orderBy('priority')->get();
    }

    public function get(int $id)
    {
        return Category::find($id);
    }
}