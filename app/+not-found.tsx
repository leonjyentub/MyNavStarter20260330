import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NotFoundScreen(): React.JSX.Element {
  return (
    <>
      <Stack.Screen options={{ title: "哎呀！" }} />
      <View style={styles.container}>
        <Text style={styles.text}>此頁面不存在。</Text>
        <Link href="/" style={styles.link}>
          回到首頁
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18 },
  link: { marginTop: 15, color: "blue" },
});
