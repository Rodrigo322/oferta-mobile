import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";
import { api } from "../../services/api";

import LogoImg from "../../assets/Logo4.png";
import { styles } from "./styles";

interface RequestResponseProps {
  id: number;
  valor_total: number;
  usuario_vendedor: {
    nome: string;
  };
}

export function MyRequests() {
  const [request, setRequest] = useState<RequestResponseProps[]>([]);
  useEffect(() => {
    api.get<RequestResponseProps[]>("/vendas/user").then((response) => {
      setRequest(response.data);
    });
  }, []);
  return (
    <View>
      <HeaderReturn title="Meus Pedidos" />
      <ScrollView>
        {request.map((req) => (
          <View key={req.id} style={styles.RequestCard}>
            <Image source={LogoImg} style={styles.RequestImage} />
            <View style={styles.RequestContent}>
              <Text style={styles.RequestTitle}>
                Compra com {req.usuario_vendedor.nome}
              </Text>
            </View>
            <Text style={styles.RequestAbout}>R$ {req.valor_total}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
