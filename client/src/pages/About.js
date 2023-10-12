import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            As an e-commerce company, we are dedicated to redefining the way you
            shop and experience online retail. At our core, we believe that
            convenience, quality, and customer satisfaction are paramount. Our
            mission is to provide a seamless and enjoyable shopping journey for
            all our customers. We offer a diverse range of products carefully
            curated to cater to your every need, from the latest fashion trends
            to cutting-edge technology. Our user-friendly website and mobile app
            have been designed with your comfort in mind, ensuring that you can
            shop from the comfort of your home or on the go. We take pride in
            our commitment to product quality and exceptional customer service.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
