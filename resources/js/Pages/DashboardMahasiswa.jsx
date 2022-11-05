import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function DashboardMahasiswa(props) {
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
                    <div className="flex flex-col bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="pb-6 ml-6 mt-4 text-2xl font-medium font-sans">
                            Manage Mahasiswa
                        </h1>
                        <div className="stats">
                            <div className="stat">
                                <div className="stat-title">
                                    Jumlah Mahasiswa Terdata
                                </div>

                                <div className="stat-value">{props.dataMahasiswa.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Jenis Kelamin</th>
                                        <th>universitas</th>
                                        <th>jurusan</th>
                                        <th>no hp</th>
                                        <th>angkatan</th>
                                        <th>aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.dataMahasiswa.map((data, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{data.nama}</td>
                                                <td>{data.jenis_kelamin}</td>
                                                <td>{data.pt}</td>
                                                <td>{data.jurusan}</td>
                                                <td>{data.no_hp}</td>
                                                <td>{data.angkatan}</td>
                                                <td>
                                                    <Link
                                                        className="badge badge-success"
                                                        href={route(
                                                            "edit.mahasiswa"
                                                        )}
                                                        as="button"
                                                        method="get"
                                                        data={{
                                                            id: data.id,
                                                        }}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        className="badge badge-error"
                                                        href={route(
                                                            "delete.mahasiswa"
                                                        )}
                                                        as="button"
                                                        method="post"
                                                        data={{
                                                            id: data.id,
                                                        }}
                                                    >
                                                        Hapus
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="py-12"></div>
            </div>
        </AuthenticatedLayout>
    );
}
