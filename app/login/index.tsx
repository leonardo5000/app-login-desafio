
import { Button, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  function handleLogin() {
    login("allan@email.com", "Musquito");
    router.replace("/(tabs)"); // Substitui a rota para não voltar ao login
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App Profissional</Text>
      <Button title="Entrar no Sistema" onPress={handleLogin} />
    </View>
  );
}
