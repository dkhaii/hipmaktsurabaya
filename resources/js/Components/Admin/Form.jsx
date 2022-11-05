// import React, { useState, useEffect } from "react";

// const [judul, setJudul] = useState("");
// const [kategori, setKategori] = useState("");
// const [deskripsi, setDeskripsi] = useState("");
// const [notif, setNotif] = useState(false);

// const handlePost = () => {
//     const data = {
//         judul,
//         kategori,
//         deskripsi,
//     };

//     Inertia.post("/post-berita", data);
//     setNotif(true);
//     setJudul("");
//     setKategori("");
//     setDeskripsi("");
// };

// const Form = (myBerita) => {
//     return myBerita.map((data) => {
//         return (
//             <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                 {notif ? (
//                     <div className="m-2 alert alert-info shadow-lg">
//                         <div>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="stroke-current flex-shrink-0 h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                                 />
//                             </svg>
//                             <span>{data.flash.message}</span>
//                         </div>
//                     </div>
//                 ) : (
//                     <div></div>
//                 )}
//                 <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                     <h1 className="ml-6 mt-4 text-2xl font-medium font-sans">
//                         Posting Berita
//                     </h1>
//                     <div className="p-6 bg-white border-b border-gray-200">
//                         <input
//                             type="text"
//                             placeholder="Judul"
//                             className="m-2 input input-bordered w-full"
//                             onChange={(judul) => setJudul(judul.target.value)}
//                             value={judul}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Kategori"
//                             className="m-2 input input-bordered w-full"
//                             onChange={(kategori) =>
//                                 setKategori(kategori.target.value)
//                             }
//                             value={kategori}
//                         />
//                         <textarea
//                             className="m-2 textarea textarea-bordered w-full"
//                             placeholder="Berita"
//                             onChange={(deskripsi) =>
//                                 setDeskripsi(deskripsi.target.value)
//                             }
//                             value={deskripsi}
//                         ></textarea>
//                         <button
//                             className="btn btn-primary m-2"
//                             onClick={() => handlePost()}
//                         >
//                             POST
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     });
// };

// export default Form;
