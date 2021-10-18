import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId}= useParams({});

    return (
        <div>
            <h2>This is Service details: {serviceId}</h2>
           
           
        </div>
    );
};

export default ServiceDetails;