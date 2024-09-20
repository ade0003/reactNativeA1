import { SafeAreaView, FlatList, Text, Pressable, Button } from "react-native";
import { View } from "react-native-web";

const data = [
  { id: "1", title: "Hello" },
  { id: "2", title: "Goodbye" },
  { id: "3", title: "Adios" },
];

export default function ContactScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Pressable
      style={{
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#000",
        color: "#fff",
        alignItems: "center",
      }}
      onPress={() => alert(item.title)}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#37392e" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Third Page</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate("Home")}
          color="000"
        />
      </View>
      <View>
        <Button
          title="Read more about us"
          onPress={() => navigation.navigate("About")}
          color="#000"
        />
      </View>
    </SafeAreaView>
  );
}
