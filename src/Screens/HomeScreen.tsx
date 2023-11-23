import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../Custom-Hook/useFetch'
import ListJobs from '../components/ListJobs'


const URL = "https://www.themuse.com/api/public/jobs?page=1"

type Props = {}

const HomeScreen = (props: Props) => {


    const { data, loading } = useFetch(URL)

    const listRenderItem = ({ item }: any) => {
        if (item?.categories[0]?.name !== "Unknown") {
            return (
                <ListJobs item={item}></ListJobs>
            )
        } else {
            return null
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {
                loading ? <ActivityIndicator size={'large'} color={'red'} style={{ alignSelf: 'center' }}></ActivityIndicator> : (
                    <FlatList
                        data={data}
                        renderItem={listRenderItem}
                        contentContainerStyle={{ padding: 10 }}
                    >

                    </FlatList>
                )
            }
        </View>
    )
}

export default HomeScreen