import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

import AuthStack from './AuthStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

import MainTabScreen from '../screens/MainTabScreen';

const Routes = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  };
  console.log({user_: user});

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
              drawerActiveBackgroundColor: 'black',
              headerShown: false,
            }}>
            <Drawer.Screen
              name="AppDrawer"
              options={{
                title: '',
                headerTitle: '',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#000000',
                },
              }}
              component={MainTabScreen}
            />
          </Drawer.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
