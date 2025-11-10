# Contributing to react-native-dropdown-menu

Thank you for your interest in contributing! This project is currently in **beta**, and every contribution helps us improve its stability, usability, and future platform support.  

Our main goals for the near future are:

- **Improve UI/UX and customizability** of the dropdown menu
- **Add support for iOS and web**
- Keep the code **clean, modular, and scalable**  

We want to avoid messy or hard-to-maintain code, so we value thoughtful, high-quality contributions.

---

## 🌟 Why Contribute?

Your contributions make a real impact:

- Help Android developers have a smooth native dropdown menu experience
- Shape the future cross-platform support
- Improve a library that will be widely reusable in React Native apps

Even small improvements—like fixing docs, icons, or menu behaviors—are appreciated.

---

## 🛠️ Setup

Clone the repository and install dependencies:

```bash
# Fork the repo first
git clone https://github.com/lhacenmed/react-native-dropdown-menu.git
cd react-native-dropdown-menu
````

```bash
npm install
````
or
```bash
yarn install
````

To test your changes:

```bash
cd example
npm install
npx expo start
```

This will open the Expo example app where you can see your changes live.

---

## 🔧 Making Changes

1. **Create a new branch** for your feature or fix.
2. **Edit TypeScript or Kotlin files** under `src/` or `android/`.
3. **Test your changes** using the example app.
4. **Keep your code modular and clean**:

   * Meaningful variable and function names
   * Small reusable components
   * Comments for complex logic
5. **Follow existing style conventions** (TypeScript + 2 spaces indentation).
6. **Submit a Pull Request** with a clear description of your changes and why they matter.

---

## 🧪 Testing

Currently, the library relies on **manual testing** through the example app:

* Run `npx expo start` in `example/`
* Interact with the dropdown menu to verify your changes
* Make sure nested menus, icons, and disabled states work correctly

Automated testing may be added in future versions.

---

## 💡 Suggested Contributions

* Improving **UI/UX** and styling
* Adding **iOS and web support**
* Implementing new **menu behaviors** or options
* Optimizing performance and memory usage
* Improving **documentation** and examples

---

## 📢 Reporting Issues

If you encounter bugs or have suggestions:

1. Check if an issue already exists.
2. If not, **create a new issue** with:

   * Clear title
   * Detailed description
   * Steps to reproduce (if applicable)
   * Screenshots or logs (if helpful)
3. Label your issue as `bug` or `enhancement` if possible.

---

## 🤝 Guidelines for Pull Requests

* Start with a **fresh branch**
* Ensure **PR title** is descriptive:

  * `feat`: new features
  * `fix`: bug fixes
  * `chore`: minor updates or refactoring
* Provide a **clear description** of your changes and motivation
* Test your PR in the example app
* Respond to feedback promptly
* Avoid unnecessary changes or unrelated formatting

---

## 🙏 Final Notes

We want this library to be **robust, modular, and future-proof**, so contributions that enhance maintainability and cross-platform capabilities are especially valuable.

Your efforts help make `react-native-dropdown-menu` a polished, scalable, and reliable tool for React Native developers everywhere. Thank you for joining us on this journey!
