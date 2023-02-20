import { useNavigation, useRoute } from "@react-navigation/native";
import { MinusCircle, PlusCircle } from "phosphor-react-native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/Happy_Farm.png";
import { HeaderReturn } from "../../components/HeaderReturn";
import { CartContext } from "../../contexts/CartContext";
import { api } from "../../services/api";
import { styles } from "./styles";

interface RouteParams {
  id: number;
}

interface DetailsProductProps extends RouteParams {
  nome: string;
  img: string;
  preco: number;
  Loja: {
    usuarioId: number;
  };
}

export function DetailsProduct() {
  const [product, setProduct] = useState<DetailsProductProps>(
    {} as DetailsProductProps
  );
  const [counterProduct, setCounterProduct] = useState(1);
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const { addToCart } = useContext(CartContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get<DetailsProductProps>(`/produto/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const handleAddCartProduct = () => {
    addToCart({
      id,
      img: product.img,
      name: product.nome,
      price: product.preco,
      quantity: counterProduct,
      userId: product.Loja.usuarioId,
    });
    navigate("Cart");
  };
  return (
    <View>
      <HeaderReturn title="Início" />
      <View style={styles.container}>
        <Image style={styles.image} source={LogoImg} />
        <View style={styles.product}>
          <Image style={styles.productImage} source={{ uri: product.img }} />
          <Text style={styles.productTitle}>{product.nome}</Text>
        </View>
        <View style={styles.cartProductButtons}>
          <TouchableOpacity
            onPress={() => setCounterProduct(counterProduct + 1)}
          >
            <PlusCircle color="#019972" size={60} weight="duotone" />
          </TouchableOpacity>
          <Text style={styles.cartProductButtonsText}>{counterProduct}</Text>
          <TouchableOpacity
            onPress={() => setCounterProduct(counterProduct - 1)}
          >
            <MinusCircle color="#019972" size={60} weight="duotone" />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Valor: R$ {product.preco}</Text>
          <TouchableOpacity
            onPress={handleAddCartProduct}
            style={styles.footerButton}
          >
            <Text style={styles.footerButtonText}>Ir para o carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
