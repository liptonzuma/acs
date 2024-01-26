/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DivWrapper from '../shared/DivWrapper';
import RedText from '../shared/RedText';
import { GoSponsorTiers, GoGoal, GoTelescope } from 'react-icons/go';
import Card from '../shared/Card';

const traits = [
  {
    title: 'the mission.',
    icon: <GoGoal />,
    description:
      'We sustainably delight our customers with information solutions powered by the best in kind talent,processes, and technologies.',
  },
  {
    title: 'the vision.',
    icon: <GoTelescope />,
    description:
      'To become the best provider of enterprise information solutions in the world ergo; we ensure we deliver just as specified or agreed.',
  },
  {
    title: 'the values.',
    icon: <GoSponsorTiers />,
    description:
      'We are keen on making these characteristics as obvious at first glance as possible; ingeniuty,collaborative,accountable,resilient and empathetic.',
  },
];

export default function CoreValues() {
  return (
    <section
      id="values"
      className="flex  flex-col bg-gray-200  items-center p-[50px] py-[8rem]"
    >
      <DivWrapper className="">
        <div className="flex md:flex-row flex-col max-sm:items-center items-end gap-[30px]">
          <div className="md:w-1/2">
            <h1 className="capitalize text-4xl font-semibold">
              Preserved traits and values at <RedText>ACS.</RedText>
            </h1>
            <p className="mt-[8px] text-[18px] opacity-85">
              These are some of our traits that we've carried on to every single
              project we've worked on. This is more like our secret ingredient
              yet we want you to have it.
            </p>
          </div>
          <div className="md:w-1/2 bg-white p-[8px] rounded-[4px]">
            <div className="flex items-stretch gap-[10px]">
              <div className="w-[8px] bg-[var(--primary-red)]"></div>
              <p className="text-[18px] opacity-85">
                As a reliable supplier of technical and project management
                talent on an outsourcing basis, these are the core values that
                we instill in our team.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[3rem] flex  gap-[24px]  flex-wrap">
          {traits.map((trait, i) => (
            <Card key={trait.title}>
              <div className="flex mb-[12px] gap-[10px]">
                <div className="text-4xl text-[var(--primary-red)]">
                  {trait.icon}
                </div>
                <h2 className="capitalize font-bold text-3xl  opacity-80">
                  {trait.title}
                </h2>
              </div>

              <p>{trait.description}</p>
            </Card>
          ))}
        </div>
      </DivWrapper>
    </section>
  );
}
