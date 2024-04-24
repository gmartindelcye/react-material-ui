import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

export default function DrawerListItem(item) {
  const itm = item.item;

  return itm.active ? (
    <ListItem
      key={itm.title}
      disablePadding
    >
      <ListItemButton
        component="a"
        href={itm.path}
      >
        <ListItemIcon>{itm.icon}</ListItemIcon>
        <ListItemText>{itm.title}</ListItemText>
      </ListItemButton>
    </ListItem>
  ) : (
    <p key={itm.title}></p>
  );
}
