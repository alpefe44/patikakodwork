import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../Store/hooks'
import { FontAwesome } from '@expo/vector-icons';
import ListJobs from '../components/ListJobs'
import ListFavorites from '../components/ListFavorites';

type Props = {}

const Favorites = (props: Props) => {
    const favorites = useAppSelector((state) => state.favorites.favorites)

    return (
        <View>
            {
                favorites.map((item , key) => (
                    <ListFavorites key={key} item={item}></ListFavorites>
                ))
            }
        </View>
    )
}


export default Favorites