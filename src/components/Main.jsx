import Card from "./Card";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const Main = () => {
    const apiURL = 'http://localhost:3333/politicians'
    const [politicians, setPoliticians] = useState([])
    const [search, setSearch] = useState('') // stato per la ricerca

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

    const filteredPoliticians = useMemo(() => {
        const s = search.toLowerCase();
        return politicians.filter(p =>
            p.name?.toLowerCase().includes(s) ||
            p.biography?.toLowerCase().includes(s)
        );
    }, [politicians, search]);

    return (
        <main>
            <input
                type="text"
                placeholder="Cerca per nome o biografia"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="d-flex container">
                {filteredPoliticians.map(politician => (
                    <Card key={politician.id} data={politician} />
                ))}
            </div>
        </main>
    )
}

export default Main
