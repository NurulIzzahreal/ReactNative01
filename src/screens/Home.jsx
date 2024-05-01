import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Tombol from "../components/Tombol";

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('About')}
              style={StyleSheet.btn}>
              <Text>Ke About</Text>
            </TouchableOpacity>
            <Tombol onPress={() => navigation.navigate('About')} />
            <Tombol onPress={() => navigation.navigate('Kontak')} />
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