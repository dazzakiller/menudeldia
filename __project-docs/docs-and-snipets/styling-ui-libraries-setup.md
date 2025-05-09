# Styling and UI Libraries Setup

## Overview
This document describes the process for installing and configuring TailwindCSS, NativeWind, and React Native Paper for both the web (Next.js) and mobile (Expo) applications, including verification with sample components.

## Web (Next.js)
### 1. Install TailwindCSS and dependencies
```sh
cd web
npm uninstall tailwindcss
npm install -D tailwindcss@3.4.3 postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind
- Update `tailwind.config.js`:
  ```js
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: { extend: {} },
    plugins: [],
  }
  ```
- Ensure `postcss.config.js` includes:
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```
- Add Tailwind directives to `app/globals.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 3. Verify with a sample component
- Edit `app/page.tsx` to include:
  ```tsx
  <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
    <h1 className="text-4xl font-bold text-blue-700 mb-4">Hello, TailwindCSS is working!</h1>
    <p className="text-lg text-gray-700">Edit <code>app/page.tsx</code> to get started.</p>
  </main>
  ```
- Start the dev server:
  ```sh
  npm run dev --prefix web
  ```

## Mobile (Expo)
### 1. Install NativeWind, TailwindCSS, and React Native Paper
```sh
cd mobile
npm install nativewind tailwindcss@3.4.3 react-native-paper
npx tailwindcss init
```

### 2. Configure Providers and Styles
- In `app/_layout.tsx`, wrap the app in `PaperProvider` and import NativeWind's global styles:
  ```tsx
  import { PaperProvider } from 'react-native-paper';
  import "nativewind/tailwind.css";
  // ...
  return (
    <PaperProvider>
      {/* ... */}
    </PaperProvider>
  );
  ```

### 3. Verify with a sample component
- In `app/(tabs)/index.tsx`, add:
  ```tsx
  <View className="flex-1 items-center justify-center bg-blue-100">
    <Text className="text-2xl font-bold text-blue-700 mb-4">Hello, NativeWind & Paper!</Text>
    <Button mode="contained" onPress={() => {}} style={{ marginTop: 16 }}>
      Press me
    </Button>
  </View>
  ```
- Start the Expo app:
  ```sh
  npm run web --prefix mobile
  # or use Expo Go for device testing
  ```

## Results
- Both web and mobile apps display styled sample components, confirming correct setup.
- Ready for further UI and feature development.

---

_Last updated: [auto-generated]_