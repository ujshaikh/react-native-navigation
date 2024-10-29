import React from "react";
import { Stack } from "expo-router";

export const unstable_settings = {
    initialRouteName: "home",
};

export default function Layout() {
    return (<Stack initialRouteName="home"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} getId={
            ({ params }) => String(Date.now())
        } />
        <Stack.Screen
            name="modal"
            options={{
                presentation: "modal",
                headerTitle: "Demo Modal"
            }}
        />
    </Stack>);
}