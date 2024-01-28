/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DivWrapper from '../shared/DivWrapper';
import logo from './images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { GrLocation } from 'react-icons/gr';
import { IoCallOutline } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';

export const links = [
  {
    title: 'Company',
    links: [
      {
        path: 'home',
        pathName: '/#home',
      },
      {
        path: 'about us',
        pathName: '/about_us',
      },
      {
        path: 'services',
        pathName: '/#products&services',
      },
      {
        path: 'testimonies',
        pathName: '/#testimonies',
      },
      {
        path: 'careers',
        pathName: '/careers',
      },
    ],
  },
  {
    title: 'explore',
    links: [
      {
        path: 'tech stack',
        pathName: '/tech_stack',
      },
      {
        path: 'executive summary',
        pathName: '/executive_summary',
      },
      {
        path: 'service delivery',
        pathName: '/service_delivery',
      },
      {
        path: 'value proposition',
        pathName: '/value_proposition',
      },
    ],
  },
  {
    title: 'helpful links',
    links: [
      {
        path: 'adaptive HRIS',
        pathName: 'https://www.adaptivehris.com/',
      },
      {
        path: 'resources',
        pathName: '/resources',
      },
      {
        path: 'terms and conditions',
        pathName: '/terms_and_conditions',
      },
      {
        path: 'privacy policy',
        pathName: '/privacy_policy',
      },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex  flex-col bg-neutral-900  items-center p-[50px] pb-[4rem]">
      <DivWrapper>
        <div className="flex text-white md:justify-between max-md:flex-wrap gap-[30px]">
          <section className="md:w-1/4">
            <div className="w-[200px] h-[150px]">
              <Image src={logo} alt="logo" width={200} height={200} />
            </div>
            <p className="text-lg pl-[20px] opacity-65 text-white">
              Your most reliable supplier of technical and project management
              talents. We code dreams and we say it's possible.
            </p>

            <div className="flex mt-[12px] opacity-70 text-[var(--primary-red)] pl-[20px] gap-[14px]">
              <Link
                href="https://twitter.com/ACS_io"
                target="_blank"
                className="block"
              >
                <SlSocialTwitter size={28} />
              </Link>

              <Link
                href="https://web.facebook.com/adaptiveComputer"
                target="_blank"
                className="block"
              >
                <SlSocialFacebook size={28} />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UC5Tu3Zd9_qq_nXn4jbjwSPw"
                target="_blank"
                className="block"
              >
                <SlSocialYoutube size={28} />
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=233303937079"
                target="_blank"
                className="block"
              >
                <FaWhatsapp size={28} />
              </Link>
            </div>
          </section>
          {links.map((l, index) => (
            <section key={l.title} className="mt-[54px]">
              <h3 className="font-semibold text-[var(--primary-red)] capitalize text-xl">
                {l.title}
              </h3>
              <div className=" space-y-[10px] mt-[12px] font-medium text-lg">
                {l.links.map((link, i) => (
                  <Link
                    href={link.pathName}
                    className="block capitalize hover:underline opacity-65"
                    key={link.pathName}
                  >
                    {link.path}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        <hr className=" opacity-50 mt-[40px] " />
        <div className="flex flex-wrap gap-[20px] text-white justify-center mt-[24px] opacity-65 text-lg">
          <p>&copy;{year.toString()} Adaptive Computer Solutions</p>
          <div className="flex gap-[4px] items-center">
            <GrLocation size={16} className="text-[var(--primary-red)]" />
            <a
              className="  text-[var(--primary-red)]"
              target="_blank"
              href="https://maps.google.com/maps?q=5.66660213470459%2C-0.19484350085258484&amp;z=17&amp;hl=en"
            >
              <p className="texts">
                Hse #4, Jasmine St.Adjacent WW HOMES, Haasto
              </p>
            </a>
          </div>

          <div className="flex gap-[4px] items-center">
            <IoCallOutline size={19} className="text-[var(--primary-red)]" />
            <a
              href="tell://+233595950105."
              className="  text-[var(--primary-red)]"
            >
              +233 595 950 105.
            </a>
          </div>

          <div className="flex gap-[4px] items-center">
            <LuMail size={16} className="text-[var(--primary-red)]" />
            <a
              href="mailto://info@acsint.io"
              className=" text-[var(--primary-red)]"
            >
              info@acsint.io
            </a>
          </div>
        </div>
      </DivWrapper>
    </footer>
  );
}
