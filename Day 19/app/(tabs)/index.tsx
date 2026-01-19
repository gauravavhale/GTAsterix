import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#F5F7FA",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            marginBottom: 6,
          }}
        >
          👋 Welcome
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#555",
          }}
        >
          Offline Patient Management App
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 12,
          elevation: 3,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          Quick Overview
        </Text>

        <Text style={{ fontSize: 15, color: "#666" }}>
          • Add patients offline{"\n"}• View patient list{"\n"}• Data persists
          after restart
        </Text>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#999",
          }}
        >
          Works even without internet
        </Text>
      </View>
    </View>
  );
}
