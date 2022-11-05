import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function EditMahasiswa(props) {
    const [nama, setNama] = useState("");
    const [jenis_kelamin, setJenisKelamin] = useState("");
    const [pt, setPt] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [no_hp, setNoHp] = useState("");
    const [angkatan, setAngkatan] = useState("");

    const handlePost = () => {
        const data = {
            id: props.myMahasiswa.id,
            nama,
            jenis_kelamin,
            pt,
            jurusan,
            no_hp,
            angkatan,
        };

        Inertia.post("/dashboard/mahasiswa/update", data);
        setNama("");
        setJenisKelamin("");
        setPt("");
        setJurusan("");
        setNoHp("");
        setAngkatan("");
    };

    console.log("props = ", props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="ml-6 mt-4 text-2xl font-medium font-sans">
                            Edit Mahasiswa
                        </h1>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <input
                                type="text"
                                placeholder="Nama"
                                className="m-2 input input-bordered w-full"
                                onChange={(nama) =>
                                    setNama(nama.target.value)
                                }
                                defaultValue={props.myMahasiswa.nama}
                            />
                            <select
                                className="m-2 select select-bordered w-full"
                                onChange={(jk) =>
                                    setJenisKelamin(jk.target.value)
                                }
                                defaultValue={props.myMahasiswa.jenis_kelamin}
                            >
                                <option>jenis kelamin</option>
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Perguruan Tinggi"
                                className="m-2 input input-bordered w-full"
                                onChange={(pt) =>
                                    setPt(pt.target.value)
                                }
                                defaultValue={props.myMahasiswa.pt}
                            />
                            <input
                                type="text"
                                placeholder="Jurusan"
                                className="m-2 input input-bordered w-full"
                                onChange={(jurusan) =>
                                    setJurusan(jurusan.target.value)
                                }
                                defaultValue={props.myMahasiswa.jurusan}
                            />
                            <input
                                type="text"
                                placeholder="No Hp"
                                className="m-2 input input-bordered w-full"
                                onChange={(no_hp) =>
                                    setNoHp(no_hp.target.value)
                                }
                                defaultValue={props.myMahasiswa.no_hp}
                            />
                            <input
                                type="text"
                                placeholder="Angkatan"
                                className="m-2 input input-bordered w-full"
                                onChange={(angkatan) =>
                                    setAngkatan(angkatan.target.value)
                                }
                                defaultValue={props.myMahasiswa.angkatan}
                            />
                            <button
                                className="btn btn-primary m-2"
                                onClick={() => handlePost()}
                            >
                                EDIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
