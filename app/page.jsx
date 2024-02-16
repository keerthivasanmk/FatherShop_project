"use client";
// Dependencies
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import globeIcon from "/public/globe-icon.png";
import fathershopLogo from "/public/fathershop-logo.png";
import flag1 from "/public/flag1.png";
import flag2 from "/public/flag2.png";
import eyeOn from "/public/eye-on.svg";
import eyeOff from "/public/eye-off.svg";

// Components
import RightLayout from "/components/RightLayout.jsx";

export default function Home() {
  const [formData, setFormData] = useState({
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

  const handleLogin = (e) => {
    e.preventDefault();
    // Form Validation logic
    let errors = {};
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
    <main className="flex min-h-screen flex-col items-center justify-between">
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
              <h1 className="text-[28px] font-medium mb-3">Login</h1>
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-5 w-full"
              >
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
                  Login
                </button>
              </form>
              <div className="text-sm mt-1">
                Don't have an account?{" "}
                <Link href="/sign-up" className="font-bold">
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <RightLayout />
      </div>
    </main>
  );
}
