import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function SettingsView() {
    const insets = useSafeAreaInsets();
    
    return (
        <View style={{...styles.mainContainer, paddingTop: insets.top}}>
            <Text>SettingsView</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent:'flex-start'
    }
});

export default SettingsView;