import { useNavigation } from "@react-navigation/native";
import { Envelope, IdentificationBadge, LockKey } from "phosphor-react-native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

export function SignUp() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
      <View style={styles.inputArea}>
        <View style={styles.inputGroup}>
          <IdentificationBadge color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite seu nome"
          />
        </View>

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
            placeholder="Digite uma senha"
          />
        </View>

        <View style={styles.inputGroup}>
          <LockKey color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Confirme a senha"
          />
        </View>
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
