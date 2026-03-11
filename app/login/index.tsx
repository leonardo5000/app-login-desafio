import { router } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  function handleLogin() {
    if (!name) return;

    login(name);
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo 👋</Text>
        <Text style={styles.subtitle}>Digite seu nome para entrar</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: { width: "80%" },
  title: { fontSize: 24 },
  subtitle: { marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#000", padding: 10 },
  buttonText: { color: "#fff", textAlign: "center" }
});