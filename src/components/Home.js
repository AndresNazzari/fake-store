import importFromFetch from "../firebase/import"
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        //solo se uso la primera vez para agregar todos los productos a la base datos desde la API FAKE STORE
        // importFromFetch()
    }, [])

    return (
        <div>
            Home
        </div>
    )
}

export default Home
