import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import {useColorScheme} from 'react-native';
import { CHROME_YELLOW, BLACK_PEARL, LONDON_SQUARE, ELUSIVE_BLUE, WHITE } from '../colors';


const Tab = createBottomTabNavigator();
const Tabs = () => {
    const isDark = useColorScheme() === "dark";
    console.log(isDark)
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor: isDark? BLACK_PEARL:WHITE
            }, 
            tabBarActiveTintColor : isDark? CHROME_YELLOW:BLACK_PEARL,
            tabBarInactiveTintColor : isDark? ELUSIVE_BLUE: BLACK_PEARL,
            headerStyle: {
                backgroundColor: isDark? BLACK_PEARL:WHITE
            },
            headerTitleStyle: {
                color: isDark? WHITE:BLACK_PEARL
            }
            }}>
            <Tab.Screen name="Movies" component={Movies} options={{
                tabBarIcon: ({focused, color, size}) => {
                    
                }
            }} />
            <Tab.Screen name="Tv" component={Tv}/>
            <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
    )
}

export default Tabs;