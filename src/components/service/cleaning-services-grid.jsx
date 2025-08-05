import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';

const CleaningServicesGrid = () => {
    // Get only the cleaning services (first 5 items)
    const cleaningServices = service_data.slice(0, 5);
    
    return (
        <>
            <div className="tp-cleaning-services-grid pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-section-wrapper mb-60 text-center">
                                <h3 className="tp-section-title tp-title-anim">Our Professional Cleaning Services</h3>
                                <p>Comprehensive cleaning solutions for your home and office</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {cleaningServices.map((service, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div className="tp-cleaning-service-item">
                                    <div className="tp-cleaning-service-icon">
                                        {service.icon}
                                    </div>
                                    <div className="tp-cleaning-service-content">
                                        <h4 className="tp-cleaning-service-title">
                                            <Link href={service.link || "/service"}>{service.title}</Link>
                                        </h4>
                                        <p className="tp-cleaning-service-description">
                                            {service.description}
                                        </p>
                                        <div className="tp-cleaning-service-link">
                                            <Link href={service.link || "/service"}>
                                                Learn More <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CleaningServicesGrid;
