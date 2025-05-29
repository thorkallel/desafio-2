import React from "react";

export const Ticket = () => {
  return (
    <section id="tickets">
      <div className="max-w-screen-lg mx-auto mt-20 px-4">
        <h2 className="text-5xl font-bold text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
            Tickets
          </span>
        </h2>
        <p className="text-zinc-300 text-justify mt-2">
          Get ready for an unforgettable musical journey featuring some of the
          most innovative and influential artists of our time. From indie rock
          pioneers to electronic music visionaries, our headliners represent the
          cutting edge of contemporary music. Each performance promises to be a
          unique experience, showcasing the artists' latest works and greatest
          hits in spectacular live settings. Join us for a week of extraordinary
          music, where every night brings a new story to life through sound.
        </p>
        <table className="w-full table mt-5 border-collapse border border-zinc-300">
          <thead>
            <tr className="bg-zinc-900 text-white">
              <th className="p-4 text-left border-b border-zinc-300">Plan</th>
              <th className="p-4 text-left border-b border-zinc-300">Price</th>
              <th className="p-4 text-left border-b border-zinc-300">
                Features
              </th>
              <th className="p-4 text-left border-b border-zinc-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-zinc-900 text-white hover:bg-zinc-800">
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">Single Day Pass</div>
                <div className="text-sm text-zinc-300">Basic Access</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">$89</div>
                <div className="text-sm text-zinc-300">per day</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <ul className="list-disc list-inside text-sm">
                  <li>Access to all stages</li>
                  <li>Basic festival map</li>
                  <li>Standard entry</li>
                </ul>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <button className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-sky-600 hover:to-teal-600 transition-all duration-200">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr className="bg-zinc-900 text-white hover:bg-zinc-800">
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">Weekend Pass</div>
                <div className="text-sm text-zinc-300">Most Popular</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">$299</div>
                <div className="text-sm text-zinc-300">3 days</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <ul className="list-disc list-inside text-sm">
                  <li>Full festival access</li>
                  <li>Exclusive festival guide</li>
                  <li>Priority entry</li>
                  <li>Festival merchandise</li>
                </ul>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <button className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-sky-600 hover:to-teal-600 transition-all duration-200">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr className="bg-zinc-900 text-white hover:bg-zinc-800">
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">VIP Experience</div>
                <div className="text-sm text-zinc-300">Premium Access</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <div className="font-bold">$599</div>
                <div className="text-sm text-zinc-300">3 days</div>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <ul className="list-disc list-inside text-sm">
                  <li>VIP viewing areas</li>
                  <li>Exclusive lounge access</li>
                  <li>Meet & greet opportunities</li>
                  <li>Premium festival kit</li>
                  <li>Dedicated concierge</li>
                </ul>
              </td>
              <td className="p-4 border-b border-zinc-300">
                <button className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-sky-600 hover:to-teal-600 transition-all duration-200">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr className="bg-zinc-900 text-white hover:bg-zinc-800">
              <td className="p-4">
                <div className="font-bold text-white">Ultimate Pass</div>
                <div className="text-sm text-zinc-300">All-Inclusive</div>
              </td>
              <td className="p-4">
                <div className="font-bold text-white">$999</div>
                <div className="text-sm text-zinc-300">3 days</div>
              </td>
              <td className="p-4">
                <ul className="list-disc list-inside text-sm text-zinc-300">
                  <li>All VIP benefits</li>
                  <li>Backstage access</li>
                  <li>Artist meet & greets</li>
                  <li>Luxury accommodation</li>
                  <li>Private transportation</li>
                  <li>Exclusive after-parties</li>
                </ul>
              </td>
              <td className="p-4">
                <button className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-sky-600 hover:to-teal-600 transition-all duration-200">
                  Buy Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
