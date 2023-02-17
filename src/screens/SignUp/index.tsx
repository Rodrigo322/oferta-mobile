import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

export function SignUp() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Digite seu nome" />
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite seu CPF" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
        <TextInput style={styles.input} placeholder="Confirme sua senha" />
        <TouchableOpacity style={styles.buttonSignIn}>
          <Text style={styles.buttonSignInText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigate("SignIn")}
        style={styles.signMessage}
      >
        <Text style={styles.signMessageText}>Já possui uma conta?</Text>
        <Text style={styles.signMessageTextBold}>Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}
