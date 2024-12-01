import React from "react";
import Image from "next/image";
import IM from "../../../public/IM1.png";
import IM2 from "../../../public/IM2.png";
import IM3 from "../../../public/IM3.png";
import IM4 from "../../../public/IM4.png";

function Project() {
  return (
    <div id="Project">
      <div className="text-blue-500 text-center mt-10 text-xl font-bold">
        Projects
        <div className="text-3xl  text-black mt-10 ">
          What I have made?
          <div className="mx-auto flex  gap-5 mt-5 ">
            <Image src={IM} alt="IM" width={300} height={300} />

            <Image src={IM2} alt="IM" width={300} height={300} />
            <Image src={IM3} alt="IM" width={300} height={300} />
          </div>
          <div className="flex mx-auto gap-5">
            <Image src={IM4} alt="IM" width={300} height={300} />
            <Image src={IM4} alt="IM" width={300} height={300} />
            <Image src={IM4} alt="IM" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
