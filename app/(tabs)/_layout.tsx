import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import { TouchableOpacity } from 'react-native-ui-lib';
import RenderTabIcon, { getTabIcon } from '@/helpers/RenderTabIcon';
import Settings from './settings';

export default function App() {
    const handleTabPress = (routeName: string, navigate: any) => {
        const payload = {
            routeName,
            icon: getTabIcon(routeName)
        }
        navigate(routeName)
    }

    return (
        <CurvedBottomBarExpo.Navigator
            style={styles.bottomBar}
            height={60}
            circleWidth={50}
            bgColor="white"
            initialRouteName="index"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <View style={styles.btnCircle}>
                    <Ionicons
                        name="add"
                        size={24}
                        color="white"
                        onPress={() => navigate("modal")}
                    />
                </View>
            )}
            tabBar={({ routeName, selectedTab, navigate }) => {
                return (
                    <TouchableOpacity
                        onPress={() => handleTabPress(routeName, navigate)}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {RenderTabIcon(routeName, selectedTab)}
                    </TouchableOpacity>
                );
            }}
        >
            <CurvedBottomBarExpo.Screen
                name="Home"
                position="LEFT"
                component={() => (
                    <View style={styles.screen}>
                        <Text>Home Screen</Text>
                    </View>
                )}
            />
            <CurvedBottomBarExpo.Screen
                name="Customers"
                position="LEFT"
                component={() => (
                    <View style={styles.screen}>
                        <Text>Customer Screen</Text>
                    </View>
                )}
            />
            <CurvedBottomBarExpo.Screen
                name="Documents"
                position="RIGHT"
                component={() => (
                    <View style={styles.screen}>
                        <Text>Documents Screen</Text>
                    </View>
                )}
            />
            <CurvedBottomBarExpo.Screen
                name="Settings"
                position="RIGHT"
                component={Settings}
            />
        </CurvedBottomBarExpo.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBar: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        elevation: 10,
    },
    btnCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        elevation: 10,
        top: -15,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});
