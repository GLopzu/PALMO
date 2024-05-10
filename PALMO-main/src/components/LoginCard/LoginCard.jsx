import React from "react";
import "./LoginCard.css";

export const LoginCard = () => {
  return (
    <div className="Container">
      <div className="custom-container p-8 border max-w-lg w-full border-black bg-[#EEE5E0]">
        <div className="flex flex-col items-center mb-6">
          <img src="src\assets\logoPALMO.png" alt="" />
          <h2 className="Instruction text-base sm:text-sm md:text-base lg:text-lg xl:text-xl text-center mb-2 pt-4">Enter your company details to get sign in your account</h2>
        </div>
        <form className="flex flex-col space-y-4">
          <input className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Company email" type="email" />
          <input className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Password" type="password" />
          <a className="text-sm text-gray-500 underline" href="#"> ¿Forgot your password? </a>
          <div className="LoginButton">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-6 py-2 w-full">Login</button>
          </div>
          <div className="LogInWith flex items-center my-6">
            <div className="flex-grow h-px bg-black"></div>
            <span className="mx-4 text-sm">Login with</span>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center">
          <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black hover:border-black h-10 px-4 flex items-center justify-center py-2 text-black">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" x2="12" y1="8" y2="8"></line>
    <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
    <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
  </svg>
  Authenticator
</button>

</div>
        </form>
        <p className="text-center text-sm mt-6">Copyright 2024 | PALMO</p>
      </div>
    </div>
  );
}