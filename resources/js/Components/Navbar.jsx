import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl font-evolve_medium">
                    <img src="/img/hipmakt.png" className="w-8 mr-3" />
                    HIPMAKT
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-evolve_medium">
                    {!user ? (
                        <>
                            <li>
                                <Link href={route("home")} as="button">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={route("berita")} as="button">
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link href={route("registrasi")} as="button">
                                    Registrasi
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href={route("post.berita")}>
                                    Bikin Berita
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="btn btn-outline"
                                >
                                    Log Out
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
