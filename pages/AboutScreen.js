import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Button,
  View,
} from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ alignItems: "center", padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Second Page</Text>
        <Image
          source={{
            uri: "https://picsum.photos/200",
          }}
          style={{ width: 150, height: 150, marginBottom: 20 }}
        />
        <View>
          <Button
            title="Go to Home Page"
            onPress={() => navigation.navigate("Home")}
            color={"#000"}
          />
        </View>
        <View>
          <Button
            title="Contact us"
            onPress={() => navigation.navigate("Contact")}
            color="#000"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
