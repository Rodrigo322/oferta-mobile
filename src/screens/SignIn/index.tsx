import { useNavigation } from "@react-navigation/native";
import { Envelope, LockKey } from "phosphor-react-native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

export function SignIn() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
      <View style={styles.inputArea}>
        <View style={styles.inputGroup}>
          <Envelope color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite seu e-mail"
          />
        </View>

        <View style={styles.inputGroup}>
          <LockKey color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite sua senha"
          />
        </View>

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
