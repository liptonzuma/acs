/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const timeline = [
  {
    title: 'First step',
    description: 'Customer Identifies Business Opportunities',
  },
  {
    title: 'Second step',
    description:
      'Customer launches project to exploit opportunity which may need software component',
  },
  {
    title: 'Third step',
    description:
      'ACS analyses software needs and comes out with estimated effort and allocates resources to meet business deadlines',
  },
  {
    title: 'Fourth step',
    description:
      'Software is developed, tested and deployed to customer environment as part of business initiative',
  },
  {
    title: 'Fifth step',
    description: 'Customer Identifies Business Opportunities',
  },
  {
    title: 'Sixth step',
    description:
      'Customer successfully launches initiatives in time to exploit identified opportunity',
  },
];

export default function TimeLine() {
  return (
    <ul className="timeline  timeline-snap-icon timeline-compact timeline-vertical">
      {timeline.map((tl, index) => (
        <li key={tl.title}>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono font-black text-base">{tl.title}</time>
            <div className="text-base font-black"></div>
            <p className="text-[1rem] text-gray-400">{tl.description}</p>
          </div>
          {index + 1 !== timeline.length && <hr />}
        </li>
      ))}
    </ul>
  );
}
