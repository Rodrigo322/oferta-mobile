import { useNavigation } from "@react-navigation/native";
import { PlusCircle } from "phosphor-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Tomate from "../../assets/Tomate.png";
import { styles } from "./styles";

export function Card() {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate("DetailsProduct")}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageView}>
          <Image style={styles.cardImage} source={Tomate} />
        </View>
        <Text style={styles.cardTitleText}>Tomate</Text>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardInfoText}>R$ 18,99Kg</Text>
          <PlusCircle color="#343F4B" size={30} weight="fill" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
