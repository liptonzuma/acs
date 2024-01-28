/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import Button from '../../components/shared/Button';
import Link from 'next/link';
import Image from 'next/image';
import pattern from './images/patterns.png';
import DivWrapper from '../../components/shared/DivWrapper';
import Clients from './Clients';
import RedText from '../../components/shared/RedText';

export const title = 'Adaptive computer solutions';
const whiteSpaceRegex = /^\s+$/;

export default function HeroSection() {
  return (
    <div
      className={`
    min-h-[100dvh]  bg-neutral-950  max-md:w-[100%] w-[100dvw] text-white p-[40px] max-sm:px-[50px] flex  flex-col items-center justify-center
  `}
    >
      <DivWrapper>
        <div className="md:w-1/2 md:hidden max-h-[200px] overflow-y-hidden mb-[30px]">
          <Image draggable={false} src={pattern} alt="pattern" />
        </div>

        <div className="flex md:flex-row flex-col gap-[30px]">
          <div className="md:w-1/2">
            <h1 className="font-medium md:text-[3.5rem] text-[2rem] capitalize md:leading-[4rem] leading-[3rem] ">
              <RedText>Best</RedText> software engineer outsourcing space.
            </h1>
            <p className="md:w-[90%]  text-[1.2rem] md:my-[3rem] my-[2rem] text-gray-300">
              Unlock the potential of your projects with our elite team of
              software engineering, agile scrum masters, and quality assurance
              experts. Partner with us for top-tier talent and unparalleled
              support in achieving your software development goals.
            </p>

            <div className="flex items-center flex-wrap  gap-[15px]">
              <Link
                href="#contact-us"
                className="font-bold max-sm:w-full flex items-center justify-center capitalize h-[50px] px-[3rem] text-lg bg-white rounded-[6px] text-neutral-950"
              >
                Get in touch
              </Link>

              <Link
                href=""
                className="font-semibold capitalize underline max-sm:text-center text-lg"
              >
                discover more on how we work.
              </Link>
            </div>
            <div className="mt-[24px] text-gray-300 text-[16px]">
              We're{' '}
              <span className="text-[var(--primary-red)] font-medium">
                {title}
              </span>
              , we code dreams and we say{' '}
              <span className="text-[var(--primary-red)] font-medium">
                it's possible.
              </span>
            </div>
          </div>

          <div className="md:w-1/2 max-md:hidden">
            <Image draggable={false} src={pattern} alt="pattern" />
          </div>
        </div>

        <Clients />
      </DivWrapper>

      {/* <div className="md:text-center flex md:items-center flex-col p-[20px] relative">
        <div className="flex">
          {title.split('').map((letter, index) => (
            <motion.span
              initial={{
                opacity: 0,
                translateY: -30,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.2,
                delay: index / 10,
              }}
              key={index.toString()}
              className="font-bold block lg:text-6xl  md:text-5xl  text-4xl xl:text-7xl capitalize"
            >
              {whiteSpaceRegex.test(letter) ? (
                <div className="w-4"></div>
              ) : (
                <div
                  className={`${
                    index > 17 ? 'text-[var(--primary-red)]' : 'text-white'
                  }`}
                >
                  {letter}
                </div>
              )}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.8,
          }}
          className="md:text-xl text-lg font-normal relative z-[9999]  md:w-[75%] mt-[1.5rem] lg:w-[60%] text-gray-400  leading-relaxed"
        >
          Unlock the potential of your projects with our elite team of software
          engineering, agile scrum masters, and quality assurance experts.
          Partner with us for top-tier talent and unparalleled support in
          achieving your software development goals.
        </motion.p>
      </div> */}
    </div>
  );
}
