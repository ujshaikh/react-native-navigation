import { Button, View } from 'react-native';

import { Link, useRouter } from 'expo-router';
import React from 'react';


export default function Settings() {
    const router = useRouter();

    const handleDismiss = (count: number) => {
        if (router.canDismiss()) {
            router.dismiss(count)
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Maybe dismiss" onPress={() => handleDismiss(3)} />
            <Link href="/signin" style={{ paddingTop: 20 }}>Go to Login</Link>
        </View>
    );
}
