import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { Card } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";

import { styles } from "./styles";

export function Home() {
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
            <ScrollView horizontal={true} style={{ width: "100%" }}>
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
