'use client';
import React, { ElementRef, useRef } from 'react';
import DivWrapper from '../shared/DivWrapper';
import Link from 'next/link';
import Image from 'next/image';
import logo from './images/navLogo.png';
import { RiMenuFill } from 'react-icons/ri';

export default function Navbar() {
  const companyLinks = [
    {
      path: 'home',
      pathName: '/#home',
    },
    {
      path: 'about us',
      pathName: '/#about_us',
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
      path: 'contact us',
      pathName: '/#contact_us',
    },
  ];

  const otherLinks = [
    {
      path: 'portfolio',
      pathName: '/portofilio',
    },
    {
      path: 'careers',
      pathName: '/careers',
    },
    {
      path: 'blog',
      pathName: '/blog',
    },
    {
      path: 'adaptive HRIS',
      pathName: 'https://www.adaptivehris.com/',
    },
  ];

  const toggleRef = useRef<ElementRef<'input'>>(null);
  const closeMenu = () => toggleRef?.current?.click();

  return (
    <nav
      className={`
   max-md:w-[100%] w-[100vw!important] left-0 fixed top-0 z-[9999] items-center text-white bg-neutral-950 max-h-[80px] py-[30px] max-sm:px-[50px] flex justify-center
`}
    >
      <DivWrapper className="self-center  flex justify-between md:px-[30px]   max-md:hidden items-center ">
        <div className="company-links flex gap-[30px] ">
          {companyLinks.map((link, index) => (
            <Link
              href={link.pathName}
              key={link.path + index}
              className="capitalize font-medium text-base block hover:text-white  text-gray-400"
            >
              {link.path}
            </Link>
          ))}
        </div>

        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[80px] h-auto"
          />
        </Link>

        <div className="other-links flex gap-[20px] ">
          {otherLinks.map((link, index) => (
            <>
              {index === 3 && (
                <div
                  key={index.toString()}
                  className="w-[2px] h-[20px] mt-[5px] bg-gray-300"
                />
              )}
              <Link
                href={link.pathName + index}
                key={link.path}
                className="capitalize font-medium text-base block text-gray-400"
              >
                {link.path}
              </Link>
            </>
          ))}
        </div>
      </DivWrapper>

      <DivWrapper className="md:hidden drawer drawer-end ">
        <div className="drawer drawer-end">
          <input
            id="my-drawer-4"
            ref={toggleRef}
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex justify-between items-center">
            {/* Page content here */}

            <Link href="/" className="logo max-sm:-ml-[50px]">
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                className="w-[90px] h-auto"
              />
            </Link>
            <label
              htmlFor="my-drawer-4"
              className="drawer-button max-sm:-mr-[50px]"
            >
              <RiMenuFill size={35} className="" />
            </label>
          </div>

          {/* put links here */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-[80%] min-h-full text-gray-200 bg-neutral-950 ">
              {/* Sidebar content here */}
              <div className="company-links flex flex-col gap-[30px] pt-[40px]">
                {[...companyLinks, ...otherLinks].map((link, index) => (
                  <Link
                    href={link.pathName}
                    key={link.path}
                    className="capitalize font-medium text-base block  "
                    onClick={closeMenu}
                  >
                    {link.path}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DivWrapper>
    </nav>
  );
}
