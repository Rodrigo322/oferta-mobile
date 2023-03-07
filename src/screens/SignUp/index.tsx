import { useNavigation } from "@react-navigation/native";
import {
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  LockKey,
} from "phosphor-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import LogoImg from "../../assets/ofairta.png";
import { api } from "../../services/api";
import { checkInternetConnection } from "../../utils/netInfo";
import { styles } from "./styles";

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [isPassword, setIsPassword] = useState("");

  async function handleCreateUser() {
    const isConnected = await checkInternetConnection();
    if (!isConnected) {
      Alert.alert("Sem conexão", "Você está sem conexão com a internet.");
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      cpf === "" ||
      isPassword === ""
    ) {
      return Alert.alert("Atenção", "Preencha corretamente todos os campos.");
    } else if (password !== isPassword) {
      return Alert.alert("Atenção", "As senhas não estão iguais.");
    } else {
      setLoading(true);
      const data = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
      };
      api
        .post("/user", {
          name,
          email: data.email,
          password: data.password,
          cpf,
          accessLevelName: "Comprador",
        })
        .then((response) => {
          if (response.status === 201) {
            Alert.alert("Success", "Usuário criado com sucesso!");
            navigate("SignIn");
            setLoading(false);
          } else {
            Alert.alert(
              "Error",
              "Ocorreu um erro ao criar o usuário tente novamente"
            );
            setLoading(false);
          }
        })
        .catch((Error) => {
          console.log(Error);
          Alert.alert(
            "Error",
            "Ocorreu um erro ao criar o usuário tente novamente"
          );
          setLoading(false);
        });
    }
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Image style={styles.logoImg} source={LogoImg} />
        <View style={styles.inputArea}>
          <View style={styles.inputGroup}>
            <IdentificationBadge color="#FFF" size={32} weight="duotone" />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Digite seu name"
              onChangeText={setName}
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
            <TextInputMask
              type={"cpf"}
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Digite seu CPF"
              onChangeText={setCpf}
            />
          </View>

          <View style={styles.inputGroup}>
            <LockKey
              color={password !== isPassword ? "#d46b71" : "#fff"}
              size={32}
              weight="duotone"
            />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Digite uma senha"
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputGroup}>
            <LockKey
              color={password !== isPassword ? "#d46b71" : "#fff"}
              size={32}
              weight="duotone"
            />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Confirme a senha"
              onChangeText={setIsPassword}
            />
          </View>
          <TouchableOpacity
            disabled={loading}
            onPress={handleCreateUser}
            style={styles.buttonSignIn}
          >
            {loading && <ActivityIndicator size="large" color="#019972" />}
            {!loading && (
              <Text style={styles.buttonSignInText}>Criar conta</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigate("SignIn")}
          style={styles.signMessage}
          disabled={loading}
        >
          <Text style={styles.signMessageText}>Já possui uma conta?</Text>
          <Text style={styles.signMessageTextBold}>Faça Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
