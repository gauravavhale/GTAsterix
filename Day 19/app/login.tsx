import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!name || !password) {
      alert("Please enter name and password");
      return;
    }

    const userData = { name, password };

    await AsyncStorage.setItem("user", JSON.stringify(userData));

    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
