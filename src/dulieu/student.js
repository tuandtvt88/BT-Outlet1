import {Outlet} from "react-router-dom";

export function Student(){
    return(
        <>
            <div className="main">
                <div className="top"></div>
                <div className="bottom">List Student
                    <div className="add">ADD</div>
                </div>
                <Outlet/>
            </div>

        </>
    )
}