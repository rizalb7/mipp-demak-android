import SplashScreen from 'react-native-splash-screen';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from '../style';
import {useScrollToTop} from '@react-navigation/native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function ListWebsite({props}) {
  const navigation = props.navigation;
  // --Refresh Page--
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDatas();
    wait(2000).then(() => {
      setRefreshing(false);
      setTxtCari('');
    });
  }, []);
  // --Scroll To Top, click icon tab--
  const ref = useRef(null);
  useScrollToTop(ref);
  // --Get All Data--
  const [lPublik, setLPublik] = useState([]);
  const url = 'https://mipp.demakkab.go.id';
  const endpointUrl = url + '/api/list-web?kategori=' + props.kategori;
  const getDatas = async () => {
    await fetch(endpointUrl)
      .then(response => response.json())
      .then(json => {
        // console.log(JSON.stringify(json.data));
        setLPublik(json.data);
      })
      .catch(err => console.log(err));
  };
  // --Get Searched Data--
  const [txtCari, setTxtCari] = useState('');
  const submitCari = async () => {
    await fetch(endpointUrl + '&cari=' + txtCari)
      .then(response => response.json())
      .then(json => {
        setLPublik(json.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getDatas();
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={style.viewWrapper}>
      <ImageBackground
        resizeMode="cover"
        style={{flex: 1}}
        source={require('../../android/app/src/main/assets/bg-masjid.jpg')}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ref={ref}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            
          <View>
            <View style={style.cariView}>
              <TextInput
                style={style.cariInput}
                placeholder="Ketik Nama Website Disini..."
                placeholderTextColor="black"
                onChangeText={text => setTxtCari(text)}
                value={txtCari}
              />
              <TouchableOpacity style={style.cariBtn} onPress={submitCari}>
                <Text style={style.cariBtnText}>CARI</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.viewData}>
            {lPublik.length ? (
              lPublik.map((val, index) => (
                <Pressable
                  style={style.viewCard}
                  key={index}
                  onPress={() => {
                    navigation.navigate('ShowWebsite', {
                      link: val.link,
                      judul: val.nama_web,
                    });
                  }}>
                  <Image
                    style={style.viewLogoCard}
                    source={{uri: url + '/storage/' + val.icon}}
                  />
                  <Text style={style.textNameCard} numberOfLines={3}>
                    {val.nama_web}
                  </Text>
                </Pressable>
              ))
            ) : (
              <Text>Data Tidak Ditemukan</Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
