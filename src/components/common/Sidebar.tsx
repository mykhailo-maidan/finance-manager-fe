import { Outlet } from "react-router-dom"

export default function Sidebar({children}) {
    return (
    <div className="sidebar">
        {children}
    </div>
    );
}