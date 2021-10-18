import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const { id, img, name, price, description } = props.service;

    return (

        <div class="col">
            <div className="choose-card card  h-100 p-4 border-0">
                <img className="img-fluid" src={img} alt="" />
                <div className="my-3">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <div className="d-flex justify-content-around">
                    </div>
                    <p class="card-text text-center text-secondary">{description.slice(0, 150)}</p>
                    <h3 class="card-text fw-bold"> ${price}</h3>
                    <Link to={`/ordernow/${id}`}>
                        <button 
                        className="text-white fw-bold border-0  rounded-pill p-3 mx-auto btn-danger">See More <i className="fas fa-arrow-circle-right"></i> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;