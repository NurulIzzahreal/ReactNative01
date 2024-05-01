import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";

const Tombol = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={StyleSheet.btn}>
            <Text>Ke About</Text>
        </TouchableOpacity>
    );
};

export default Tombol;

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        padding: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
    },
});