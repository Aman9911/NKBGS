"use client";
import React, { useState } from "react";
import Container from "@/app/components/Container";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { useForm } from "react-hook-form";
import authService from "@/appwrite/auth";
import toast from "react-hot-toast";
import Link from "next/link";
import conf from "@/conf/conf";

const ForgotPassword = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  console.log("conf.url:", conf.url);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleForm = async (data) => {
    setIsDisabled(true);
    if (data.email) {
      const response = await authService.sendRecoveryEmail(data.email);
      if (response) {
        toast.success("Recovery email sent", { position: "top-right" });
      } else {
        toast.error("Email not found", { position: "top-right" });
      }
      reset();
      setIsDisabled(false);
    }
  };

  return (
    <Container>
      <main className="w-full max-w-md mx-auto p-6 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-18 w-auto"
            src={logo}
            alt="logo"
            width={2500}
            height={2500}
          />
        </div>
        <div className="mt-2 bg-white  rounded-xl shadow-lg border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Remember your password?
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/admin/login"
                >
                  Login here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit(handleForm)}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        {...register("email", {
                          required: "Please enter email",
                          pattern: {
                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                            message: "Email not valid",
                          },
                        })}
                        className={`${
                          errors.email && "focus:ring-red-500"
                        } block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`${
                      isDisabled && "cursor-not-allowed opacity-70"
                    } flex w-full justify-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default ForgotPassword;
