import React from "react";
import Image from "next/image";
import Im4 from "../../../public/f4-3.png";

function About() {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={Im4}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="title-font sm:text-xl text-xl mb-4 font-medium text-blue-500">
              About
            </p>

            <div className="text-4xl font-bold mb-2"> About Me?</div>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              esse illo maiores inventore ratione officiis possimus optio nam
              voluptatum dignissimos, quasi qui deleniti culpa libero
              consequatur repellendus sit expedita voluptatem velit aut
              quibusdam quidem facere rem? Et doloribus magni nihil eveniet hic
              corporis, maiores reprehenderit animi nisi ab fuga distinctio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
