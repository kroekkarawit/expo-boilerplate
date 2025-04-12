import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../themes";
import { Moon, Sun, Monitor } from "lucide-react-native";

const icons = {
  light: <Sun size={20} />,
  dark: <Moon size={20} />,
  system: <Monitor size={20} />,
};

export const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  const modes = ["light", "dark", "system"] as const;

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Theme</Text>
      {modes.map((mode) => (
        <TouchableOpacity
          key={mode}
          onPress={() => setThemeMode(mode)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            borderRadius: 12,
            backgroundColor: themeMode === mode ? "#007AFF" : "#f0f0f0",
          }}
        >
          <View style={{ marginRight: 10 }}>{icons[mode]}</View>
          <Text style={{ color: themeMode === mode ? "#fff" : "#000" }}>
            {mode.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
