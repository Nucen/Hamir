import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"

export default function App() {
  return (
    <View style={tw`bg-black`}>
      <Text style={tw`text-white`}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
