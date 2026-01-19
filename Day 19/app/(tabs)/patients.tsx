import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

type Patient = {
  id: string;
  name: string;
  age: string;
  problem: string;
};

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const data = await AsyncStorage.getItem("patients");
    if (data) {
      setPatients(JSON.parse(data));
    }
  };

  const addPatient = async () => {
    if (!name || !age || !problem) {
      alert("Fill all fields");
      return;
    }

    const newPatient: Patient = {
      id: Date.now().toString(),
      name,
      age,
      problem,
    };

    const updatedPatients = [...patients, newPatient];

    setPatients(updatedPatients);
    await AsyncStorage.setItem("patients", JSON.stringify(updatedPatients));

    setName("");
    setAge("");
    setProblem("");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Offline Patient List
      </Text>

      <TextInput
        placeholder="Patient Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Problem"
        value={problem}
        onChangeText={setProblem}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Button title="Add Patient" onPress={addPatient} />

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
          >
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Problem: {item.problem}</Text>
          </View>
        )}
      />
    </View>
  );
}
