import { View } from 'react-native';
import { Image } from 'expo-image'; // keep using expo-image

export default function ImageTest() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Image
        source={require('../assets/gyropen.png')}
        contentFit="contain"
        className="w-[200px] h-[200px] border border-white"
      />
    </View>
  );
}
