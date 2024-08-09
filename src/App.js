import './App.css';
import { Admin } from "./dulieu/Admin";
import { Outlet, Route, Routes } from "react-router-dom";
import { Student } from "./dulieu/student";
import { Addstudent } from "./dulieu/Addstudent";
import {Detailx} from "./dulieu/Detailx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Admin/>}>
                    <Route path="students" element={<Student/>}/>
                    <Route path="students/add" element={<Addstudent/>}/>
                    <Route path="students/detail/x" element={<Detailx/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
