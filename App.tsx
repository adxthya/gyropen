import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import GoogleButton from 'components/GoogleButton';

export default function App() {
  const [fontsLoaded] = useFonts({
    kumbh: require('./assets/fonts/KumbhSans-VariableFont_YOPQ,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={['#3b82f6', '#8b5cf6', '#f472b6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 items-center justify-center">
      <Image
        source={require('./assets/gyropen.png')}
        contentFit="contain"
        transition={1000}
        style={{ width: '100%', height: 200 }}
      />
      <View className="mt-4 items-center gap-2">
        <Text className="text-3xl text-white font-kumbh">Gyropen</Text>
        <Text className="text-lg text-white font-kumbh mt-1">
          Write on Anything. Watch it Come Alive.
        </Text>
      </View>
      <View className="pt-20 pb-2">
        <GoogleButton />
      </View>
      <Text className="font-kumbh text-white">Continue with Google to get started</Text>
    </LinearGradient>
  );
}
