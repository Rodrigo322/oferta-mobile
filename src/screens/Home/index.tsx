import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Card, CardProps } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";
import { api } from "../../services/api";

import { styles } from "./styles";

export function Home() {
  const [products, setProduct] = useState<CardProps[]>([]);

  useEffect(() => {
    api.get<CardProps[]>("/produtos").then((response) => {
      setProduct(response.data);
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
          <Text style={styles.infoHomeText}>Frutas, Verduras e Legumes</Text>
          <View style={styles.listHomeProduct}>
            <ScrollView style={styles.scrollCardList}>
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                data={products}
                renderItem={({ item }) => (
                  <Card
                    id={item.id}
                    img={item.img}
                    preco={item.preco}
                    nome={item.nome}
                  />
                )}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
