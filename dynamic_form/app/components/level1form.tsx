"use client";
import React, { useState, useEffect } from "react";
type FormData = {
  name: string;
  email: string;
  age: number;
  guestName: string;
};
type Errors = {
  name?: string;
  email?: string;
  age?: string;
  guestName?: string;
};
const Level1form = () => {
  const [guestComing, setGuestComing] = useState(false);
  // this is used in the typescript for defining the data types of the parameters , it is not required in javascript
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age:0,
    guestName: '',
  } as FormData);
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    age:'',
    guestName: '',
  });
  useEffect(() => {
    let newErrors: Errors = {};
  
    // Name validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
  
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email must be a valid email format';
    }
  
    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = 'Age must be a number greater than 0';
    }
  
    // Guest Name validation
    if (guestComing && !formData.guestName.trim()) {
      newErrors.guestName = 'Guest Name is required if attending with a guest';
    }
  
    setErrors({
      name: newErrors.name || '',
      email: newErrors.email || '',
      age: newErrors.age || '',
      guestName: newErrors.guestName || '',
    });
  }, [formData, guestComing]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Rest of your form submission logic
    console.log(isSubmitted)
  };
  return (
    <>
      <div className=" lg:w-2/3  mt-5 mx-auto bg-white shadow-md p-8 rounded-md font-sans">
        <h2 className="text-3xl font-extrabold m-5 text-center text-orange-400 bg-gray-50 font-mono">
          Event Registration Form
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
                      onChange={(e)=>{setFormData({...formData,email: e.target.value})}}
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
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name || " "}
                    onChange={(e)=>{setFormData({...formData,name: e.target.value})}}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 required"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="Age "
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="given-name"
                    value={formData.age || " "}
                    onChange={(e)=>{setFormData({...formData,age: Number(e.target.value)})}}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Are you coming with a guest?
                </label>
                <div>
                  <input
                    id="guest-yes"
                    name="guest"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={() => setGuestComing(true)}
                  />
                  <label
                    htmlFor="guest-yes"
                    className=" m-4 text-sm font-medium leading-6 text-gray-900 "
                  >
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    id="guest-no"
                    name="guest"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={() => setGuestComing(false)}
                  />
                  <label
                    htmlFor="guest-no"
                    className=" m-4 text-sm font-medium leading-6 text-gray-900 "
                  >
                    No
                  </label>
                </div>
                {guestComing && (
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Guest Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="guest-name"
                        id="guest-name"
                        autoComplete="given-name"
                        value={formData.guestName || " "}
                        onChange={(e)=>{setFormData({...formData,guestName: e.target.value})}}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isSubmitted && errors.name && <p className="text-xl font-bold m-5 text-center text-yellow-500 animate-bounce">{errors.name}</p>}
  {isSubmitted && errors.email && <p className="text-xl font-bold m-5 text-center text-yellow-500 animate-bounce">{errors.email}</p>}
  {isSubmitted && errors.age && <p className="text-xl font-bold m-5 text-center text-yellow-500 animate-bounce">{errors.age}</p>}
  {isSubmitted && errors.guestName && <p className="text-xl font-bold m-5 text-center text-yellow-500 animate-bounce">{errors.guestName}</p>}
  <h2 className="text-xl font-bold mb-4 text-center">Form Submission Data:</h2>
  {isSubmitted && errors.name ==='' && <p className="text-xl font-bold m-5  uppercase text-center text-red-500 animate-bounce">{formData.name}</p>}
  {isSubmitted && errors.email === '' && <p className="text-xl font-bold m-5 uppercase text-center text-red-500 animate-bounce">{formData.email}</p>}
  {isSubmitted && errors.age === '' && <p className="text-xl font-bold m-5 text-center uppercase text-red-500 animate-bounce">{formData.age}</p>}
  {isSubmitted && errors.guestName ==='' && <p className="text-xl font-bold m-5 text-center uppercase text-red-500 animate-bounce">{formData.guestName}</p>}
          <div className="flex justify-center">
          <button
                  className="rounded-md mt-5 bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-50 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  type="submit"
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

export default Level1form;
