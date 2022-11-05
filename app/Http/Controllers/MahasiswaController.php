<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home', [
            'title' => 'Home',
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function isiDataDiri(Mahasiswa $mahasiswa)
    {
        $dataMahasiswa = $mahasiswa::where('id', $mahasiswa->id)->get();
        return Inertia::render('Registrasi', [
            'title' => 'Regitrasi',
            'notif' => $dataMahasiswa,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $mahasiswa = new Mahasiswa();

        $mahasiswa->nama = $request->nama;
        $mahasiswa->jenis_kelamin = $request->jenis_kelamin;
        $mahasiswa->pt = $request->pt;
        $mahasiswa->jurusan = $request->jurusan;
        $mahasiswa->no_hp = $request->no_hp;
        $mahasiswa->angkatan = $request->angkatan;

        $mahasiswa->save();

        return redirect()->back()->with('message', 'Registrasi Berhasil! Silahkan tunggu anda akan kami hubungi melalui Whatsapp.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mahasiswa  $mahasiswa
     * @return \Illuminate\Http\Response
     */
    public function show(Mahasiswa $mahasiswa)
    {
        $dataMahasiswa = Mahasiswa::all();
        return Inertia::render('DashboardMahasiswa', [
            'title' => 'Dashboard',
            'dataMahasiswa' => $dataMahasiswa,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mahasiswa  $mahasiswa
     * @return \Illuminate\Http\Response
     */
    public function edit(Mahasiswa $mahasiswa, Request $request)
    {
        return Inertia::render('Auth/EditMahasiswa', [
            'myMahasiswa' => $mahasiswa->find($request->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mahasiswa  $mahasiswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mahasiswa $mahasiswa)
    {
        Mahasiswa::where('id', $request->id)->update([
            'nama' => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'pt' => $request->pt,
            'jurusan' => $request->jurusan,
            'no_hp' => $request->no_hp,
            'angkatan' => $request->angkatan,
        ]);
        return to_route('manage.mahasiswa')->with('message', 'Update mahasiswa berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mahasiswa  $mahasiswa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $mahasiswa = Mahasiswa::find($request->id);
        $mahasiswa->delete();

        return redirect()->back()->with('message', 'Data berhasil di hapus!');
    }
}
