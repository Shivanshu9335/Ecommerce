import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartStore from "../store/CartStore";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    let ctx = useContext(CartStore)
    console.log(ctx)
 

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-2xl shadow-[#00000044]">
      <header className="flex   bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
        <div className="flex max-w-screen-xl mx-auto w-full">
          <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
            <Link to={"/products"} className="max-sm:hidden text-4xl font-bold">
              Pro-View
            </Link>
            <div className="hidden max-sm:block">
              <img
                src="https://readymadeui.com/readymadeui-short.svg"
                alt="logo"
                className="w-9"
              />
            </div>
            <div
              className={`lg:ml-6 ${
                menuOpen ? "block" : "hidden"
              } lg:flex lg:gap-x-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                ✖
              </button>
              <ul className="space-y-3 lg:flex lg:space-y-0">
                <Link
                  to={"/"}
                  className="max-lg:border-b max-lg:py-3 px-3 text-[#007bff] font-semibold"
                >
                  Home
                </Link>
                <li className="max-lg:border-b max-lg:py-3 px-3 text-[#333] hover:text-[#007bff] font-semibold">
                  About
                </li>
                <Link
                  to={"/products"}
                  className="max-lg:border-b max-lg:py-3 px-3 text-[#333] hover:text-[#007bff] font-semibold"
                >
                  Products
                </Link>
              </ul>
            </div>
            <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
              <div className="flex bg-gray-50 border focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent outline-none pr-2"
                />
                🔍
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative flex text-4xl flex-col items-center">
                  ❤️
                  <span className="text-[13px] font-semibold">Wishlist</span>
                  <span className="absolute -top-1 left-8  bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    2
                  </span>
                </div>
                <Link
                  to={"/cart"}
                  className="relative flex text-4xl flex-col items-center"
                >
                  🛒
                  <span className="text-[13px] font-semibold">Cart</span>
                  <span className="absolute -top-1  left-8 bg-blue-500  text-white text-xs font-bold px-2 py-1 rounded-full">
                    {ctx.cart.length}
                  </span>
                </Link>
                <button className="max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
                  Sign In
                </button>
                <button onClick={() => setMenuOpen(true)} className="lg:hidden">
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
