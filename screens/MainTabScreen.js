import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Journey} from './Journey';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MapStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator
    activeColor="#f9d29d"
    // inactiveColor="#3e2465"
    barStyle={{backgroundColor: 'black'}}>
    <Tab.Screen
      name="MyHome"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Exzing Home',
        tabBarColor: '#00000',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="MyProfile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="MyMap"
      component={MapStackScreen}
      options={{
        tabBarStyle: {display: 'none'},
        tabBarLabel: 'Journey',
        tabBarColor: '#d02860',
        // #f9d29d
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'GMPHACK RIDER',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            shadowColor: '#f9fafd',
            elevation: 30,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={20}
                backgroundColor="#f9d29d"
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerTintColor: '#fff',
        }}
      />
      {/* <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: 'CardList',
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="SearchScreenModal"
        component={CardListScreen}
        options={({route}) => ({
          title: 'OOPS! EMPTY FIELDS!!',
          headerBackTitleVisible: true,
        })}
      />
      <HomeStack.Screen
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      /> */}
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: '#000000', // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        // headerShown: false,
      }}>
      <ProfileStack.Screen
        name="Profiley"
        component={ProfileScreen}
        options={{
          title: 'MY PROFILE',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000000',
            shadowColor: '#f9fafd',
            elevation: 30,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="beige"
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};
const MapStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <MapStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        // headerShown: false,
      }}>
      <MapStack.Screen
        name="Map"
        component={Journey}
        options={{
          title: 'GMPHACK RIDER',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            shadowColor: '#f9fafd',
            elevation: 30,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={20}
                backgroundColor="beige"
                color="#333"
                onPress={() => navigation.goBack()}
                // onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        }}
      />
    </MapStack.Navigator>
  );
};
