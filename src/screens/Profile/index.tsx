import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { HeaderReturn } from "../../components/HeaderReturn";
import { styles } from "./styles";

export function Profile() {
  return (
    <View>
      <HeaderReturn title="Dados Pessoais" />
      <View style={styles.header}>
        <View />
        <TouchableOpacity>
          <Text style={styles.headerButtonText}>Alterar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.textGroup}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="Rodrigo@gmail.com"
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.text}>Nome</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="Rodrigo Lucas"
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.text}>CPF</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="000.000.000-00"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
