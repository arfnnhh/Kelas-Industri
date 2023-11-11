<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use App\Models\Categories;
use App\Models\Contact;
use App\Models\Home;
use App\Models\Portofolio;
use App\Models\Services;
use App\Models\About;
use Illuminate\Http\Request;

class CompanyPorfileController extends Controller
{
    public function index()
    {
        return $this->response(Home::first());
    }

    public function services()
    {
        return $this->response(Services::get());
    }

    public function about()
    {
        return $this->response(About::first());
    }

    private function response($data)
    {
        return response()->json(['data' => $data]);
    }

    public function portofolio()
    {
        return $this->response(Portofolio::get());
    }

    public function blog(Request $request)
    {
        $search = $request->search;
        $query = Blogs::query();

        if ($search) {
            $query->where('title', 'like', '%' . $search . '%');
        }

        $data = $query->paginate(3);

        return $this->response($data);
    }
    public function categories()
    {
        return $this->response(Categories::get());
    }

    public function contact(Request $request)
    {
        Contact::create($request->all());
        return $this->response('success');
    }
}
