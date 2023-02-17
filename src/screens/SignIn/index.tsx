import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

export function SignIn() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
        <TouchableOpacity
          onPress={() => navigate("TabRoutes")}
          style={styles.buttonSignIn}
        >
          <Text style={styles.buttonSignInText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signMessage}
        onPress={() => navigate("SignUp")}
      >
        <Text style={styles.signMessageText}>Ainda não possui uma conta?</Text>
        <Text style={styles.signMessageTextBold}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
