import { View, Text } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {

  const { user } = useAuth();

  return (
    <View>
      <Text>Nome: {user?.name}</Text>
    </View>
  );
}