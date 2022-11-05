import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import ListBerita from "@/Components/Berita/ListBerita";
import Paginator from "@/Components/Berita/Paginator";

export default function Berita(props) {
    return (
        <div className="min-h-screen mx-auto bg-base-200">
            <Head title={props.title}></Head>
            <div className="p-3 mx-14">
                <Navbar user={props.auth.user}></Navbar>
            </div>
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-5xl font-evolve_bold text-primary">BERITA</h1>
                <h1 className="text-lg font-evolve_medium">Seputar HIPMA Cab. Surabaya</h1>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5 p-10 lg:p-20">
                <ListBerita berita={props.berita.data}></ListBerita>
            </div>
            <div className="flex justify-center items-center ">
                <Paginator meta={props.berita.meta}></Paginator>
            </div>
        </div>
    );
}
