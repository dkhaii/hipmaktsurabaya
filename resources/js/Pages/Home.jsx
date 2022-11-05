import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Home(props) {
    return (
        <div className="min-h-screen mx-auto bg-base-200">
            <Head title={props.title}></Head>
            
            <div className="p-3 mx-14">
                <Navbar></Navbar>
            </div>

            <div className="hero p-20 lg:p-36">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/img/hipmakt.png" className="max-w-sm" />
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold font-evolve_bold text-primary">
                            HIPMA
                        </h1>
                        <h1 className="text-5xl font-bold mb-3 font-evolve_bold">
                            KUTAI TIMUR
                        </h1>
                        <h1 className="text-3xl font-evolve_medium">
                            Cabang Surabaya
                        </h1>
                        <p className="py-6 font-evolve_thin">
                            Himpunan Pelajar Mahasiswa Kutai Timur (HIPMAKT)
                            adalah kumpulan pelajar dan mahasiswa Kab. Kutai
                            Timur yang memiliki tujuan yang sama untuk membangun
                            Kab. Kutai Timur. HIPMAKT dibentuk untuk
                            mempersatukan anak-anak pelajar dan mahasiswa Kab.
                            Kutai Timur yang bersekolah atau berkuliah di luar
                            Kab. Kutai Timur.
                        </p>
                        <Link href={route('registrasi')} className="btn btn-primary font-evolve_regular">Registrasi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
