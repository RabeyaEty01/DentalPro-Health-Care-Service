import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    let { id } = useParams();


    const [singleServiceDetails, setSingleServiceDetails] = useState([]);

    const [singleServiceData, setSingleServiceData] = useState({});

    //data load
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleServiceDetails(data))
    }, [])

    //it will be called when all data already loaded
    useEffect(() => {
        const foundService = singleServiceDetails.find(services => services.id == id)
        setSingleServiceData(foundService)

    }, [singleServiceDetails])

    return (
        <div className="container">
            <Link to="/home">
                <span className="float-start border rounded-pill px-5 py-2 bg-white fw-bold"> <i className="fas fa-arrow-left"></i> Back</span>
            </Link>
            <br />
            <div class="mb-3 container">
                <img className="img-fluid rounded" src={singleServiceData?.img} alt="" />
                <div class="row g-0 my-5">

                    <div class="card-body my-3 ">
                        <h1 class="card-title fw-bold">{singleServiceData?.name}</h1>
                        <h3 className="fw-bold">${singleServiceData?.price}</h3>
                        <p class="card-text text-secondary">{singleServiceData?.description}</p>

                        <Link to="#">
                            <span className="border rounded-pill px-5 py-2 bg-danger text-white fw-bold"> <i className="fas fa-shopping-cart"></i> Order Now</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};








export default ServiceDetails;