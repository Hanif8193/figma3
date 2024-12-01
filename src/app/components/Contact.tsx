import React from "react";
import Image from "next/image";
import Li from "../../../public/Li.png"
import Gi from "../../../public/Gi.png"
import In from "../../../public/In.png"
function Contact() {
  return (
    <div id="Contact" className="bg-blue-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <p className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
              Contacts
            </p>
            <p className="text-2xl font-bold"> Get in touch</p>
            <p> rizfanher@gmail.com</p>
          
          <div className="flex gap-5 mt-1">
            <Image src={Li}alt="Li"width={20}height={20}/>
            <Image src={Gi}alt="GI"width={20}height={20}/>
             <Image src={In}alt="IN"width={20}height={20}/>
             </div>
        <div className="text-sm mt-10">
         <p> copyright @ 2023. Develop & Designed by Rizfan Herlaya </p>
        </div>
      </div>
    </div>
    </div> 
     </div>
);
}

export default Contact;
