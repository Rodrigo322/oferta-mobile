import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { HeaderReturn } from "../../components/HeaderReturn";
import { styles } from "./styles";

export function ResetPassword() {
  return (
    <View>
      <HeaderReturn title="Alterar senha" />
      <View style={styles.header}>
        <View />
        <TouchableOpacity>
          <Text style={styles.headerButtonText}>Alterar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.textGroup}>
          <Text style={styles.text}>Senha antiga</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="*************"
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.text}>Nova senha</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="*************"
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.text}>Confirme a nova senha</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value="*************"
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
