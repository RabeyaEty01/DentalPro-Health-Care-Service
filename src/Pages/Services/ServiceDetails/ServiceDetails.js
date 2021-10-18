import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        const url = './services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);

    return (
        <div>
            <h1>Service Item No : {id}</h1>
        </div>

    );
};

export default ServiceDetails;