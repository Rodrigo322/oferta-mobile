import { useNavigation } from "@react-navigation/native";
import { WhatsappLogo } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

export function BuyFinalized() {
  const { navigate } = useNavigation();
  return (
    <View>
      <HeaderReturn title="Início" />

      <View style={styles.container}>
        <View style={styles.logoWhatsapp}>
          <WhatsappLogo color="#019972" size={200} weight="duotone" />
        </View>
        <Text style={styles.title}>
          Sua compra será finalizada pelo Whatsapp!
        </Text>
        <Text style={styles.text}>
          Todos os produtos escolhidos por você serão enviados para o vendedor
          para que a compra seja confirmada!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigate("Home")}
          style={styles.footerButton}
        >
          <Text style={styles.footerText}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  logoWhatsapp: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#019972",
    paddingBottom: 15,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "300",
    fontSize: 18,
    color: "#019972",
    paddingBottom: 15,
  },
  footer: {
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButton: {
    backgroundColor: "#019972",
    height: 60,
    width: "100%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
  },
});
