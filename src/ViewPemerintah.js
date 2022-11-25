import { useCallback, useEffect, useState } from 'react';
import { Image, Pressable, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { style } from './style/Styles';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ViewPemerintah({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [lPemerintah, setLPemerintah] = useState([]);
  const url = "https://mipp.demakkab.go.id";
  const endpointUrl = url + "/api/list-web?kategori=1";
  const getDatas = async () => {
    await fetch(endpointUrl).then((response) => response.json()).then((json) => {
      // console.log(JSON.stringify(json.data));
      setLPemerintah(json.data);
    }).catch((err) => console.log(err));
  }
  useEffect(() => {
    getDatas();
  }, [])

  return (
    <SafeAreaView style={style.viewWrapper}>
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          >
        <View style={style.viewData}>
        {
          lPemerintah.map((val, index) => (
            <Pressable style={style.viewCard} key={index} onPress={() => {
              navigation.navigate('ViewWebsite', {
                link: val.link,
                judul: val.nama_web
              });
            }}>
              <Image
                style={style.viewLogoCard}
                source={{uri:url+"/storage/"+val.icon}}
              />
              <Text style={style.textNameCard} numberOfLines={3}>{val.nama_web}</Text>
            </Pressable>
          ))
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}