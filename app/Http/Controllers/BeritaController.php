<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaCollection;
use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $berita = new BeritaCollection(Berita::paginate(6));
        return Inertia::render('Berita', [
            'title' => 'Berita',
            'berita' => $berita,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $berita = new Berita();

        $berita->judul = $request->judul;
        $berita->deskripsi = $request->deskripsi;
        $berita->kategori = $request->kategori;
        $berita->author = auth()->user()->name;
        
        $berita->save();

        return redirect()->back()->with('message', 'Berita berhasil di post!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function show(Berita $berita)
    {
        $myBerita = $berita::where('author', auth()->user()->name)->get();
        return Inertia::render('Dashboard', [
            'title' => 'Dahsboard',
            'myBerita' => $myBerita,
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function edit(Berita $berita, Request $request)
    {
        return Inertia::render('Auth/EditBerita', [
            'myBerita' => $berita->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Berita $berita)
    {
        Berita::where('id', $request->id)->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori' => $request->kategori,
        ]);
        return to_route('post.berita')->with('message', 'Update berita berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $berita = Berita::find($request->id);
        $berita->delete();

        return redirect()->back()->with('message', 'Berita berhasil di post!');
    }
}
