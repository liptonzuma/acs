'use client';
import React from 'react';
import DivWrapper from '../shared/DivWrapper';
import RedText from '../shared/RedText';
import BarCard from '../shared/BarCard';
import Button from '../shared/Button';

function ReadMoreButton({ onClickHandler }: { onClickHandler: () => void }) {
  return (
    <Button
      label="Learn more "
      className=" opacity-70 outline-none bottom-[0.5rem] underline capitalize font-semibold absolute right-[2rem]"
      onClick={onClickHandler}
    />
  );
}

export default function ProuctAndServices() {
  return (
    <section
      id="services"
      className="flex  flex-col bg-[var(--primary-gray)]  items-center p-[50px] pb-[4rem]"
    >
      <DivWrapper className="flex max-md:flex-col bg-white p-[4rem] rounded-[6px] gap-[24px]">
        <div className="first md:w-[55%]">
          <h1 className="font-semibold max-sm:text-[2rem] text-[2.7rem] opacity-80 leading-tight  capitalize">
            Our <RedText>arsenal</RedText> of products & services.
          </h1>
          <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px] my-[2rem] mb-[1rem] rounded-[8px]">
            <h3 className="font-semibold text-[1.5rem] opacity-75">
              Software Development Outsourcing.
            </h3>
            <p className="mt-[14px] text-lg opacity-70">
              We closely partner with customer teams to enable the effective
              delivery of their strategic initiatives that depend on technology
              to be successful.
            </p>
            <ReadMoreButton onClickHandler={() => {}} />
          </div>

          <div className="flex max-md:flex-col gap-[14px]">
            <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px]  rounded-[8px]">
              <h3 className="font-semibold text-[1.5rem] opacity-75">
                People Management Solutions.
              </h3>
              <p className="mt-[14px] text-lg opacity-70">
                Our Adaptive HRIS is a top-tier human capital management system
                with integrated benefits, serving diverse industries for
                efficient people resource management.
              </p>
              <ReadMoreButton onClickHandler={() => {}} />
            </div>

            <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px]  rounded-[8px]">
              <h3 className="font-semibold text-[1.5rem] opacity-75">
                Voice Applications.
              </h3>
              <p className="mt-[14px] text-lg opacity-70">
                Conversational interfaces offer cost-effective business app
                delivery. Our Adaptive Voice enables rapid deployment with full
                functionality.
              </p>
              <ReadMoreButton onClickHandler={() => {}} />
            </div>
          </div>
        </div>
        <div className="md:w-[45%]">
          <BarCard
            textClassName="opacity-75"
            parentClassName=" bg-[var(--primary-gray)!important]"
            text="Your business can improve our world. Therefore, let’s handle technology complexities in your brilliant ideas. This way you can concentrate on your core business.We believe in the potential of the African people and resources when it comes to technologysolutions to local, continental and global business and social challenges.
            "
          />
          <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px] my-[1.3rem] rounded-[8px]">
            <h3 className="font-semibold text-left text-[1.5rem] opacity-75">
              Telecom Platform.
            </h3>
            <p className="mt-[14px] text-lg opacity-70">
              ACS Provisioning is a comprehensive suite for bundles, products,
              and services activation and management, with modular design for
              scalability, compatibility with standard servers running Linux,
              and modern technologies for rapid promotions and configuration.
            </p>
            <ReadMoreButton onClickHandler={() => {}} />
          </div>
        </div>
      </DivWrapper>
    </section>
  );
}
