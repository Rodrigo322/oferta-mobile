import {
  MapPin,
  MinusCircle,
  PlusCircle,
  ShoppingBag,
  WhatsappLogo,
  XCircle,
} from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

import { TouchableOpacity } from "react-native-gesture-handler";
import Tomate from "../../assets/Tomate.png";

export function Cart() {
  return (
    <View>
      <HeaderReturn title="Carrinho de compras" />
      <View style={styles.cartHeader}>
        <Text style={[styles.cartHeaderText, styles.cartHeaderTextFirst]}>
          1 Item
        </Text>
        <View style={[styles.cartHeaderValueTotal]}>
          <Text style={styles.cartHeaderText}>Valor total:</Text>
          <Text style={styles.cartHeaderText}>R$ 8,00</Text>
        </View>
      </View>
      <Text style={styles.cartAddressesTitle}>Entregar em:</Text>
      <View style={styles.cartAddress}>
        <MapPin color="#019972" size={32} weight="thin" />
        <View style={styles.cartAddressContent}>
          <Text style={styles.cartAddressContentText}>Posse, Goiás</Text>
          <Text style={styles.cartAddressContentText}>
            Rua Santa Lucia, Quadra 06, Lote 17. Santa Luzia.
          </Text>
        </View>
      </View>
      <View style={styles.cartScrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>

          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} source={Tomate} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>Tomate</Text>
              <Text style={styles.cartProductText}>R$ 8,00</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <TouchableOpacity>
                <PlusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
              <Text style={styles.cartProductButtonsText}>1</Text>
              <TouchableOpacity>
                <MinusCircle color="#019972" size={32} weight="thin" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={32} weight="fill" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.cartContainerFooterButtons}>
        <TouchableOpacity style={styles.cartFooterButton}>
          <PlusCircle color="#fff" size={32} weight="duotone" />
          <Text style={styles.cartFooterButtonText}>Produtos</Text>
        </TouchableOpacity>
        <WhatsappLogo color="#30d84e" size={60} weight="duotone" />
        <TouchableOpacity style={styles.cartFooterButton}>
          <ShoppingBag color="#FFF" size={32} weight="duotone" />
          <Text style={styles.cartFooterButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#3eb091",
  },
  cartHeaderText: {
    color: "#fff",
    fontWeight: "600",
  },
  cartHeaderTextFirst: {
    paddingHorizontal: 20,
  },
  cartHeaderValueTotal: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
  cartAddressesTitle: {
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#019972",
    paddingBottom: 15,
    paddingTop: 20,
  },
  cartAddress: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingBottom: 20,
  },
  cartAddressContent: {
    paddingHorizontal: 5,
  },
  cartAddressContentText: {
    color: "#019972",
  },
  cartScrollView: {
    height: "45%",
  },
  cartProduct: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#019972",
    marginBottom: 10,
    backgroundColor: "#DFEDE9",
  },
  cartProductImage: {
    width: 50,
    height: 50,
  },
  cartProductTextInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cartProductText: {
    color: "#019972",
  },
  cartProductButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartProductButtonsText: {
    padding: 10,
    color: "#019972",
  },
  cartContainerFooterButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 50,
  },
  cartFooterButton: {
    width: 100,
    height: 60,
    borderRadius: 7,
    backgroundColor: "#019972",
    alignItems: "center",
    justifyContent: "center",
  },
  cartFooterButtonText: {
    color: "#FFf",
  },
});
