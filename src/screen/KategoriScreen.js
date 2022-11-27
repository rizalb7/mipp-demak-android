import { createStackNavigator } from "@react-navigation/stack";
import { Alert, Pressable } from "react-native";
import { DataOpd, DataPemerintah, DataPublik, ShowWebsite } from "../components";
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export const KategoriScreen = ({props}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={props.name}
        component={props.kategori == 1 ? DataPemerintah : props.kategori == 2 ? DataPublik : DataOpd}
        options={{
          headerTitle: props.title, 
          headerTitleAlign: props.kategori == 1 ? 'left' : 'center',
          headerRight: () => (
            <Pressable
              onPress={() => Alert.alert("Mall Informasi Pelayanan Publik\nKabupaten Demak\n", "\n\nCopyright \u00A9 "+new Date().getFullYear()+" Dinkominfo Demak")}>
              <Icon
                style={{marginRight: 10}}
                name={'alert-circle-outline'}
                size={30}
                color={'black'}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="ShowWebsite"
        component={ShowWebsite}
        options={({route}) => ({
          title: route.params.judul,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  )
}