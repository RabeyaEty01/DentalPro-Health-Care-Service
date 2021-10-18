import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = './services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container my-5">
            <h1 className="fw-bold service-text">-Our Services-</h1>
            <h3 className="text-secondary">Enjoy Specialized Care Through Precision, Artistry, And Experience</h3>
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;