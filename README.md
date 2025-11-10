# react-native-dropdown-menu

A native **Android dropdown menu** component for React Native (Expo).  
It bridges the Android **Cascade Popup Menu** API ([saket/cascade](https://github.com/saket/cascade)) to React Native, providing smooth submenu transitions and a native look and feel.  
Currently supported on **Android** only.

> ⚠️ **Status:** This module is currently in **beta**.  
> Contributions and feedback are welcome.

---

## 📸 Demo

<p align="left">
  <img src="./example/assets/demo/demo-dark.gif" alt="Dark Mode Demo" width="30%"/>
  <img src="./example/assets/demo/demo-light.gif" alt="Light Mode Demo" width="30%"/>
</p>

---

## 📦 Installation

```bash
npm install @lhacenmed/react-native-dropdown-menu
````
or
```bash
yarn add @lhacenmed/react-native-dropdown-menu
````

---

## 🚀 Usage

Here’s a complete example using `expo-router` and icons:

```tsx
import DropdownMenu from "@lhacenmed/react-native-dropdown-menu";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <Text>Edit app/index.tsx to modify this screen.</Text>
    </View>
  );
}
```

---

## ⚙️ API

### `<DropdownMenu />` Props

| Prop              | Type                                                             | Description                                                     |
| ----------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| `groups`          | `MenuGroupSpec[]`                                                | The list of menu groups containing menu items. *(Required)*     |
| `header`          | `string`                                                         | Optional header text shown at the top of the menu.              |
| `backgroundColor` | `string`                                                         | Background color of the popup menu.                             |
| `cornerRadius`    | `number`                                                         | Corner radius for the popup background.                         |
| `onSelect`        | `(info: { id?: string; title: string; path: string[] }) => void` | Called when a menu item is selected.                            |
| `trigger`         | `"press" \| "longPress" \| "none"`                               | Defines how the menu opens — by press, long press, or manually. |
| `anchorTag`       | `number \| null`                                                 | (Advanced) Native anchor tag reference for manual positioning.  |
| `wrapperStyle`    | `ViewStyle`                                                      | Custom style for the wrapper around the trigger element.        |
| `children`        | `React.ReactNode`                                                | The trigger element (button, icon, etc.) that opens the menu.   |
| `disabled`        | `boolean`                                                        | Disables interaction with the trigger.                          |

---

### Menu Group & Item Structure

#### `MenuGroupSpec`

```ts
type MenuGroupSpec = {
  items: MenuItemSpec[];
};
```

#### `MenuItemSpec`

```ts
type MenuItemSpec = {
  id?: string;
  title: string;
  icon?: {
    resource?: string;
    base64?: string;
  };
  enabled?: boolean;
  items?: MenuItemSpec[];
  onSelect?: (info: { id?: string; title: string; path: string[] }) => void;
};
```

Each item may have:

* A unique `id`
* A visible `title`
* An optional `icon` (Android resource name or Base64 image)
* Nested `items` for submenus
* `onSelect` callback for individual actions
* `enabled` flag for disabling items

---

## 🧠 How It Works (Under the Hood)

The native Android module (`DropdownMenuModule.kt`) uses
[`CascadePopupMenu`](https://github.com/saket/cascade) to render cascading menus.

It:

* Receives your menu structure from JS via Expo’s module bridge
* Dynamically builds Android `Menu` and `SubMenu` hierarchies
* Supports nested items, disabled states, and icons (from resource names or Base64)
* Emits `onItemSelected` events back to JS when a user selects an item

Internal flow:

```
DropdownMenu (JS)
  ↓
Expo Native Module (Kotlin)
  ↓
CascadePopupMenu → Android View hierarchy
```

---

## 🧩 Notes

* **Platform:** Android only (no-op on iOS/web)
* **Icon source:** Use Android built-in icons (`ic_menu_*`) or custom base64 icons
* **Styling:** `backgroundColor` and `cornerRadius` map directly to native popup styles

---

## 🤝 Contributing

We’re open to contributors!
To improve this module or add new features:

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or fix
4. Run the example project to test your changes (`cd example && npx expo start`)
5. Submit a pull request with a clear description of your changes

Ensure your code follows existing style and passes lint checks.

---

## 📄 License

MIT © [Lhacen Med]
