import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationProps } from '../Navigator'

type Props = {
    item: any
}

const ListJobs = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigationProps>>();

    return (
        <Pressable onPress={
            () => {
                navigation.navigate("DetailScreen", {
                    id: props.item.id
                })
            }
        }>
            <View style={{ alignSelf: 'center', width: '95%', height: 120, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', borderRadius: 15, margin: 15, padding: 5 }}>
                <View style={{ alignItems: 'flex-start', gap: 5 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{props.item.categories[0].name}</Text>
                        <Text style={{ fontSize: 16 }}>Sprinklr</Text>
                    </View>
                    <View style={{ padding: 6, backgroundColor: '#ff5151', borderRadius: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>{props.item.locations[0].name}</Text>
                    </View>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontWeight: '500', color: "#ff5151" }}>{props.item.levels[0].name}</Text>
                </View>

            </View>
        </Pressable>
    )
}

export default ListJobs