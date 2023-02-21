import { useNavigation } from "@react-navigation/native";
import {
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  LockKey,
} from "phosphor-react-native";
import { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { api } from "../../services/api";
import { styles } from "./styles";

export function SignUp() {
  const { navigate } = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [isPassword, setPassword] = useState("");

  function handleCreateUser() {
    api
      .post("user", {
        nome,
        email,
        senha,
        nivelAcessoNome: "Comprador",
        cpf,
      })
      .then((response) => {
        if (response.status === 201) {
          Alert.alert("Success", "Usuário criado com sucesso!");
          navigate("SignIn");
        } else {
          Alert.alert(
            "Error",
            "Ocorreu um erro ao criar o usuário tente novamente"
          );
        }
      });
  }

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
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputGroup}>
          <Envelope color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite seu e-mail"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <IdentificationCard color="#fff" size={32} weight="duotone" />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite seu CPF"
            onChangeText={setCpf}
          />
        </View>

        <View style={styles.inputGroup}>
          <LockKey
            color={senha !== isPassword ? "#d46b71" : "#fff"}
            size={32}
            weight="duotone"
          />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Digite uma senha"
            onChangeText={setSenha}
          />
        </View>

        <View style={styles.inputGroup}>
          <LockKey
            color={senha !== isPassword ? "#d46b71" : "#fff"}
            size={32}
            weight="duotone"
          />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.input}
            placeholder="Confirme a senha"
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          onPress={handleCreateUser}
          style={styles.buttonSignIn}
        >
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
