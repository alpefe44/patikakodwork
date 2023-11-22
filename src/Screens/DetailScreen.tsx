import { View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import useFetch from '../Custom-Hook/useFetch'
import RenderHTML from 'react-native-render-html'
import { getById } from '../api/apiCall'

const { width }: any = Dimensions.get('window');
const URL = "https://www.themuse.com/api/public/jobs?page=1"
const DetailScreen = () => {

    const [detail, setData] = useState(null);

    const route = useRoute();
    const { id }: any = route.params;
    console.log(id)

    const fetchData = async (id: string) => {
        const response = await getById(id)
        if (response) {
            setData(response)
        }
    }

    useEffect(() => {
        fetchData(id);
    }, [])


    return (
        <View style={{ flex: 1, marginTop: 25 }}>
            {
                detail ? (
                    <>
                        <View style={{ height: 110, backgroundColor: '#cccccc', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 5, color: '#666666' }}>{detail?.categories[0]?.name}</Text>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}><Text style={{ color: '#ff5959' }}>Locations : </Text>{detail?.locations[0]?.name}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}><Text style={{ color: '#ff5959' }}>Job Level : </Text>{detail?.levels[0]?.name}</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: '#666666', fontSize: 22 }}>Job Detail</Text>
                            </View>
                        </View>
                        <ScrollView style = {{alignSelf:'center'}}>
                            <RenderHTML
                                baseStyle={{ padding: 5}}
                                contentWidth={width}
                                source={{ html: detail?.contents || '<p></p>' }}
                            ></RenderHTML>
                        </ScrollView>
                    </>
                ) : <ActivityIndicator size={'large'}></ActivityIndicator>
            }

        </View>
    )
}

export default DetailScreen