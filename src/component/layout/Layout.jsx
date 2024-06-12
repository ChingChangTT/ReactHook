import React from 'react'
import NavbarComponent from '../NavbarComponent';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
export default function Layout() {
  return (
    <div >
        <NavbarComponent />
        <main className=" max-w-7xl mx-auto ">
            <Outlet />
        </main>
    </div>
  )
}
