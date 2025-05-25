import Card from "./Card";

import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
    const apiURL = 'http://localhost:3333/politicians'
    const [politicians, setPoliticians] = useState([])
    const fetchPoliticians = () => {
        axios.get(apiURL)
            .then((res) => {
                setPoliticians(res.data)
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchPoliticians();
    }, []);

    return (
        <main>
            <div className="d-flex container">
                {politicians.map(politician => (
                    <Card key={politician.id} data={politician} />
                ))}
            </div>
        </main>
    )
}

export default Main
