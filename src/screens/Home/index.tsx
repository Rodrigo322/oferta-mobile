import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";
import { api } from "../../services/api";

import { Card, CardProps } from "../../components/CardProduct";
import { useTabContext } from "../../contexts/TabContext";
import { styles } from "./styles";

export function Home() {
  const [products, setProducts] = useState<CardProps[]>([]);
  const { idBank, setShowTab } = useTabContext();

  const { navigate } = useNavigation();

  useEffect(() => {
    if (idBank === 0) {
      return;
    } else {
      api.get<CardProps[]>(`produtos/${idBank}`).then((response) => {
        setProducts(response.data);
      });
    }
  }, [idBank]);

  function handleSelectBank() {
    setShowTab(false);
    navigate("SelectBank");
  }

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
          <View style={styles.Header}>
            <Text style={styles.infoHomeText}>Frutas, Verduras</Text>
            <TouchableOpacity onPress={handleSelectBank}>
              <Text style={styles.HeaderText}>Selecionar banca</Text>
            </TouchableOpacity>
          </View>
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
