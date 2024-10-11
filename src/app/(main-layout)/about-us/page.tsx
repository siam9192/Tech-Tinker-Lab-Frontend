import React from 'react'

function page() {
  return (
    <div className=" dark:bg-dark-light rounded-lg P-5 md:p-10 dark:text-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center ">About Us</h2>
      <p className=" text-lg text-center mb-6">
        We are passionate about delivering exceptional products and services to our customers.
        Our dedicated team works tirelessly to meet your needs and provide solutions that help you
        succeed. With a commitment to quality and innovation, we continuously strive to make a positive impact in the industry.
      </p>

      <div className="flex justify-center">
        <div className="w-3/4  dark:bg-dark-mode p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold  mb-4 text-center">
            Our Mission
          </h3>
          <p className=" text-lg text-center">
          our mission is to empower individuals through the art of storytelling. We believe that every voice matters, and our platform is designed to provide a space where anyone can share their thoughts, knowledge, and creativity with the world. Whether you're a seasoned writer or someone exploring your passion for blogging, we aim to make it easy for you to express yourself and connect with a global audience. Through innovation and community-building, we strive to make sharing ideas simple, engaging, and impactful for all.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dark:bg-dark-mode  p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="">
          we envision a world where ideas, stories, and knowledge flow freely across borders and boundaries. Our goal is to create the most engaging and inclusive platform for bloggers and readers alike, where creativity and curiosity spark meaningful connections. We aim to become the leading destination for writers to showcase their work, and for readers to discover diverse perspectives, all while fostering a community that celebrates individuality, collaboration, and lifelong learning. By continuously innovating, we aspire to inspire, empower, and shape the future of digital storytelling.
          </p>
        </div>
        <div className="dark:bg-dark-mode p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold  mb-2">Our Values</h3>
          <p className="">
            We believe in integrity, accountability, and excellence. Our team is driven by these core values, ensuring that every decision we make is in the best interest of our customers and our community.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page