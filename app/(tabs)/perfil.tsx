import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { AuthContext } from "../../contexts/AuthContext";

export default function Perfil() {
  const { user, logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <Text style={styles.name}>
        Usuário: {user}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center" },
  title:{ fontSize:24, marginBottom:20 },
  name:{ fontSize:18, marginBottom:20 },
  button:{ backgroundColor:"red", padding:10 },
  buttonText:{ color:"#fff" }
});