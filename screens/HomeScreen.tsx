import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import GoogleButton from 'components/GoogleButton';

export default function App() {
  const [fontsLoaded] = useFonts({
    kumbh: require('../assets/fonts/KumbhSans-VariableFont_YOPQ,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#3b82f6', '#8b5cf6', '#f472b6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1">
        <View className="flex-1  items-center px-6 py-12">
          {/* Logo + Headings */}
          <View className="items-center">
            <Image
              source={require('../assets/gyropen.png')}
              contentFit="contain"
              transition={1000}
              style={{
                width: 400,
                height: 200,
              }}
            />

            <Text className="text-4xl font-kumbh text-cyan-400">Gyropen</Text>
            <Text className="text-lg text-white font-kumbh mt-2 text-center mb-10">
              Draw and see{'\n'}What you draw come alive.
            </Text>
          </View>

          <View className="border-2 border-cyan-200 w-[300px] h-[300px] rounded-lg bg-white"></View>

          {/* Google Button + Info */}
          <View className="items-center absolute bottom-10">
            <Text className="font-kumbh text-white text-sm mt-3 opacity-80">
              Licensed under @ MIT LICENSE
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
