"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import authService from "@/appwrite/auth";
import Container from "@/app/components/Container";
import { useForm } from "react-hook-form";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [isDisabled, setIsDisabled] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const userPassword = watch("password");

  useEffect(() => {
    if (userId === null || secret === null) return;
    setTokenValid(true);
  }, [userId]);

  const handleResetPassword = async (data) => {
    setIsDisabled(true);
    if (!data.password) {
      toast.error("Please fill password", { position: "top-right" });
      return;
    }
    try {
      const response = await authService.resetPassword(
        userId,
        secret,
        data.password
      );
      if (response) {
        toast.success("Password change successfully", {
          position: "top-right",
        });
      } else {
        toast.error("Sorry, change password after some time", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred during password reset", {
        position: "top-right",
      });
    }
    router.push("/admin/login");
    reset();
  };

  if (tokenValid === false) {
    return <Loader />;
  }

  return (
    <Container>
      <main className="w-full max-w-md mx-auto p-6 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-18 w-auto"
            src={logo}
            alt="Your Company"
            width={2500}
            height={2500}
          />
        </div>
        <div className="mt-2 bg-white  rounded-xl shadow-lg border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                Reset your password
              </h1>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit(handleResetPassword)}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2"
                    >
                      New password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        {...register("password", {
                          required: "Please enter password",
                          pattern: {
                            value:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                            message: `- at least 8 characters \n
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
- Can contain special characters`,
                          },
                        })}
                        type="password"
                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2"
                    >
                      Confirm password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        {...register("confirmPassword", {
                          required: "Confirm Password is required",
                          validate: (value) =>
                            value === userPassword || "Password do not match",
                        })}
                        type="password"
                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`${
                      isDisabled && "cursor-not-allowed opacity-70"
                    } flex w-full justify-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  >
                    Update password
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

export default ResetPassword;
