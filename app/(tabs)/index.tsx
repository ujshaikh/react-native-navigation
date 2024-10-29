import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Link href="/details">Go to Details</Link>
            <Link href="/settings">Go to Settings</Link>
            <Link href="/modal" style={styles.link}>
                Open modal
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        paddingTop: 20,
        fontSize: 20,
    },
});