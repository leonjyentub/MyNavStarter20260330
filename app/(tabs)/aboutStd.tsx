import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  // 從 URL 中解構出參數
  const { user, id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>哈囉，{user}！</Text>
      <Text style={styles.text}>你的 ID 是：{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
