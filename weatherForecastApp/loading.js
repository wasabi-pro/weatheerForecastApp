import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>Loading data...</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
})