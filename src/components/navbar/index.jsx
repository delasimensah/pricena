import { Box } from "@mui/material";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import AllCategories from "./allCategories";
import AuthLink from "./AuthLink";
import CountrySelect from "./CountrySelect";
import LinkTab from "./LinkTab";
import Links from "./Links";

const Navbar = () => {
  return (
    <Box className="px-5 bg-white md:px-10 lg:px-20">
      <Box className="flex items-center py-4">
        <Logo />

        <SearchInput />

        <Box className="flex items-center space-x-5">
          <AuthLink />

          <CountrySelect />
        </Box>
      </Box>

      <Box className="items-center hidden space-x-10 lg:flex ">
        <AllCategories />

        <Links />

        <LinkTab title="Coupons & Offers" />
      </Box>
    </Box>
  );
};

export default Navbar;
