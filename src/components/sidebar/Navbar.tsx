import { MenuIcon } from "lucide-react";
import mainLogo from "/favicon.png";

function Navbar() {
  function openMenu() {
    alert("opa");
  }

  return (
    <>
      <header className="hidden w-full bg-violet-500 p-4 sm:flex sm:justify-between">
        <MenuIcon
          onClick={() => openMenu()}
          className="h-6 w-6 cursor-pointer text-white"
        />
        <div className="flex items-center gap-2">
          <h2 className="text-base font-extrabold tracking-wider text-white">
            TASKLIST
          </h2>
          <img src={mainLogo} className="h-auto w-6 mix-blend-screen" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
