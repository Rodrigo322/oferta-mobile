import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";
import { api } from "../../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, CardProps } from "../../components/CardProduct";
import { styles } from "./styles";

// interface RouteParams {
//   id: number;
//   name: string;
// }

export function Home() {
  const [products, setProducts] = useState<CardProps[]>([]);
  const [idBank, setIdBank] = useState<string | null>();
  // const route = useRoute();

  // const { id } = route.params as RouteParams;
  async function getProduct() {
    const id = await AsyncStorage.getItem("@storage:idBank");
    console.log("id da banca " + id);
    setIdBank(id);
  }
  getProduct();

  useEffect(() => {
    api.get<CardProps[]>(`produtos/${idBank}`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.scrollHome}
        scrollEventThrottle={16}
      >
        <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
          <Highlights />
          <Text style={styles.infoHomeText}>Frutas, Verduras</Text>
          <View style={styles.listHomeProduct}>
            {products.map((product) => (
              <Card
                key={product.id}
                img={product.img}
                nome={product.nome}
                id={product.id}
                preco={product.preco}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
