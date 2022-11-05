import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head, Select } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function Registrasi(props) {
    const [nama, setNama] = useState("");
    const [jenis_kelamin, setJenisKelamin] = useState("");
    const [pt, setPt] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [no_hp, setNoHp] = useState("");
    const [angkatan, setAngkatan] = useState("");
    const [notif, setNotif] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handlePost = () => {
        const data = {
            nama,
            jenis_kelamin,
            pt,
            jurusan,
            no_hp,
            angkatan,
        };

        Inertia.post("/daftar-data-diri", data);

        setNotif(true);
        setNama("");
        setJenisKelamin("");
        setPt("");
        setJurusan("");
        setNoHp("");
        setAngkatan("");
    };

    return (
        <div className="min-h-screen mx-auto bg-base-200">
            <Head title={props.title}></Head>
            <div className="p-3 mx-14">
                <Navbar></Navbar>
            </div>
            <div className="hero p-20 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-evolve_bold">
                            Registrasi Sekarang!
                        </h1>
                        <p className="py-6 font-evolve_thin">
                            Untuk kalian mahasiswa Kutai Timur, registrasikan
                            diri kalian untuk mempermudah kami HIPMA-KT Cabang
                            Surabaya dalam melakukan pendataan. Mari bergabung
                            bersama keluarga besar HIPMA-KT Cabang Surabaya!
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {notif ? (
                                <div className="alert alert-info shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nama</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="nama"
                                    className="input input-bordered"
                                    onChange={(nama) =>
                                        setNama(nama.target.value)
                                    }
                                    value={nama}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Jenis Kelamin
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    placeholder="Jenis Kelamin"
                                    value={jenis_kelamin}
                                    onChange={(jk) =>
                                        setJenisKelamin(jk.target.value)
                                    }
                                >
                                    <option>Jenis Kelamin</option>
                                    <option>Laki-laki</option>
                                    <option>Perempuan</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Perguruan Tinggi
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="perguruan tinggi"
                                    className="input input-bordered"
                                    onChange={(pt) => setPt(pt.target.value)}
                                    value={pt}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Jurusan</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="jurusan"
                                    className="input input-bordered"
                                    onChange={(jurusan) =>
                                        setJurusan(jurusan.target.value)
                                    }
                                    value={jurusan}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        No Handphone
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="no hp"
                                    className="input input-bordered"
                                    onChange={(no_hp) =>
                                        setNoHp(no_hp.target.value)
                                    }
                                    value={no_hp}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Angkatan</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="angkatan"
                                    className="input input-bordered"
                                    onChange={(angkatan) =>
                                        setAngkatan(angkatan.target.value)
                                    }
                                    value={angkatan}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handlePost()}
                                >
                                    Registrasi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
