import DropdownMenu from "react-native-dropdown-menu";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const menuGroups = [
    {
      items: [
        {
          id: "export",
          title: "Export",
          icon: { resource: "ic_menu_save" },
          items: [
            {
              id: "video",
              title: "Video",
              icon: { resource: "ic_video" },
              onSelect: () => console.log("Video"),
            },
            {
              id: "gif",
              title: "Gif",
              icon: { resource: "ic_gif" },
              onSelect: () => console.log("Gif"),
            },
          ],
        },
        {
          id: "share",
          title: "Share",
          icon: { resource: "ic_menu_share" },
          onSelect: () => console.log("Share"),
        },
      ],
    },
    {
      items: [
        {
          id: "settings",
          title: "Settings",
          enabled: false,
          icon: { resource: "ic_menu_settings" },
          onSelect: () => console.log("Settings"),
        },
        {
          id: "help",
          title: "Help",
          icon: { resource: "ic_menu_help" },
          onSelect: () => console.log("Help"),
        },
      ],
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "Home",
          headerRight: () => (
            <DropdownMenu
              backgroundColor="#161618"
              cornerRadius={10}
              groups={menuGroups}
            >
              <View style={{ padding: 8 }}>
                <Ionicons name="ellipsis-vertical" size={20} color="#8D8D8D" />
              </View>
            </DropdownMenu>
          ),
        }}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
