import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

import { MinusCircle, PlusCircle } from "phosphor-react-native";
import LogoImg from "../../assets/Happy_Farm.png";
import tomate from "../../assets/Tomate.png";

export function DetailsProduct() {
  return (
    <View>
      <HeaderReturn title="Início" />
      <View style={styles.container}>
        <Image style={styles.image} source={LogoImg} />

        <View style={styles.product}>
          <Image style={styles.productImage} source={tomate} />
          <Text style={styles.productTitle}>Tomate</Text>
        </View>

        <View style={styles.cartProductButtons}>
          <TouchableOpacity>
            <PlusCircle color="#019972" size={60} weight="duotone" />
          </TouchableOpacity>
          <Text style={styles.cartProductButtonsText}>1</Text>
          <TouchableOpacity>
            <MinusCircle color="#019972" size={60} weight="duotone" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Valor: R$ 6,00</Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Ir para o carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  product: {
    borderWidth: 1,
    borderColor: "#019972",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#DFEDE9",
  },
  productImage: {
    width: 200,
    height: 200,
  },
  productTitle: {
    color: "#019972",
    fontSize: 18,
    fontWeight: "800",
  },
  cartProductButtons: {
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  cartProductButtonsText: {
    fontSize: 50,
    padding: 10,
    paddingHorizontal: 50,
    color: "#019972",
  },
  footer: {
    height: 80,
    borderTopWidth: 1,
    borderColor: "#019972",
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerText: {
    color: "#019972",
    fontWeight: "500",
    fontSize: 15,
  },
  footerButton: {
    height: 40,
    width: 150,
    backgroundColor: "#019972",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  footerButtonText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
  },
});
