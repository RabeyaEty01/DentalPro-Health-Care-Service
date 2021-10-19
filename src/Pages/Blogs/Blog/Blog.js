import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { img, name, comment, writer, date, description } = props.blog;
    return (
        <div class="col">
            <div className="card h-100 p-4 border-0">
                <img className="img-fluid" src={img} alt="" />
                <div className="mx-5 my-2">
                    <h1 className="card-title fw-bold">{name}</h1>

                    <div className="d-flex justify-content-around">
                        <p class="card-text  text-primary service-text">
                            <i class="fas fa-calendar-alt"></i> {date}</p>

                    </div>

                    <div className="d-flex justify-content-around">
                    </div>
                    <p class="card-text text-start text-secondary">{description}</p>

                    <Link to="#">
                        <button
                            className="text-white fw-bold border-0  rounded-pill p-3 mx-auto btn-danger">See More <i className="fas fa-arrow-circle-right"></i> </button>
                    </Link>

                    <hr />
                    <div className="d-flex justify-content-around">
                        <p class="card-text text-primary mt-5 service-text">
                            <span className="text-dark"><i class="fas fa-user text-primary"></i> written By:</span> {writer}</p>
                        <p class="card-text text-primary mt-5 service-text">
                            <i class="fas fa-comment-alt"></i> {comment} Comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;