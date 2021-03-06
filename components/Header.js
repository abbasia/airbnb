import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header
      className="sticky top-0 z-50 
    grid grid-cols-3 bg-white shadow-md p-5 md:px-10 "
    >
      {/*left */}
      <div
        className="relative flex 
      h-10 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*middle */}
      <div className="flex items-center md:border-2 py-2 rounded-full">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full 
          p-2 cursor-pointer mr-2 "
        ></SearchIcon>
      </div>

      {/*right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6"></GlobeAltIcon>
        <div className="flex space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6"></MenuIcon>
          <UserCircleIcon className="h-6"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
}

export default Header;
