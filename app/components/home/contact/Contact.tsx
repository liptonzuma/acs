/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { ElementRef, useRef } from 'react';
import DivWrapper from '../../shared/DivWrapper';
import { GrLocation } from 'react-icons/gr';
import { LuMail } from 'react-icons/lu';
import { IoCallOutline, IoSendOutline } from 'react-icons/io5';
import { BsCalendar2Day } from 'react-icons/bs';

export default function Contact() {
  const formRef = useRef<ElementRef<'form'>>(null);
  const nameRef = useRef<ElementRef<'input'>>(null);
  const subjectRef = useRef<ElementRef<'input'>>(null);
  const emailRef = useRef<ElementRef<'input'>>(null);
  const messageRef = useRef<ElementRef<'textarea'>>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = nameRef.current?.value;
    const subject = subjectRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    const data = { name, email, subject, message };
    console.log(data);

    return data;
  }
  return (
    <section
      id="contact-us"
      className="flex  flex-col bg-[var(--primary-gray)]  items-center p-[50px] pb-[4rem]"
    >
      <DivWrapper className="bg-neutral-900 text-white p-[4rem] rounded-[6px] ">
        <div className="flex max-md:flex-col gap-[30px]">
          <div className="md:w-1/2">
            <h3 className="font-semibold  text-2xl opacity-45 capitalize">
              Get in touch.
            </h3>
            <h2 className="font-semibold text-3xl">Need to talk to us?</h2>
            <p className="text-lg opacity-75 mt-[12px]">
              We're always ready to hear you out. Whenever you feel like talking
              to us, just send us a mail or pass through our office for an
              in-person discussion.
            </p>
            <div className="details mt-[24px] space-y-[12px]">
              <div className="flex gap-[8px]">
                <GrLocation size={25} className="text-[var(--primary-red)]" />

                <a
                  className="font-medium text-xl opacity-75 text-[var(--primary-red)]"
                  target="_blank"
                  href="https://maps.google.com/maps?q=5.66660213470459%2C-0.19484350085258484&amp;z=17&amp;hl=en"
                >
                  <p className="texts">
                    Hse #4, Jasmine St.Adjacent WW HOMES, Haasto
                  </p>
                </a>
              </div>

              <div className="flex gap-[8px]">
                <LuMail size={24} className="text-[var(--primary-red)]" />
                <a
                  href="mailto://info@acsint.io"
                  className="font-medium text-xl opacity-75 text-[var(--primary-red)]"
                >
                  info@acsint.io
                </a>
              </div>

              <div className="flex gap-[8px]">
                <IoCallOutline
                  size={25}
                  className="text-[var(--primary-red)]"
                />
                <a
                  href="tell://+233595950105."
                  className="font-medium text-xl opacity-75 text-[var(--primary-red)]"
                >
                  +233 595 950 105.
                </a>
              </div>

              <div className="flex gap-[8px]">
                <BsCalendar2Day
                  size={25}
                  className="text-[var(--primary-red)]"
                />
                <p className="font-medium text-xl opacity-75 text-[var(--primary-red)]">
                  Monday - Friday (8 Am - 5 Pm)
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-[18px] rounded-[8px] shadow-md">
            <h3 className="text-neutral capitalize  font-semibold text-3xl opacity-90">
              Contact us.
            </h3>
            <p className="text-lg text-neutral opacity-60 mb-[24px] mt-[10px]">
              Want to inform us briefly, fill this form and submit for a quick
              feedback.
            </p>
            {/* Didn't want to use formik */}
            <form
              ref={formRef}
              action=""
              onSubmit={handleSubmit}
              className="text-neutral"
            >
              <div className="flex max-sm:flex-col gap-[18px]">
                <input
                  placeholder="Name"
                  name="name"
                  className="bg-[var(--primary-gray)]  px-[10px] outline-gray-200 max-sm:w-full w-1/2 h-[45px] rounded-[6px]"
                  type="text"
                  required
                  ref={nameRef}
                />
                <input
                  placeholder="Email"
                  name="email"
                  className="bg-[var(--primary-gray)]  px-[10px] max-sm:w-full outline-gray-200 w-1/2 h-[45px] rounded-[6px]"
                  type="email"
                  required
                  ref={emailRef}
                />
              </div>

              <div className="my-[18px]">
                <input
                  placeholder="Subject"
                  name="subject"
                  className="bg-[var(--primary-gray)] w-full outline-gray-200 px-[10px] h-[45px] rounded-[6px]"
                  type="text"
                  required
                  ref={subjectRef}
                />
              </div>

              <div className="my-[18px]">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="bg-[var(--primary-gray)] h-[300px] text-neutral outline-gray-200 w-full px-[10px] py-[10px]  rounded-[6px]"
                  required
                  ref={messageRef}
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--primary-red)] uppercase text-white flex gap-[8px] text-lg justify-center items-center font-semibold text-center w-full h-[45px] rounded-[6px]"
              >
                Send
                <IoSendOutline size={20} />
              </button>
            </form>
          </div>
        </div>
      </DivWrapper>
    </section>
  );
}
