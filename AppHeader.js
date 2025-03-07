import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const AppHeader = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Ionicons name="menu" size={24} color="white" style={styles.icon} />
                <Text style={styles.title}>Meu Aplicativo</Text>
                <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
        backgroundColor: 'skyblue',
    },
    header: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default AppHeader;
