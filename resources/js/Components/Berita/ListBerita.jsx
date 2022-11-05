const isBerita = (berita) => {
    return berita.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-evolve_regular">
                        {data.judul}
                    </h2>
                    <p className="font-evolve_thin">{data.deskripsi}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-inline font-evolve_regular">
                            {data.kategori}
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline font-evolve_regular">
                            Penulis: {data.author}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noBerita = () => {
    return (
        <div className="flex justify-center items-center font-evolve_regular">
            Saat ini belum ada berita tersedia
        </div>
    );
};

const ListBerita = ({ berita }) => {
    if (!berita) {
        return noBerita();
    } else {
        return isBerita(berita);
    }
};

export default ListBerita;
