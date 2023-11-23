import { View, Text, ActivityIndicator, Dimensions, ScrollView, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Entypo, AntDesign } from '@expo/vector-icons';
import useFetch from '../Custom-Hook/useFetch'
import RenderHTML from 'react-native-render-html'
import { getById } from '../api/apiCall'
import { useAppDispatch } from '../Store/hooks';
import { addFavorite } from '../Store/FavoriteSlice';
import { useAppSelector } from '../Store/hooks';

const { width }: any = Dimensions.get('window');
const URL = "https://www.themuse.com/api/public/jobs?page=1"
const DetailScreen = () => {

    const favorites = useAppSelector((state) => state.favorites.favorites)
    const dispatch = useAppDispatch();

    const [detail, setData] = useState(null);

    const route = useRoute();
    const { id }: any = route.params;


    const fetchData = async (id: string) => {
        const response = await getById(id)
        if (response) {
            setData(response)
        }
    }

    useEffect(() => {
        fetchData(id);
    }, [])

    function adddFavorite() {
        dispatch(addFavorite(detail))
    }
    return (
        <View style={{ flex: 1, marginTop: 25 }}>
            {
                detail ? (
                    <>
                        <View style={{ backgroundColor: '#cccccc', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 5, color: '#666666' }}>{detail?.categories[0]?.name}</Text>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}><Text style={{ color: '#ff5959' }}>Locations : </Text>{detail?.locations[0]?.name}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}><Text style={{ color: '#ff5959' }}>Job Level : </Text>{detail?.levels[0]?.name}</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: '#666666', fontSize: 22 }}>Job Detail</Text>
                            </View>
                        </View>
                        <ScrollView style={{ alignSelf: 'center', borderWidth: 1, paddingHorizontal: 0, marginBottom: 10 }}>
                            <RenderHTML
                                contentWidth={width}
                                source={{ html: detail?.contents || '<p></p>' }}
                            ></RenderHTML>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginBottom: 10 }}>
                            <Pressable style={{ backgroundColor: '#ff5959', alignItems: 'center', flexDirection: 'row', width: 170, height: 40, justifyContent: 'center', gap: 15, borderRadius: 15 }}>
                                <Entypo name="log-out" size={24} color="white" />
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Submit</Text>
                            </Pressable>
                            <Pressable onPress={() => adddFavorite()} style={{ backgroundColor: '#ff5959', alignItems: 'center', flexDirection: 'row', width: 170, height: 40, justifyContent: 'center', gap: 15, borderRadius: 15 }}>
                                <AntDesign name="heart" size={24} color="white" />
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Favorite Job</Text>
                            </Pressable>
                        </View>
                    </>
                ) : <ActivityIndicator size={'large'}></ActivityIndicator>
            }

        </View>
    )
}

export default DetailScreen