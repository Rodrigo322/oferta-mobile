import { useNavigation } from "@react-navigation/native";
import { PlusCircle } from "phosphor-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export interface CardProps {
  id: number;
  nome: string;
  preco: number;
  img: string;
}

export function Card({ id, nome, preco, img }: CardProps) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigate("DetailsProduct", { id })}
    >
      <View style={styles.cardImageView}>
        <Image style={styles.cardImage} source={{ uri: img }} />
      </View>
      <Text style={styles.cardTitleText}>{nome}</Text>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.cardInfoText}>R$ {preco}Kg</Text>
        <PlusCircle color="#343F4B" size={30} weight="fill" />
      </View>
    </TouchableOpacity>
  );
}
