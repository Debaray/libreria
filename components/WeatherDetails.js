import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitsSystem }) {
    const {
        main: { feels_like, humidity, pressure },
        wind: { speed },
    } = currentWeather;
    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Feels like :</Text>
                            <Text style={styles.textSecondary}>{feels_like} °</Text>
                        </View>
                    </View>
                </View>
    )
}

