import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

interface HeaderReturnProps {
  title: string;
}

export function HeaderReturn(props: HeaderReturnProps) {
  const navigate = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {/* <TouchableOpacity onPress={() => navigate.goBack()}>
          <CaretLeft color="#fff" size={32} weight="thin" />
        </TouchableOpacity> */}
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <Image source={LogoImg} style={styles.headerImg} />
    </View>
  );
}
