//一個簡單的接收參數的頁面
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutStd() {   
    const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                測試頁面：{id}</Text>
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
});