'use client';
import React, { useState } from 'react';
import DivWrapper from '../../components/shared/DivWrapper';
import RedText from '../../components/shared/RedText';
import BarCard from '../../components/shared/BarCard';
import Button from '../../components/shared/Button';
import Modal from '../../components/shared/Modal';
import { RiCodeSSlashFill, RiUserVoiceLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineSettingsInputAntenna } from 'react-icons/md';
import { services } from './services';

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
  const [modalOpened, setModalOpened] = useState(false);
  const [content, setContent] = useState(services[0]);

  function displayContent(number: number) {
    const retrievedContent = services[number];
    setContent(retrievedContent);
    setModalOpened(true);
  }
  return (
    <section
      id="products&services"
      className="flex scroll-mt-[80px] flex-col bg-[var(--primary-gray)]  items-center p-[50px] pb-[4rem]"
    >
      <DivWrapper className=" bg-white p-[4rem] rounded-[6px] ">
        <Modal open={modalOpened} setOpen={setModalOpened}>
          <div className="">
            <h1 className="font-semibold text-3xl max-sm:text-2xl mb-[18px] capitalize opacity-75">
              {content.title}.
            </h1>
            <div>
              <p className=" text-lg opacity-70 font-normal">
                {content.description}
              </p>
              {content.subDescription && (
                <p className="mt-[18px] text-lg opacity-65 font-normal">
                  {content.subDescription}
                </p>
              )}
              {content.list && (
                <ul className="mt-[18px]">
                  {content.list.map((item, index) => (
                    <li
                      key={index.toString()}
                      className="mb-[12px] text-lg opacity-65"
                    >
                      <RedText className="font-medium text-black">
                        {index + 1}.
                      </RedText>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Modal>
        <div className="flex max-md:flex-col gap-[24px]">
          <div className="first md:w-[60%]">
            <h1 className="font-semibold max-sm:text-[2rem] text-[2.7rem] opacity-80 leading-tight  capitalize">
              Our <RedText>arsenal</RedText> of products & services.
            </h1>
            <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px] my-[2rem] mb-[1rem] rounded-[8px]">
              <div className="flex items-center gap-[8px]">
                <RiCodeSSlashFill
                  size={30}
                  className="font-bold  text-[var(--primary-red)]"
                />

                <h3 className="font-semibold text-[1.3rem] opacity-75">
                  Software Development Outsourcing.
                </h3>
              </div>
              <p className="mt-[14px] text-lg opacity-70">
                We closely partner with customer teams to enable the effective
                delivery of their strategic initiatives that depend on
                technology to be successful.
              </p>
              <ReadMoreButton onClickHandler={() => displayContent(0)} />
            </div>

            <div className="flex max-md:flex-col gap-[14px]">
              <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px]  rounded-[8px]">
                <div className="flex items-start gap-[8px]">
                  <BsPeople
                    className="font-bold  text-[var(--primary-red)]"
                    size={30}
                  />

                  <h3 className="font-semibold text-[1.3rem] opacity-75">
                    People Management Solutions.
                  </h3>
                </div>

                <p className="mt-[14px] text-lg opacity-70">
                  Our Adaptive HRIS is a top-tier human capital management
                  system with integrated benefits, serving diverse industries
                  for efficient people resource management.
                </p>
                <ReadMoreButton onClickHandler={() => displayContent(1)} />
              </div>

              <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px]  rounded-[8px]">
                <div className="flex items-start gap-[8px]">
                  <RiUserVoiceLine
                    size={30}
                    className="font-bold  text-[var(--primary-red)]"
                  />

                  <h3 className="font-semibold text-[1.3rem] opacity-75">
                    Voice Applications.
                  </h3>
                </div>
                <p className="mt-[14px] text-lg opacity-70">
                  Conversational interfaces offer cost-effective business app
                  delivery. Our Adaptive Voice enables rapid deployment with
                  full functionality.
                </p>
                <ReadMoreButton onClickHandler={() => displayContent(2)} />
              </div>
            </div>
          </div>
          <div className="md:w-[40%]">
            <BarCard
              textClassName="opacity-75"
              parentClassName=" bg-[var(--primary-gray)!important]"
              text="Your business can improve our world. Therefore, let’s handle technology complexities in your brilliant ideas. This way you can concentrate on your core business.We believe in the potential of the African people and resources when it comes to technologysolutions to local, continental and global business and social challenges.
            "
            />
            <div className="p-[2rem] relative bg-[var(--primary-gray)] border-[1.3px] my-[1.3rem] rounded-[8px]">
              <div className="flex items-start gap-[8px]">
                <MdOutlineSettingsInputAntenna
                  size={30}
                  className="font-bold  text-[var(--primary-red)]"
                />

                <h3 className="font-semibold text-[1.3rem] opacity-75">
                  Telecom Platform.
                </h3>
              </div>

              <p className="mt-[14px] text-lg opacity-70">
                ACS Provisioning is a comprehensive suite for bundles, products,
                and services activation and management, with modular design for
                scalability, compatibility with standard servers running Linux,
                and modern technologies for rapid promotions and configuration.
              </p>
              <ReadMoreButton onClickHandler={() => displayContent(3)} />
            </div>
          </div>
        </div>
      </DivWrapper>
    </section>
  );
}
