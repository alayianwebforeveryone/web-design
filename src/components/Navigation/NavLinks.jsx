import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`block ${isActive ? 'text-paraColor font-bold' : 'text-[] font-medium'} py-2 xl:pl-3 pl-2 pr-4  lg:text-xl text-lg  hover:border-b-2  border-[#FCE0C5] hover:text-gray-500 sm:text-lg `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
