import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Card, CardProps } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";

import { api } from "../../services/api";

import { useTabContext } from "../../contexts/TabContext";

import { checkInternetConnection } from "../../utils/netInfo";
import { styles } from "./styles";

export function Home() {
  const [products, setProducts] = useState<CardProps[]>([]);
  const { idBank, setShowTab } = useTabContext();
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    setLoading(true);
    if (idBank === "") {
      Alert.alert("Anteção", "Por favor selecione uma banca!");
      setLoading(false);
      return navigate("SelectBank");
    } else {
      setProducts([]);
      checkInternetConnection().then((isConnected) => {
        if (!isConnected) {
          Alert.alert("Sem conexão", "Você está sem conexão com a internet.");
          return;
        }
        api
          .get<CardProps[]>(`/get-all-product/store/${idBank}`)
          .then((response) => {
            setProducts(response.data);
            setLoading(false);
          });
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
            {loading && <ActivityIndicator size="large" color="#019972" />}
            {products.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                name={product.name}
                id={product.id}
                price={product.price}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
