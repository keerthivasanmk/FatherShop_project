"use client";
// Dependencies
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

// Images
import globeIcon from "/public/globe-icon.png";
import fathershopLogo from "/public/fathershop-logo.png";
import flag1 from "/public/flag1.png";
import flag2 from "/public/flag2.png";
import eyeOn from "/public/eye-on.svg";
import eyeOff from "/public/eye-off.svg";

// Components
import RightLayout from "/components/RightLayout.jsx";

// const flags = ["/flag1.png", "/flag2.png"];

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = (e) => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/i.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Form Validation logic
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/i.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      setErrors({});
      console.log("Form submitted successfully");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="w-1/2 p-5 flex flex-col justify-between tab:w-full">
          <div className="flex gap-1 items-center">
            <div>
              <Image src={globeIcon} alt={"globeIcon"} />
            </div>
            <select name="language" id="language" className="p-1">
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 items-center mt-5 form">
            <div className="flex flex-col gap-3 items-center w-[286px]">
              <Image
                src={fathershopLogo}
                alt={"globeIcon"}
                width={246}
                height={40}
                className="mb-5"
              />
              <h1 className="text-[28px] font-medium mb-3">Sign Up</h1>
              <form
                onSubmit={handleCreateAccount}
                className="flex flex-col gap-5 w-full"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="relative">
                  {/* <select
                    name="phoneNumber"
                    className="absolute left-0 bg-transparent"
                  >
                    {flags?.map((flag, index) => (
                      <option
                        key={index}
                        value={index}
                        style={{ backgroundImage: `url(${flag})` }}
                      ></option>
                    ))}
                  </select> */}
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && (
                    <div className="error">{errors.phoneNumber}</div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="relative">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <span
                    className="absolute top-4 right-3 cursor-pointer"
                    onClick={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                  >
                    <Image
                      src={isShowPassword ? eyeOn : eyeOff}
                      alt={"eyeIcon"}
                    />
                  </span>
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg p-2"
                >
                  Create Account
                </button>
              </form>
              <div className="text-sm mt-1">
                Already have an account?{" "}
                <Link href="/" className="font-bold">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm mt-1 flex justify-center text-light-gray">
            <span>
              By signing up, you agree to our{" "}
              <Link href="/terms-and-conditions" className="font-bold">
                Terms and Conditions
              </Link>
            </span>
          </div>
        </div>
        <RightLayout />
      </div>
    </div>
  );
}
