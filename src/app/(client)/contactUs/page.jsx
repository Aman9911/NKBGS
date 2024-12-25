"use client"
import Container from "@/app/components/client/Container";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {   
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message has been sent! We'll get back to you soon.", { position: "top-right" })
        reset()
      } else {
        toast.error("Failed to send message. Please try again later.",{position:'top-right'})
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.",{position:'top-right'})
    }
  };

  return (
    <Container>
      <div className="container mx-auto p-6">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="">
            <div className="bg-white/30 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg p-4">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                We would love to hear from you! Feel free to reach out to us for
                any inquiries.
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Address</h3>
                <p>N.K.Bagrodia Global School Sector-17, Phase-II, Dwarka</p>
                <p>New Delhi-110078(India)</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Email</h3>
                <p>nkbglobalschool@gmail.com</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+91-11-42801001, 42801002</p>
              </div>
            </div>
            {/* Google Map Embed */}
            <div className="mt-6 bg-white/30 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg p-4 ">
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2320778619214!2d77.02746157477036!3d28.59281377568638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aba40000001%3A0x7951c900e92031af!2sN.K.%20Bagrodia%20Global%20School!5e0!3m2!1sen!2sin!4v1731646783485!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-60"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white/30 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-xs float-right">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs float-right">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && <p className="text-red-500 text-xs float-right">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                  {...register("text", { required: "Message is required" })}
                ></textarea>
                {errors.name && <p className="text-red-500 text-xs float-right">{errors.text.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {isSubmitSuccessful && <p className="mt-4 text-center text-green-700">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
