import React from "react";
import Instagram from "../assets/images/instagram-svgrepo-com.svg";
import Facebook from "../assets/images/facebook-svgrepo-com.svg";
function Footer() {
  return (
    <div className="bg-[#edf2f4] py-10">
        <div className="flex gap-20 justify-around">
      <div className="w-[20vw]">
        <div className="text-center font-medium py-3">
          <h1>Mobile.com</h1>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas
          autem, cupiditate possimus ullam eaque dicta animi facere odio
          placeat, illo sequi sed repudiandae. Repellat voluptatum quibusdam
          ducimus harum! Minus.
        </div>
      </div>
      <div>
        <div className="text-center font-medium py-3">
          <h1>Contact Us</h1>
        </div>
        <div>
          <ul>
            <li>Ph: +919876543210</li>
            <li>Email: mobile@example.com</li>
            <li>Address: Abc complex,Chennai</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-center font-medium py-3">
          <h1>Follow Us</h1>
        </div>
        <div>
          <div className="flex gap-2">
            <img src={Instagram} className="h-5" />
            <a href="#">Instagram</a>
          </div>
          <div className="flex gap-2">
            <img src={Facebook} className="h-5" />
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
