import { Pressable, Text, Image } from 'react-native';

export default function GoogleButton() {
  return (
    <Pressable className="flex-row items-center bg-white px-4 py-3 rounded-lg shadow-md active:opacity-80">
      <Image source={require('../assets/google.png')} className="w-5 h-5 mr-3" />
      <Text className="text-base font-medium text-gray-700">Sign in with Google</Text>
    </Pressable>
  );
}
