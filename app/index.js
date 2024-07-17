import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.js to edit this screen.</Text>
      <Link href='/login' asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
