import { Outlet } from "react-router";

function Layout() {
    return ( 
        <div>
            <h1>Layout</h1>

            <div className="bg-[red]">
                <Outlet />
            </div>
        </div>
     );
}

export default Layout;