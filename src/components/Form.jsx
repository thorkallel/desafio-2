import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: `${data.name}`,
      text: `${data.email}`,
      icon: "success",
      confirmButtonText: "OK",
    });
    console.log(data);
  };

  return (
    <section className="py-20" id="form">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-5xl font-bold text-left mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
            Subscribe to our club
          </span>
        </h1>
        <p className="text-zinc-300 mb-10 max-w-2xl">
          Stay updated with the latest news, events, and exclusive offers. Join
          our community today!
        </p>
        <form
          className="space-y-6 flex flex-col items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none"
              {...register("name", { required: true })}
            />
          </div>
          <div className="space-y-2 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none"
              {...register("email", { required: true })}
            />
          </div>
          <div className="space-y-2 w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
              {...register("message", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};
