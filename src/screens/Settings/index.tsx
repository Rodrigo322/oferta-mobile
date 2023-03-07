import { useNavigation } from "@react-navigation/native";
import {
  Article,
  CaretRight,
  Door,
  IdentificationBadge,
  LockKey,
  MapPin,
  Question,
  SignOut,
  XSquare,
} from "phosphor-react-native";
import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { HeaderReturn } from "../../components/HeaderReturn";
import { ModalApp } from "../../components/Modal";
import { useAuth } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { useTabContext } from "../../contexts/TabContext";
import { api } from "../../services/api";
import { styles } from "./styles";

interface UserPropsResponse {
  name: string;
}

export function Settings() {
  const [userName, setUserName] = useState("");
  const { logout } = useAuth();
  const { setShowTab, setIdBank } = useTabContext();
  const { removeAllFromCart } = useContext(CartContext);
  const { navigate } = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onModalActive = () => {
    setIsModalVisible(true);
  };
  +useEffect(() => {
    api.get<UserPropsResponse>("/unique-user").then((user) => {
      setUserName(user.data.name);
    });
  }, []);

  function handleSignOut() {
    logout();
    setShowTab(false);
    setIdBank("");
    removeAllFromCart();
  }

  return (
    <View style={styles.container}>
      <HeaderReturn title="Configurações" />
      <Text style={styles.settingUserName}>Olá, {userName}</Text>
      <View style={styles.settingsContainerOptions}>
        <Text style={styles.settingOptionTitle}>Minha Conta</Text>

        <TouchableOpacity
          style={[
            styles.settingContainerOptionsGroup,
            styles.settingContainerOptionsGroupFirst,
          ]}
          onPress={() => navigate("AddressProfile")}
        >
          <View style={styles.settingContainerOptionsIcon}>
            <MapPin color="#019972" size={32} weight="thin" />
            <Text style={styles.settingOptionsText}>Endereço de entrega</Text>
          </View>
          <CaretRight color="#019972" size={32} weight="thin" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Profile")}
          style={styles.settingContainerOptionsGroup}
        >
          <View style={styles.settingContainerOptionsIcon}>
            <IdentificationBadge color="#019972" size={32} weight="thin" />
            <Text style={styles.settingOptionsText}>Dados pessoais</Text>
          </View>
          <CaretRight color="#019972" size={32} weight="thin" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("ResetPassword")}
          style={styles.settingContainerOptionsGroup}
        >
          <View style={styles.settingContainerOptionsIcon}>
            <LockKey color="#019972" size={32} weight="thin" />
            <Text style={styles.settingOptionsText}>Alterar senha</Text>
          </View>
          <CaretRight color="#019972" size={32} weight="thin" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("DeactivateAccount")}
          style={styles.settingContainerOptionsGroup}
        >
          <View style={styles.settingContainerOptionsIcon}>
            <XSquare color="#019972" size={32} weight="thin" />
            <Text style={styles.settingOptionsText}>Desativar conta</Text>
          </View>
          <CaretRight color="#019972" size={32} weight="thin" />
        </TouchableOpacity>
      </View>
      <Text
        style={[styles.settingOptionTitle, styles.settingOptionTitleSecond]}
      >
        Geral
      </Text>
      <TouchableOpacity
        onPress={onModalActive}
        style={[
          styles.settingContainerOptionsGroup,
          styles.settingContainerOptionsGroupFirst,
        ]}
      >
        <View style={styles.settingContainerOptionsIcon}>
          <Article color="#019972" size={32} weight="thin" />
          <Text style={styles.settingOptionsText}>Sobre o OFairTa</Text>
        </View>
        <CaretRight color="#019972" size={32} weight="thin" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingContainerOptionsGroup}>
        <View style={styles.settingContainerOptionsIcon}>
          <Question color="#019972" size={32} weight="thin" />
          <Text style={styles.settingOptionsText}>Preciso de ajuda?</Text>
        </View>
        <CaretRight color="#019972" size={32} weight="thin" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.settingContainerOptionsGroup}
      >
        <View style={styles.settingContainerOptionsIcon}>
          <Door color="#d46b71" size={32} weight="thin" />
          <Text
            style={[styles.settingOptionsText, styles.settingOptionsTextEnd]}
          >
            Sair
          </Text>
        </View>
        <SignOut color="#d46b71" size={32} weight="thin" />
      </TouchableOpacity>

      <ModalApp
        title="Sobre o Oferta"
        isVisible={isModalVisible}
        onClose={onModalClose}
        backgroundColor="#3eb091"
      >
        <View
          style={{
            width: "100%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              lineHeight: 25,
              textAlign: "justify",
            }}
          >
            O OFairTa tem por objetivo proporcionar facilidade na compra e venda
            de produtos oriundos dos pequenos produtores rurais da microrregião
            do Vão do Paranã. O aplicativo será disponibilizado na loja virtual
            de aplicativos Google Play app store de forma gratuita e será
            alimentado com dados de pequenos produtores da região alvo através
            de um banco de dados gerado pelo cadastro de produtores e produtos
            ofertados no próprio aplicativo.
          </Text>
        </View>
      </ModalApp>
    </View>
  );
}
