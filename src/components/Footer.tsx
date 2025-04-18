import { Link } from "react-router-dom";
import JoinTeamButton from "./JoinTeamButton";

export default function Footer() {
  return (
    <div className="w-screen space-y-10 bg-neutral-800 px-6 py-6 pt-16 pb-10 font-semibold text-neutral-50 lg:px-52">
      <div className="md: container mx-auto flex flex-col items-center justify-between gap-10 px-6 md:flex-row md:items-start">
        {/* Left Section: Logo, Email, Join Team */}
        <div className="flex w-56 flex-col items-center space-y-6 align-middle md:items-start">
          <img
            src="/assets/light-horizontal-logo.png"
            alt="CommuniCare Logo"
            className="w-full"
          />
          <p className="text-sm">
            <a
              href="mailto:communicare.med@gmail.com"
              className="underline-offset-4 hover:underline"
            >
              <div className="left-2 flex gap-2">
                <img
                  src="/assets/email.png"
                  alt="email icon"
                  className="h-6 w-6 self-center"
                />
                <p className="self-center">communicare.med@gmail.com</p>
              </div>
            </a>
          </p>
          <JoinTeamButton />
        </div>

        {/* Right Section: Navigation Links (Moves below on small screens) */}
        <div className="mt-4 flex flex-col items-center space-y-4 text-xs underline-offset-3 md:mt-0 md:items-end">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/About" className="hover:underline">
            About
          </Link>
          <Link to="/Team" className="hover:underline">
            Team
          </Link>
          <Link to="/Contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/App" className="hover:underline">
            Our App
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 pt-3 text-center text-xs font-normal">
        &copy; 2025 CommuniCare | All Rights Reserved | CommuniCare is a
        socially-driven, student-run healthtech startup
      </div>
    </div>
  );
}
