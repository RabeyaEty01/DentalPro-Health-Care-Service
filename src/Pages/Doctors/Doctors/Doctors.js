import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../../Shared/Footer/Footer';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const url = './doctors.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div>
            <div className="container my-5">
                <h1 className="fw-bold service-text">-Our Certified Doctors-</h1>
                <h3 className="text-secondary">Enjoy Specialized Care Through Precision, Artistry, And Experience</h3>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>

                            )
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;