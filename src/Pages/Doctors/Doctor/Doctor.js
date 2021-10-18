import React from 'react';


const Doctor = (props) => {
    const { specialized, img, name, description } = props.doctor;
    return (
        <div class="col">
            <div className="choose-card card  h-100 p-4 border-0">

                <div class="photo-frame my-5">
                    <div class="photo">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>

                <div className="my-3">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <div className="d-flex justify-content-around">
                    </div>
                    <p class="card-text text-center text-secondary">{description.slice(0, 150)}</p>
                    <h5 class="card-text fw-bold"> <span className="service-text">Specialized at-</span> {specialized}</h5>

                    <button
                        className="text-white fw-bold border-0  rounded-pill p-3 mx-auto btn-danger">See More <i className="fas fa-arrow-circle-right"></i>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Doctor;