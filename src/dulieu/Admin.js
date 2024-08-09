import {Outlet} from "react-router-dom";

export function Admin() {
    return (
        <>
            <div className="container">
                <div className="menu-left">
                    <div className="product">Product</div>
                    <div className="order">Order</div>
                    <div className="student">Student</div>
                </div>
            <Outlet/>
            </div>
        </>
    )
}