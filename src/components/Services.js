import React from 'react';
import { Element } from 'react-scroll';
import './Services.css';

const servicesData = [
  {
    name: 'Web Design',
    description: 'Our web design team crafts visually stunning, user-friendly websites tailored to meet your business goals. We prioritize responsiveness, ensuring your site looks great on any device. By combining creativity with the latest design trends, we create an online presence that truly reflects your brand\'s identity.',
    image: '/images/webdesign2.jpg',
    reverse: false,
  },
  {
    name: 'App Development',
    description: 'We specialize in developing custom mobile applications that enhance user engagement and drive business growth. Our dedicated team works closely with you to understand your vision and turn it into a functional app. From intuitive design to seamless functionality, we ensure your app provides an exceptional user experience.',
    image: '/images/app.jpg',
    reverse: true,
  },
  {
    name: 'Software Development',
    description: 'Our software development services provide scalable and reliable solutions that address your unique challenges. We employ the latest technologies and methodologies to ensure optimal performance and security. Whether you need a custom application or a system integration, we tailor our approach to fit your specific requirements.',
    image: '/images/dev.jpg',
    reverse: false,
  },
  {
    name: 'Content Marketing',
    description: 'With our content marketing strategies, we help you connect with your audience through compelling and relevant content. Our approach focuses on delivering value while driving engagement across multiple platforms. From blogs to social media campaigns, we create content that resonates and enhances your brand’s visibility.',
    image: '/images/content2.jpg',
    reverse: true,
  },
  {
    name: 'Content Creation',
    description: 'Our team of expert content creators crafts high-quality, engaging content tailored to your audience’s needs. We understand the importance of storytelling and leverage it to connect with your customers on a deeper level. From articles and videos to infographics, we deliver content that not only informs but also inspires.',
    image: '/images/content.jpg',
    reverse: false,
  },
  {
    name: 'Graphic Design',
    description: 'Our graphic design services aim to visually communicate your brand\'s message through creative and innovative designs. We work closely with you to understand your vision and translate it into stunning visuals that leave a lasting impression. Whether it’s for digital or print media, our designs are crafted to enhance your brand identity and attract your target audience.',
    image: '/images/graphic.jpg',
    reverse: true,
  },
  
];


const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <Element key={index} name={service.name.toLowerCase().replace(' ', '-')} className={`service-card ${service.reverse ? 'reverse' : ''}`}>
            <div className="content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <div className="image">
              <img src={service.image} alt={service.name} />
            </div>
          </Element>
        ))}
      </div>
    </section>
  );
};

export default Services;
