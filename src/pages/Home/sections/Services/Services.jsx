


import "./Services.css";

import deliveryIcon from "../../../../assets/delivery.svg";
import supportIcon from "../../../../assets/support.svg";
import returnIcon from "../../../../assets/return.svg";

export default function Services() {
  const services = [
    {
      icon: deliveryIcon,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: supportIcon,
      title: "24/7 CUSTOMER SUPPORT",
      text: "Friendly 24/7 customer support",
    },
    {
      icon: returnIcon,
      title: "EASY RETURNS",
      text: "We reurn money within 30 days",
    },
  ];

  return (
    <section className="services">
      <div className="services-inner">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
