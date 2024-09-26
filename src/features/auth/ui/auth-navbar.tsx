import { AuthNavbarContext } from "entities/auth";
import { PropsWithChildren, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AuthNavbar = (props: PropsWithChildren) => {
  const { currentPage, setCurrentPage, pages } = useContext(AuthNavbarContext);

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        margin: "10px 0px",
      }}
    >
      <Tabs
        value={currentPage}
        onChange={(e, newValue) => setCurrentPage(newValue)}
        aria-label="wrapped label tabs example"
      >
        {pages.map(([pageName, indexPage]) => (
          <Tab key={indexPage} value={pageName} label={pageName} />
        ))}
      </Tabs>
    </Box>
  );
};

export { AuthNavbar };
