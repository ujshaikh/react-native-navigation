import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const getTabIcon = (routeName: string) => {
  let icon: "home" | "account-group" | "cog" | "file-document-multiple" | undefined;

  switch (routeName) {
    case "Home":
      icon = "home";
      break;
    case "Customers":
      icon = "account-group";
      break;
    case "Settings":
      icon = "cog";
      break;
    case "Documents":
      icon = "file-document-multiple";
      break;
  }
  return icon;
}

const RenderTabIcon = (routeName: string, selectTab: string) => {
  let icon = getTabIcon(routeName);

  return (
    <MaterialCommunityIcons
      name={icon}
      size={30}
      color={routeName === selectTab ? Colors.light.primary : Colors.light.default}
    />
  );
};

export default RenderTabIcon;
