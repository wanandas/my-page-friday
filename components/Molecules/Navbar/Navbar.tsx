import { DarkModeIcon } from "@/components/Atoms";
import Link from "next/link";
import { BusyOnFriday, NavItem, NavList, NavWrapper } from "./Navbar.styled";
import { useTheme } from "@mui/material";

interface INavbar {
  darkMode: boolean;
  handleDarkMode: () => void;
}

const Navbar = ({ handleDarkMode, darkMode }: INavbar) => {
  const menus = [{ title: "Experience" }, { title: "Project" }];
  const theme = useTheme();

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
        moonColor={theme.palette.text.primary}
        sunColor={theme.palette.text.primary}
        checked={darkMode}
        onChange={handleDarkMode}
      />
    </NavWrapper>
  );
};

export default Navbar;
