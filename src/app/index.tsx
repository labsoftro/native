import {Button, Text, View, Alert} from "react-native";

export default function Index(){
  return(
    <View>
    <Text>Hello React Native - Teste Emulador</Text>
    <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
    </View>
  )
}