import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function DrawerListItem(item, setOpen) {
  const itm = item.item;

  return itm.active ? (
    <ListItem
      key={itm.title}
      disablePadding
    >
      <ListItemButton
        component={NavLink}
        to={itm.path}
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>{itm.icon}</ListItemIcon>
        <ListItemText>{itm.title}</ListItemText>
      </ListItemButton>
    </ListItem>
  ) : (
    <p key={itm.title}></p>
  );
}
