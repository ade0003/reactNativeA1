import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-web";
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#37392e",
      }}
    >
      <Text style={{ fontSize: "xxx-large", color: "#ddcecd" }}>
        Home Screen
      </Text>

      <View>
        <Button
          title="Read more about us"
          onPress={() => navigation.navigate("About")}
          color="#000"
        />
      </View>
      <View>
        <Button
          title="Contact us"
          onPress={() => navigation.navigate("Contact")}
          color="#000"
        />
      </View>
    </SafeAreaView>
  );
}
