import { Box, List } from "@mui/material";
import DrawerListItem from "./DrawerListItem";

export default function NavListDrawer(navLinks, setOpen) {
  const links = navLinks.navLinks;

  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {links.map((link) => (
            <DrawerListItem
              key={link.title}
              item={link}
              setOpen={setOpen}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
}
