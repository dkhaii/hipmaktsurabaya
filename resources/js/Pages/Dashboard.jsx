import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [notif, setNotif] = useState(false);

    const handlePost = () => {
        const data = {
            judul,
            kategori,
            deskripsi,
        };

        Inertia.post("/dashboard/berita", data);
        setNotif(true);
        setJudul("");
        setKategori("");
        setDeskripsi("");
    };

    useEffect(() => {
        if (!props.myBerita) {
            Inertia.get("/dashboard/berita");
        }
        return;
    }, []);

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
                    {notif ? (
                        <div className="mb-5 alert alert-info shadow-lg">
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="ml-6 mt-4 text-2xl font-medium font-sans">
                            Posting Berita
                        </h1>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <input
                                type="text"
                                placeholder="Judul"
                                className="m-2 input input-bordered w-full"
                                onChange={(judul) =>
                                    setJudul(judul.target.value)
                                }
                                value={judul}
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="m-2 input input-bordered w-full"
                                onChange={(kategori) =>
                                    setKategori(kategori.target.value)
                                }
                                value={kategori}
                            />
                            <textarea
                                className="m-2 textarea textarea-bordered w-full"
                                placeholder="Berita"
                                onChange={(deskripsi) =>
                                    setDeskripsi(deskripsi.target.value)
                                }
                                value={deskripsi}
                            ></textarea>
                            <button
                                className="btn btn-primary m-2"
                                onClick={() => handlePost()}
                            >
                                POST
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    {props.myBerita.length > 0 ? (
                        props.myBerita.map((data, i) => {
                            return (
                                <div
                                    key={i}
                                    className="max-w-7xl mx-auto my-4 sm:px-6 lg:px-8"
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="card w-full bg-base-100 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title text-2xl font-evolve_regular">
                                                    {data.judul}
                                                </h2>
                                                <p className="font-evolve_thin">
                                                    {data.deskripsi}
                                                </p>
                                                <div className="card-actions justify-start">
                                                    <div className="badge badge-inline font-evolve_regular">
                                                        {data.kategori}
                                                    </div>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <div className="btn btn-info font-evolve_regular">
                                                        <Link
                                                            href={route(
                                                                "edit.berita"
                                                            )}
                                                            as="button"
                                                            method="get"
                                                            data={{
                                                                id: data.id,
                                                            }}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </div>
                                                    <div className="btn btn-error font-evolve_regular">
                                                        <Link
                                                            href={route(
                                                                "delete.berita"
                                                            )}
                                                            as="button"
                                                            method="post"
                                                            data={{
                                                                id: data.id,
                                                            }}
                                                        >
                                                            Hapus
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex justify-center items-center">
                            <h1>Anda belum posting berita</h1>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
