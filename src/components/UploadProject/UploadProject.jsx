import React from "react";
import "./UploadProject.css";

export const UploadProject = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <section className="w-full border-black border-r-0 p-6 md:w-80 md:border-r md:p-8 bg-white">
        <div className="Account flex flex-col items-center mb-12">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
            <img className="aspect-square h-full w-full" alt="Juan" src="./assets/3135715.png?width=72&amp;height=72" />
          </span>
          <h3 className="text-2xl font-semibold">HELLO, JUAN</h3>
          <p className="text-sm">Welcome back!</p>
        </div>
        <button className="LogOutButton inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white bg-black hover:bg-black/90 h-10 px-4 py-2 w-full border border-black">
          Log out
        </button>
      </section>
      <section className="UploadContainer flex-1 flex flex-col p-6 md:p-8">
        <h1 className="mb-10 text-4xl font-black md:text-7xl">UPLOAD NEW PROJECT</h1>
        <div className="flex flex-col md:flex-row mb-8 md:space-x-8">
          <div className="flex-1">
            <input
              className="h-10 w-full rounded-none border border-input border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Project title"
            />
            <select
              className="mt-4 h-10 w-full rounded-none border border-input border-black bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="members"
            >
              <option value="">Select members</option>
              <option value="Juan Pablo Marín">Juan Pablo Marín</option>
              <option value="Valentina Osma">Valentina Osma</option>
              <option value="Felipe">Felipe</option>
              <option value="José Lopera">José Lopera</option>
            </select>
            <select
              className="mt-4 h-10 w-full rounded-none border border-input border-black bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="categories"
            >
              <option value="">Choose categories</option>
              <option value="UX Research">UX Research</option>
              <option value="UI Design">UI Design</option>
              <option value="Branding">Branding</option>
              <option value="Development">Development</option>
              <option value="Post Production">Post Production</option>
            </select>
          </div>
          <div className="DescriptionContainer flex-1">
            <textarea
              className="mt-0 min-h-[150px] w-full rounded-none border border-input border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center p-6 mb-8 border-2 border-dashed border-black md:p-8">
          <div className="flex flex-col items-center">
            <p className="text-center">Drag &amp; Drop your project images here</p>
          </div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white bg-black hover:bg-black/90 h-10 px-4 py-2 w-full border border-black">
          Hire Us
        </button>
      </section>
    </div>
  );
};