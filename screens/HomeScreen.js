import react from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { RenderCampaign } from "./components/RenderCampaign";

const HomeScreen = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <WebView source={{ uri: "http://localhost:3003" }}></WebView>
    </View>
  );
};
export default HomeScreen;
