/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DivWrapper from '../../components/shared/DivWrapper';
import RedText from '../../components/shared/RedText';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import Image from 'next/image';

const mockTestimonies = [
  {
    title: 'sophisticated solutions',
    description:
      'The level of sophistication of your solution, the short time within which it was developed and its impact on our bottom-line, is quite impressive.',
    avatar: 'https://acsghana.com/images/user4.png',
    name: 'Samuel Asiedu',
    position: "Sam's job position.",
  },
  {
    title: 'Quality work output.',
    description:
      "The work output of the engineer assigned to our team must be highly commended for it's timeliness and quality.",
    avatar: 'https://acsghana.com/images/user2.png',
    name: 'Floxy Korkor Nartey',
    position: "Floxy's job positions",
  },
  {
    title: 'tremendous developer output.',
    description:
      'The two developers assigned to us have been tremendous in our customer trust restoration in our bundles and other products and services.',
    avatar: 'https://acsghana.com/images/user1.png',
    name: 'Alfred Neequaye',
    position: "Alfred's job position.",
  },
];

export default function Testimonies() {
  return (
    <section
      id="testimonies"
      className="flex scroll-mt-[60px]  flex-col bg-[var(--primary-gray)]  items-center p-[40px] pb-[4rem]"
    >
      <DivWrapper className=" p-[4rem] rounded-[6px] ">
        <h3 className="font-semibold text-2xl opacity-45">
          Empowering Business.
        </h3>
        <h1 className="font-semibold text-3xl capitalize mt-[6px]">
          Our <RedText>Credibility</RedText> Manifesting in our works.
        </h1>
        <p className="lg:w-[60%] font-normal text-lg opacity-75 mt-[10px]">
          This is just a few of the never ending remarks from some of our most
          recent clients.When your work stands out, no client would like to keep
          the excitement and satisfaction to themselves.
        </p>
        <div className="mt-[40px] flex max-md:flex-wrap  gap-[24px]">
          {mockTestimonies.map((testimony, index) => (
            <div
              key={testimony.title}
              className="bg-white relative hover:shadow-md cursor-pointer  p-[25px] rounded-[8px] md:w-1/3"
            >
              <BiSolidQuoteLeft
                size={40}
                className="absolute text-[var(--primary-red)] opacity-75 top-[-15px] left-[-15px]"
              />
              <h1 className="font-semibold capitalize text-xl opacity-80">
                {testimony.title}
              </h1>
              <p className="mt-[12px] text-lg opacity-70">
                {testimony.description}
              </p>
              <div className="mt-[20px] flex gap-[12px]">
                <div className="avatar">
                  <div className="w-[60px] rounded-[6px]">
                    <Image
                      width={200}
                      height={200}
                      alt="avatar"
                      src={testimony.avatar}
                    />
                  </div>
                </div>
                <div className="">
                  <h1 className="font-semibold capitalize text-xl opacity-80">
                    {testimony.name}
                  </h1>
                  <p className="font-medium opacity-60">{testimony.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivWrapper>
    </section>
  );
}
