# 🍋 Little Lemon Newsletter Sign-Up
A React Native application that allows users to sign up for the Little Lemon restaurant newsletter to stay updated with the latest delicious recipes, menus, and special offers. It implements clean visual layouts, user input text fields with validation logic, native alert messaging, and navigation flow between screens.

![](little_lemon.gif)

## ✨ Features
- **Welcome Screen**: Displays the Little Lemon brand logo, a welcoming message, and a call-to-action button to navigate to the newsletter subscription page.
- **Subscribe Screen**: Features a grey branding logo, a header message, an email address text input field, and a subscription submit button.
- **Email Validation**: Checks email syntax dynamically as the user types, enabling the "Subscribe" button only when a valid email pattern is matched.
- **Visual Feedback**: Buttons visually shift styling (color/opacity) between disabled (greyed out) and active (brand green) states.
- **Cross-Platform Compatibility**: Supports native platforms (iOS and Android) using `Alert.alert` dialogs, and includes a fallback using browser-native `alert()` when previewed on web browsers.

## 🛠️ Tech Stack
- **Framework**: [React Native](https://reactnative.dev/) (Expo)
- **Navigation**: [React Navigation Stack](https://reactnavigation.org/)
- **Core Components**: `View`, `Text`, `Image`, `TextInput`, `Pressable`, `Alert`, `Platform`, `StyleSheet`

## 🚀 How to Run the App

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run start
   ```

3. **Run on specific platforms**:
   - For **iOS Simulator**: press `i` or run `npm run ios`
   - For **Android Emulator**: press `a` or run `npm run android`
   - For **Web Browser**: press `w` or run `npm run web`
