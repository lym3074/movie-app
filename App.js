import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import {Font, useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Ionicons} from "@expo/vector-icons";
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));
// const loasImages = images => images.map(image => {
//   if(typeof image === "string") {
//     return Image.prefetch(image);
//   } else {
//     return Asset.loadAsync(image);
//   }
// })

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  const prepare = async() => {
    try {
      const [assets] = useAssets([require('./assets/thx_bean.png'), "https://gwa.douzone.com/static/media/img_logo_white.93179359.png"]);
      const [loaded] = Font.useFonts(Ionicons.font);
      
      // 이전 방식도 배울게 많음
      // const fonts = loadFonts([Ionicons.font]);
      // const images = loasImages([require('./assets/thx_bean.png'), "https://gwa.douzone.com/static/media/img_logo_white.93179359.png"]);
      
      // await Font.loadAsync(Ionicons.font);
      // await Asset.loadAsync(require('./assets/thx_bean.png'));
      // await Image.prefetch("https://gwa.douzone.com/static/media/img_logo_white.93179359.png");

      // await Promise.all([...fonts, ...images])
    } catch (e) {
      console.warn(e);
    } finally {
      setReady(true);
    }
  }

  useEffect(() => {
    // prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
  
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} 
  //   onLayout={onLayoutRootView}>
  //     <Text>SplashScreen Demo! 👋</Text>
  //   </View>
  // );
}
