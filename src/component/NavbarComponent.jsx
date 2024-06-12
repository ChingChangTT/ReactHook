"use client";

import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Component() {
  const [nabarcomponent, setnabarlist] = useState([
    {
      name: "Home",
      path: "/App",
      active: true,
    },
    {
      name: "About Us",
      path: "/about-us",
      active: false,
    },
    {
      name: "Contact",
      path: "/products",
      active: false,
    },
  ]);

  const handleOnclick = (item) => {
    setnabarlist((prevList) =>
      prevList.map((navItem) =>
        navItem.name === item.name
          ? { ...navItem, active: true }
          : { ...navItem, active: false }
      )
    );
  };

  return (
    <Navbar fluid rounded className="max-w-7xl mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Morning FD2
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        {nabarcomponent.map((item, index) => (
          <Navbar.Link
            onClick={() => handleOnclick(item)}
            as={Link}
            to={item.path}
            key={index}
            className={item.active ? "text-blue-500" : "text-black"}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
