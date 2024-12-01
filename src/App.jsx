import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Product />
        </div>
    );
}

export default App;
