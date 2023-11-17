import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { AddUser } from "./Component/Adduser";
import { Updateuser } from "./Component/Updateuser";
import { Userlisting } from "./Component/Userlisting";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <h1>React Redux CRUD on JSON-SERVER API</h1>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Userlisting />} />
                    <Route path="/users/add" element={<AddUser />} />
                    <Route path="/users/edit" element={<Updateuser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
