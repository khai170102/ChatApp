import { TouchableOpacity, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';
import { auth, database } from '../config/firebase';


export default function Chat() {
  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return <TouchableOpacity
    style={{
      marginRight: 10
    }}
    onPress={onSignOut}
  >
    <AntDesign name="logout" size={24}  style={{ marginRight: 10 }} />
  </TouchableOpacity>;
}
