import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import React from "react";

export default function SignUp() {
    const router = useRouter();
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Signup Screen</Text>

            <Link push href="/index">Go to Home</Link>

            <Button title="Go back" onPress={() => router.back()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}