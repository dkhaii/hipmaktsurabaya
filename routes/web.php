<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\MahasiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth', 'verified')->group(function () {
    Route::post('/dashboard/berita', [BeritaController::class, 'store']);
    Route::get('/admin', [BeritaController::class, 'show'])->name('post.berita');
    Route::get('/dashboard/berita/edit', [BeritaController::class, 'edit'])->name('edit.berita');
    Route::post('/dashboard/berita/update', [BeritaController::class, 'update'])->name('update.berita');
    Route::post('/dashboard/berita/delete', [BeritaController::class, 'destroy'])->name('delete.berita');
    
    Route::get('/dashboard/mahasiswa', [MahasiswaController::class, 'show'])->name('manage.mahasiswa');
    Route::get('/dashboard/mahasiswa/edit', [MahasiswaController::class, 'edit'])->name('edit.mahasiswa');
    Route::post('/dashboard/mahasiswa/update', [MahasiswaController::class, 'update'])->name('update.mahasiswa');
    Route::post('/dashboard/mahasiswa/delete', [MahasiswaController::class, 'destroy'])->name('delete.mahasiswa');
});

Route::get('/', [MahasiswaController::class, 'index'])->name('home');
Route::get('/berita', [BeritaController::class, 'index'])->name('berita');


Route::get('/daftar-data-diri', [MahasiswaController::class, 'isiDataDiri'])->name('registrasi');
Route::post('/daftar-data-diri', [MahasiswaController::class, 'store']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
