import React from 'react';
import aboutimg from '../../../images/doctors/2.jpg';

const About = () => {
    return (
        <div>
            <div className="container mt-5">
                <h1 className="fw-bold ">-About <span className="service-text">Us</span> -</h1>
                <h3 className="text-secondary">We Are A Award-Winning And Certified Hospital</h3>
                <div class="border-0 mb-3 p-5">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1 g-4 ">
                        <div class="col">
                            <img src={aboutimg} class="img-fluid rounded h-100" alt="..."></img>
                        </div>
                        <div class="col">
                            <div class="card-body text-start ps-5 ">
                                <h1 className="card-title fw-bold">Our Clients Are <span className="service-text ">Our Priority,We Offer </span> Quality Dental Services </h1>
                                <p class="card-text text-secondary mt-5 service-text">Another valuable type of dental service to offer at your practice is periodontal treatments. Such services include preventing, diagnosing, and treating diseases and conditions that impact the teeth’s supporting structures. Examples of supporting tissues include the gingiva, alveolar bone, periodontal ligament, and cementum. One of the main services that they provide is the treatment of gum disease, in both early and late stages, which may require surgery such as gum grafts or pocket reduction procedures. For patients with severe gum disease or medical histories which may complicate minor gum diseases, the services of a periodontal dental specialist are likely necessary.</p>
                                <p class="card-text d-flex justify-content-around text-secondary">
                                    <ul>
                                        <li>Complete Crown</li>
                                        <li>Dental Implants</li>
                                        <li>Teeth Whitening</li>
                                    </ul>
                                    <ul>
                                        <li>Dental X-Ray</li>
                                        <li>Cosmetic Filling</li>
                                        <li>Root Canal</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;