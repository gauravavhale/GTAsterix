import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F7FA",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Profile Card */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 30,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            marginBottom: 10,
            color: "#333",
          }}
        >
          👋 Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#666",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          You are logged in. Tap the button below to log out safely.
        </Text>

        <TouchableOpacity
          onPress={logout}
          style={{
            backgroundColor: "#FF3B30",
            paddingVertical: 14,
            paddingHorizontal: 40,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
