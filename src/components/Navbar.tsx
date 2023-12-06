import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-300 p-4">
            <div className="container mx-auto flex">
                <NavLink to={"/"} className="text-red-50 text-2xl font-semibold">
                    Recipe App
                </NavLink>
            </div>
        </nav>
    );
}
