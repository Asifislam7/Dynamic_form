"use client";
import React, { useState, useEffect } from "react";
type FormData = {
  name: string;
  email: string;
  phone: number;
  relexp: number;
  portfolio: string;
  mngexp: string;
  date: string;
  time: string;
};
type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  relexp?: string;
  portfolio?: string;
  mngexp?: string;
  date?: string;
  time?: string;
};
const Level3form = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const showRelevantExperience =
    selectedPosition === "option1" || selectedPosition === "option2";
  // this is used in the typescript for defining the data types of the parameters , it is not required in javascript
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: 0,
    relexp: 0,
    portfolio: "",
    mngexp: "",
    date: "",
    time: "",
  } as FormData);
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    phone: "",
    relexp: "",
    portfolio: "",
    mngexp: "",
    date: "",
    time: "",
  });
  useEffect(() => {
    let newErrors: Errors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.portfolio.trim()) newErrors.portfolio = "URL is required";
    if (!formData.mngexp && !formData.relexp)
      newErrors.mngexp = " Management Experience is required";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.time.trim()) newErrors.time = "Time is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email must be a valid email format";
    }

    // Age validation
    if (!formData.phone) {
      newErrors.phone = "phone number is required";
    } else if (
      isNaN(Number(formData.phone)) ||
      formData.phone.toString().length !== 10
    ) {
      newErrors.phone = "Phone number must be of 10 digits";
    }

    //relevant exp validation

    if (!formData.relexp || formData.relexp <= 0)
      newErrors.relexp = "Experience is required";

    setErrors({
      name: newErrors.name || "",
      email: newErrors.email || "",
      phone: newErrors.phone || "",
      relexp: newErrors.relexp || "",
      portfolio: newErrors.portfolio || "",
      mngexp: newErrors.mngexp || "",
      date: newErrors.date || "",
      time: newErrors.time || "",
    });
  }, [formData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Rest of your form submission logic
    console.log(isSubmitted);
  };
  return (
    <>
      <div className=" lg:w-2/3  mt-5 mx-auto bg-white shadow-md p-8 rounded-md font-sans">
        <h2 className="text-3xl font-extrabold m-5 text-center text-purple-400 bg-gray-50 font-mono">
          Survey form (with Additional Questions)
        </h2>
        <h2 className="text-xl font-bold mb-4 text-center">Personal Details</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      type="email"
                      name="email"
                      id="username"
                      value={formData.email || " "}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name || " "}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 required"
                  />
                </div>
                <div className=" sm:col-span-3 mt-4">
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={4}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  placeholder="Enter your feedback here..."
                ></textarea>
              </div>
              </div>
             
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Survey Topic
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="option1">Technology</option>
                    <option value="option2">Health</option>
                    <option value="option3">Education</option>
                  </select>
                </div>
                {selectedPosition === "option1" && (
                  <>
                    <div className="mt-2">
                      <label
                        htmlFor="dropdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Survey Topic
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        //  value={selectedPosition}
                        //  onChange={(e) => setSelectedPosition(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="option1">Javascript</option>
                        <option value="option2">Python</option>
                        <option value="option3">Java</option>
                        <option value="option3">C#</option>
                      </select>
                    </div>
                    <div className="sm:col-span-3 mt-4">
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Relevant Experience (Number of years)
                      </label>
                      <input
                        type="number"
                        name="experience"
                        id="experience"
                        value={formData.relexp}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            relexp: Number(e.target.value),
                          });
                        }}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        placeholder="Enter number of years"
                      />
                    </div>
                  </>
                )}
                {selectedPosition === "option2" && (
                  <>
                    <div className="mt-2">
                      <label
                        htmlFor="dropdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Excercise Frequency
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        // value={selectedPosition}
                        // onChange={(e) => setSelectedPosition(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="option1">Daily</option>
                        <option value="option2">Weekly</option>
                        <option value="option3">Monthly</option>
                        <option value="option3">Rarely</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor="dropdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Diet Prefernece
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        // value={selectedPosition}
                        // onChange={(e) => setSelectedPosition(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="option1">Vegetarian</option>
                        <option value="option2">Vegan</option>
                        <option value="option3">Non-Vegetarian</option>
                      </select>
                    </div>
                  </>
                )}
                {selectedPosition === "option3" && (
                  <>
                    <div className="mt-2">
                      <label
                        htmlFor="dropdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Highest Qualification
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        // value={selectedPosition}
                        // onChange={(e) => setSelectedPosition(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="option1">High School</option>
                        <option value="option2">Bachelors</option>
                        <option value="option3">Masters</option>
                      </select>
                    </div>
                    <div className="mt-2">
                    <label
                  htmlFor="Field"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Field of Study
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="study"
                    id="study"
                    // value={formData.name || " "}
                    // onChange={(e) => {
                    //   setFormData({ ...formData, name: e.target.value });
                    // }}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 required"
                  />
                </div>
                    </div>
                  </>
                )}
                
              </div>
              
            </div>
          </div>
          {isSubmitted && errors.name && (
            <p className="text-xl font-bold m-5 text-center text-red-500 animate-bounce">
              {errors.name}
            </p>
          )}
          {isSubmitted && errors.email && (
            <p className="text-xl font-bold m-5 text-center text-red-500 animate-bounce">
              {errors.email}
            </p>
          )}

          <h2 className="text-xl font-bold mb-4 text-center">
            Form Submission Data:
          </h2>
          {isSubmitted && errors.name === "" && (
            <p className="text-xl font-bold m-5  uppercase text-center text-yellow-500 animate-bounce">
              Name of the Applicant : {formData.name}
            </p>
          )}
          {isSubmitted && errors.email === "" && (
            <p className="text-xl font-bold m-5 uppercase text-center text-yellow-500 animate-bounce">
              Email : {formData.email}
            </p>
          )}

          <div className="flex justify-center">
            <button
              className="rounded-md mt-5 bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-50 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Level3form;
