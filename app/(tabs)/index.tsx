import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
export default function Index() {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
      <Button title="Go to About screen with params" onPress={() => {
        route.navigate("/about");
      }} />
      <Link href={{
          pathname: "/aboutStd",
          params: { user: "Link資管系學生", id: "hello-101" }
        }}
        style={styles.button}
      >
        帶參數前往關於頁面
      </Link>
      <Button title="帶參數前往關於頁面" onPress={() => {
        route.navigate({
          pathname: "/aboutStd",
          params: { user: "Button資管系學生", id: "hello-101" }
        });
      }} />
      {/* 用button加dynamic navigation的方式帶參數前往關於頁面 */}
      <Button title="帶參數前往關於頁面" onPress={() => {
        route.navigate({
          pathname: "/(tabs)/[id]",
          params: { id: "hello-101" }
        });
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
