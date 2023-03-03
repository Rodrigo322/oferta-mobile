import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  BackHandler,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { HeaderReturn } from "../../components/HeaderReturn";
import { api } from "../../services/api";
import { styles } from "./styles";

interface UserResponse {
  name: string;
  email: string;
  cpf: string;
}

export function Profile() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [user, setUser] = useState<UserResponse>({} as UserResponse);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const { navigate } = useNavigation();

  function handleBackPress() {
    navigate("Settings");
    return true;
  }

  useEffect(() => {
    const backButtonHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );
    return () => backButtonHandler.remove();
  }, []);

  function handleGetUser() {
    api.get<UserResponse>("/unique-user").then((response) => {
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setCpf(response.data.cpf);
    });
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  function handleUpdateUser() {
    api
      .post("/update/user", {
        name,
        email,
        cpf,
      })
      .then((response) => {
        console.log(response.data);
        setIsUpdated(false);
        handleGetUser();
      });
    setIsUpdated(false);
  }

  return (
    <View>
      <HeaderReturn title="Dados Pessoais" />
      <ScrollView>
        <View style={styles.header}>
          <View />
          <TouchableOpacity onPress={() => setIsUpdated(!isUpdated)}>
            <Text style={styles.headerButtonText}>Alterar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.textGroup}>
            <Text style={styles.text}>E-mail</Text>
            <TextInput
              editable={isUpdated}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.textGroup}>
            <Text style={styles.text}>Nome</Text>
            <TextInput
              editable={isUpdated}
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.textGroup}>
            <Text style={styles.text}>CPF</Text>
            <TextInputMask
              type="cpf"
              editable={isUpdated}
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handleUpdateUser}
            disabled={!isUpdated}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
