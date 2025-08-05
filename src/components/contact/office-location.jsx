import React from 'react';


import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
import Image from 'next/image';



// office location data
const office_data = [
    {
        id: 1,
        cls:"p-relative",
        img: img_2,
        badge: "Main Office",
        location: "Netherlands",
        address: <>Warmoesstraat 149, Amsterdam, <br /> The Netherlands</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Main Office</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        {item.location}
                      </h5>
                      <p>{item.address}</p>
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

export default OfficeLocation;
