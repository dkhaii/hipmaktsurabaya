import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function EditBerita(props) {
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handlePost = () => {
        const data = {
            id: props.myBerita.id,
            judul,
            kategori,
            deskripsi,
        };

        Inertia.post("/dashboard/berita/update", data);
        setJudul("");
        setKategori("");
        setDeskripsi("");
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
                            Edit Berita
                        </h1>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <input
                                type="text"
                                placeholder="Judul"
                                className="m-2 input input-bordered w-full"
                                onChange={(judul) =>
                                    setJudul(judul.target.value)
                                }
                                defaultValue={props.myBerita.judul}
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="m-2 input input-bordered w-full"
                                onChange={(kategori) =>
                                    setKategori(kategori.target.value)
                                }
                                defaultValue={props.myBerita.kategori}
                            />
                            <textarea
                                className="m-2 textarea textarea-bordered w-full"
                                placeholder="Berita"
                                onChange={(deskripsi) =>
                                    setDeskripsi(deskripsi.target.value)
                                }
                                defaultValue={props.myBerita.deskripsi}
                            ></textarea>
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
