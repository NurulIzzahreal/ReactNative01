import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Button from "../components/Button";

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('HalamanBeranda')}
              style={StyleSheet.btn}>
              <Text>Ke Beranda</Text>
            </TouchableOpacity>
            <Tombol onPress={() => navigation.navigate('HalamanBeranda')} />
            <Tombol onPress={() => navigation.navigate('HalamanProfil')} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        padding: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
    },
});