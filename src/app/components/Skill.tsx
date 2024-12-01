import React from "react";
import Image from "next/image";
import HT from "../../../public/Ht.png";
import CS from "../../../public/CSS.png";
import BS from "../../../public/BS.png";
import TW from "../../../public/TW.png";
import PH from "../../../public/PH.png";
import LL from "../../../public/LL.png";
function Skill() {
  return (
    
    <div id="Skill"  className=" bg-blue-50flex justify-between items-center flex-col">
      <div className="text-xl text-blue-500 text-center mt-10">
        Skills
        <div className="text-black text-4xl mt-5 font-bold mb-5">
          What I am capable of?
          <div className="flex justify-between items-center mt-10 gap-8">
            <Image src={HT} alt="HTML" width={70} height={70} />

            <Image src={CS} alt="CSS" width={70} height={70} />

            <Image src={BS} alt="BS" width={70} height={70} />

            <Image src={TW} alt="TW" width={70} height={70} />

            <Image src={PH} alt="PH" width={70} height={70} />

            <Image src={LL} alt="LL" width={70} height={70} />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Skill;
