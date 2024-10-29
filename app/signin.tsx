import { View, Text, Button, StyleSheet } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import React from "react";
import Colors from "@/constants/Colors";

export default function SignIn() {
    const router = useRouter();
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Signin Screen</Text>

            <Link replace href="/(tabs)" style={{ marginTop: 20 }}>Go to Home</Link>
            <View style={styles.pb20}>
                <Button
                    color={Colors.light.primary}
                    title="Create a new account"
                    onPress={() => router.navigate('signup')}
                />
            </View>
            <View style={styles.pb20}>
                <Button title="Go back" onPress={() => router.back()} />
            </View>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    m20: {
        margin: 20
    },
    pb20: {
        padding: 20
    }
})