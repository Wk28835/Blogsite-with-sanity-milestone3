import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-fit mx-auto p-6 space-y-12">
            <section className="text-center bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">
                    Welcome to our company! We are dedicated to providing exceptional service and quality products. Our team is passionate about what we do and strives to make a positive impact in our community.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">Services We Offer</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li className="hover:underline">Service 1: Description of service 1.</li>
                    <li className="hover:underline">Service 2: Description of service 2.</li>
                    <li className="hover:underline">Service 3: Description of service 3.</li>
                    <li className="hover:underline">Service 4: Description of service 4.</li>
                </ul>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Goals</h2>
                <p className="text-gray-700">
                    Our primary goal is to exceed our customers expectations by providing top-notch services and building lasting relationships. We aim to continuously improve our offerings and adapt to the ever-changing market needs.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">Get in Touch</h2>
                <p className="text-gray-700">
                    We would love to hear from you! If you have any questions or would like more information about our services, please reach out to us.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;

