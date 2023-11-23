import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../Store/hooks'
import { FontAwesome } from '@expo/vector-icons';
import { deleteFavorite } from '../Store/FavoriteSlice';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
    item: any
    //handleFunction: () => void
}

const ListFavorites = (props: Props) => {

    const dispatch = useAppDispatch();

    const renderRightActions = () => {
        return (
            <TouchableOpacity style={{ alignSelf: 'center', marginRight: 3 }} onPress={deleteFavorites}>
                <View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5959', borderRadius: 15 }}>
                    <FontAwesome name="trash" size={24} color="white" />
                </View>
            </TouchableOpacity>
        )
    }

    function deleteFavorites() {
        dispatch(deleteFavorite(props.item.id))
    }


    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions} >
                <View style={{ alignSelf: 'center', width: '95%', height: 120, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', borderRadius: 15, margin: 15, padding: 5 }}>
                    <View style={{ alignItems: 'flex-start', gap: 5 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{props.item?.categories[0]?.name}</Text>
                            <Text style={{ fontSize: 16 }}>Sprinklr</Text>
                        </View>
                        <View style={{ padding: 6, backgroundColor: '#ff5151', borderRadius: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>{props.item?.locations[0]?.name}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end' }}>
                        <Text style={{ fontWeight: '500', color: "#ff5151" }}>{props.item?.levels[0]?.name}</Text>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

export default ListFavorites