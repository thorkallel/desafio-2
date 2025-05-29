import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Festival Schedule</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sky-400">Festival Duration</p>
                <p className="text-sm text-zinc-400">
                  July 1st - July 6th, 2025
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400">Daily Schedule</p>
                <p className="text-sm text-zinc-400">Gates Open: 2:00 PM</p>
                <p className="text-sm text-zinc-400">Last Entry: 10:00 PM</p>
                <p className="text-sm text-zinc-400 mt-2">
                  *Extended hours on weekends until 11:00 PM
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400">Special Events</p>
                <p className="text-sm text-zinc-400">
                  • Opening Ceremony: July 1st, 2:00 PM
                </p>
                <p className="text-sm text-zinc-400">
                  • Grand Finale: July 6th, 8:00 PM
                </p>
                <p className="text-sm text-zinc-400">
                  • After-parties: Daily from 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Lineup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Tickets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">Email: info@musicfest.com</li>
              <li className="text-zinc-400">Phone: +1 (555) 123-4567</li>
              <li className="text-zinc-400">Address: 123 Festival Grounds</li>
              <li className="text-zinc-400">City, State 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
          <p>&copy; 2025 Music Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
