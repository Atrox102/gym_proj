"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

const Nav: React.FC = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <div>
          <Link href="/" className="flex gap-2">
            <Image
              src={"/assets/img/logo.png"}
              alt="logo"
              width={117}
              height={55}
            />
          </Link>
        </div>

        <div className="hidden gap-4 md:flex text-white text-base uppercase font-medium transition-all ">
          {links.map((link, index) => (
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass="active"
              key={index}
              className=" cursor-pointer hover:text-accent transition-all"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
        {/* Desktop Navigation */}
        <div className="sm:flex hidden  ">
          {session?.user ? (
            <div className="flex gap-3 md:gap-10 justify-center items-center">
              {/* add the nav Links HERE  */}

              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="black_btn"
                >
                  Sign Out
                </button>
                {/* take the user to his profile when pressed on  */}
                <Link href="/">
                  <Image
                    src={session?.user.image ?? ""}
                    width={37}
                    height={37}
                    className="rounded-full"
                    alt="profile"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))} */}
              <div>
                <Link href="/api/auth/signin">
                  <button className="black_btn">Sign In</button>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex">
              <div className=" mr-3">
                <Image
                  src={session?.user.image ?? ""}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="profile"
                  // onClick={() => setToggleDropdown(!toggleDropdown)}
                />
              </div>

              {toggleDropdown && (
                <div className="dropdown">
                  {/* in the FUTURE ADD THE MY PROFILE FEATURE  */}
                  {/* <Link
                    href="/"
                    className="text-center text-white text-base uppercase font-medium transition-all"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link> */}
                  <div className="md:hidden gap-4 flex flex-col text-center text-white text-base uppercase font-medium transition-all ">
                    {links.map((link, index) => (
                      <ScrollLink
                        offset={link.offset}
                        to={link.target}
                        smooth
                        spy
                        activeClass="active"
                        key={index}
                        className=" cursor-pointer hover:text-accent transition-all"
                        onClick={() => setToggleDropdown(false)}
                      >
                        {link.name}
                      </ScrollLink>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))} */}
              <div className=" mr-3">
                <Link href="/api/auth/signin">
                  <button className="black_btn ">Sign In</button>
                </Link>
              </div>
              {toggleDropdown && (
                <div className="dropdown">
                  <div className="md:hidden gap-4 flex flex-col text-center text-white text-base uppercase font-medium transition-all ">
                    {links.map((link, index) => (
                      <ScrollLink
                        offset={link.offset}
                        to={link.target}
                        smooth
                        spy
                        activeClass="active"
                        key={index}
                        className=" cursor-pointer hover:text-accent transition-all"
                        onClick={() => setToggleDropdown(false)}
                      >
                        {link.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          <div className="flex justify-center items-center">
            <button onClick={() => setToggleDropdown(!toggleDropdown)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
