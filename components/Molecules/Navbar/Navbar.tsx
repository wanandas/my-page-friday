import { DarkModeIcon } from "@/components/Atoms";
import Link from "next/link";
import { BusyOnFriday, NavItem, NavList, NavWrapper } from "./Navbar.styled";

interface INavbar {
  darkMode: boolean;
  handleDarkMode: () => void;
}

const Navbar = ({ handleDarkMode, darkMode }: INavbar) => {
  const menus = [
    { title: "Experience" },
    { title: "Project" },
    { title: "Contact" },
  ];

  return (
    <NavWrapper>
      <NavList>
        <BusyOnFriday>
          <Link href={"/"}>BusyOnFriday</Link>
        </BusyOnFriday>
        {menus.map(({ title }) => (
          <NavItem href={title.toLowerCase()} key={title}>
            {title}
          </NavItem>
        ))}
      </NavList>
      <DarkModeIcon
        moonColor="#fff"
        sunColor="#212112"
        checked={darkMode}
        onChange={handleDarkMode}
      />
    </NavWrapper>
  );
};

export default Navbar;
