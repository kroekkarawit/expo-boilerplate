# 📱 Expo Boilerplate

A production-ready React Native boilerplate using Expo, designed to kickstart your mobile app development with best practices and essential features.

## ✨ Features

- 🚀 **Expo SDK 52+** - Latest Expo SDK with all its features
- 📱 **Navigation** - React Navigation v7 with type safety
- 🔐 **Authentication** - Complete auth flow with JWT
- 🎨 **Theming** - Dark/Light mode support with styled-components
- 🌐 **i18n** - Internationalization with i18n-js
- 📡 **API Integration** - Axios setup with interceptors
- 🏪 **State Management** - Zustand for efficient state handling
- 📝 **Forms** - React Hook Form with Zod validation
- 🎯 **TypeScript** - Full TypeScript support
- 💅 **Styling** - NativeWind (TailwindCSS) & styled-components
- 🔔 **Notifications** - Expo notifications setup
- 🗃️ **Storage** - AsyncStorage utilities
- ⚠️ **Error Handling** - Global error boundary
- 🔄 **Code Quality** - ESLint & Prettier configured

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/expo-boilerplate.git

# Navigate to the project
cd expo-boilerplate

# Install dependencies
npm install

# Start the development server
npm start
```

## 📁 Project Structure

```
src/
├── api/            # API services and axios setup
├── auth/           # Authentication context and hooks
├── components/     # Reusable components
├── i18n/          # Internationalization setup
├── navigation/     # Navigation configuration
├── screens/        # Screen components
│   ├── Auth/      # Authentication screens
│   └── Main/      # Main app screens
├── store/         # Zustand store configurations
├── themes/        # Theme configurations
└── utils/         # Utility functions
```

## 🛠️ Tech Stack

- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [NativeWind](https://www.nativewind.dev/)
- [Styled Components](https://styled-components.com/)
- [i18n-js](https://github.com/fnando/i18n-js)
- [Axios](https://axios-http.com/)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
API_URL=your_api_url
```

### Theme Configuration

Customize theme in `src/themes/`:
- `lightTheme.ts`
- `darkTheme.ts`

### Navigation

Configure routes in `src/navigation/`:
- `AuthNavigator.tsx` - Authentication flow
- `MainNavigator.tsx` - Main app flow

## 📱 Available Scripts

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## 🔐 Authentication

The boilerplate includes a complete authentication flow with:
- Login
- Sign Up
- Password Reset
- Token Management
- Protected Routes

## 🌐 Internationalization

Supports multiple languages with i18n-js. Add translations in `src/i18n/`.

Currently supported languages:
- English (en)
- French (fr)
- Thai (th)

## 🎨 Styling

Uses a combination of:
- NativeWind (TailwindCSS)
- Styled Components
- Theme Provider

## 📦 State Management

Uses Zustand for state management with separate stores for:
- Authentication
- Theme
- Language

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
