# HIPMAKT SURABAYA - Aplikasi Registrasi Himpunan Mahasiswa
![PeduliHub](https://media.discordapp.net/attachments/865989229862453288/1063492590336483398/hipmakt.png?width=485&height=499)

Himpunan Pelajar Mahasiswa Kutai Timur (***HIPMAKT***) adalah kumpulan pelajar dan mahasiswa ***Kab. Kutai Timur*** yang memiliki tujuan yang sama untuk membangun Kab. Kutai Timur. ***HIPMAKT*** dibentuk untuk mempersatukan anak-anak pelajar dan mahasiswa ***Kab. Kutai Timur*** yang bersekolah atau berkuliah di luar ***Kab. Kutai Timur***.
Meningkatnya mahasiswa kutai timur yang berkuliah di ***Surabaya***, kami pengurus ***HIPMAKT cabang Surabaya*** berinisiatif membuat sebuah aplikasi registrasi untuk memudahkan mahasiwa ***Kutai Timur*** untuk bergabung bersama keluarga besar ***HIPMAKT***.

![Generic badge](https://img.shields.io/badge/status-stagging-yellow.svg)

## Teknologi yang digunakan

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Fitur
- **Landing Page**

![LandingPage](https://media.discordapp.net/attachments/865989229862453288/1063492930054127626/image.png?width=939&height=470)
- **Halaman Berita**

![HalamanBerita](https://media.discordapp.net/attachments/865989229862453288/1063498318770081883/image.png?width=939&height=493)
- **Halaman Registrasi Mahasiswa**

![HalamanRegistrasiMahasiswa](https://media.discordapp.net/attachments/865989229862453288/1063493023452905532/image.png?width=939&height=470)
- **Admin**
    - Login/logut
    - Dashboard
    - Membuat Berita
    - Melihat semua data mahasiswa yang telah melakukan registrasi

## Instalasi
untuk menjalan aplikasi ini, dibutuhkan sedikit configurasi agar dapat di jalankan pada local server.

buka terminal seperti bash, zsh, command prompt atau powershell dan nstall dependency composer dengan command berikut
```
composer install && composer update
```
Lanjut, copy file `.env.example` dengan nama `.env`
Kemudian, silahkan ganti credentials database di file `.env` nya seperti ini:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=xxx
DB_USERNAME=root
DB_PASSWORD=
```
Kemudian, silahkan migrate semua database di project ini dengan menggunakan artisan command:
```
php artisan migrate
```
Install dependencies nodejs didalam folder `node_modules`:
```
npm install && npm run dev
```
Langkah Terakhir, silahkan jalankan local development server Laravel dengan menggunakan artisan command sebagai berikut:
```
php artisan serve
```
Project ini akan berjalan di `https://localhost:8080`.


<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
#hipmaktsurabaya
