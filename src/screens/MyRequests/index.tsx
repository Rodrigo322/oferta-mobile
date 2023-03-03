import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";
import { api } from "../../services/api";

import LogoImg from "../../assets/Logo.png";
import { checkInternetConnection } from "../../utils/netInfo";
import { styles } from "./styles";

interface RequestResponseProps {
  id: string;
  total_value: number;
  seller: {
    name: string;
  };
}

export function MyRequests() {
  const [request, setRequest] = useState<RequestResponseProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    checkInternetConnection().then((isConnected) => {
      if (!isConnected) {
        Alert.alert("Sem conexão", "Você está sem conexão com a internet.");
        setLoading(false);
        return;
      }
      api
        .get<RequestResponseProps[]>("/get-all-sale-by-user")
        .then((response) => {
          setRequest(response.data);
          setLoading(false);
        });
    });
  }, []);
  return (
    <View>
      <HeaderReturn title="Meus Pedidos" />
      {loading && (
        <ActivityIndicator style={styles.loading} size={50} color="#019972" />
      )}

      {!loading && (
        <ScrollView>
          {request.map((req) => (
            <View key={req.id} style={styles.RequestCard}>
              <Image source={LogoImg} style={styles.RequestImage} />
              <View style={styles.RequestContent}>
                <Text style={styles.RequestTitle}>
                  Compra com {req.seller.name}
                </Text>
              </View>
              <Text style={styles.RequestAbout}>R$ {req.total_value}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
