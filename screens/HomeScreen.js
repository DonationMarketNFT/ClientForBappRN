import react from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { RenderCampaign } from "./components/RenderCampaign";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <StatusBar barStyle="light-content"></StatusBar>
      <WebView source={{ uri: "http://localhost:3003" }}></WebView>
    </SafeAreaView>
  );
};
export default HomeScreen;
