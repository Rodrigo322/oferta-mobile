import { useNavigation } from "@react-navigation/native";
import {
  MapPin,
  MinusCircle,
  PlusCircle,
  ShoppingBag,
  WhatsappLogo,
  XCircle,
} from "phosphor-react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { HeaderReturn } from "../../components/HeaderReturn";

import Tomate from "../../assets/Tomate.png";
import { styles } from "./styles";

export function Cart() {
  const { navigate } = useNavigation();
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
        </ScrollView>
      </View>

      <View style={styles.cartContainerFooterButtons}>
        <TouchableOpacity style={styles.cartFooterButton}>
          <PlusCircle color="#fff" size={32} weight="duotone" />
          <Text style={styles.cartFooterButtonText}>Produtos</Text>
        </TouchableOpacity>
        <WhatsappLogo color="#019972" size={60} weight="duotone" />
        <TouchableOpacity
          onPress={() => navigate("BuyFinalized")}
          style={styles.cartFooterButton}
        >
          <ShoppingBag color="#FFF" size={32} weight="duotone" />
          <Text style={styles.cartFooterButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
