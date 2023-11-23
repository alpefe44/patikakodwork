import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './Screens/DetailScreen';
import Favorites from './Screens/Favorites';


export type DrawerNavigationProps = {
    JobsScreen: undefined,
    FavoritedJobs: undefined,
    StackScreens: undefined
}

export type RootNavigationProps = {
    HomeScreen: undefined,
    DetailScreen: {
        id: string
    },
    Drawer: DrawerNavigationProps
}

const Drawer = createDrawerNavigator<DrawerNavigationProps>();
const RootStack = createNativeStackNavigator<RootNavigationProps>();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='JobsScreen' component={HomeScreen} options={{headerTitleAlign:'center' , headerTitle : 'Jobs'}}></Drawer.Screen>
            <Drawer.Screen name='FavoritedJobs' component={Favorites} options={{headerTitleAlign:'center' , headerTitle:'Favorites'}}></Drawer.Screen>
        </Drawer.Navigator> 
    )
}


function MyStack() {
    return (
        <RootStack.Navigator initialRouteName='Drawer'>
            <RootStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}></RootStack.Screen>
            <RootStack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }}></RootStack.Screen>
            <RootStack.Screen name='Drawer' component={MyDrawer} options={{ headerShown: false }}></RootStack.Screen>
        </RootStack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    )
}


export default Navigator