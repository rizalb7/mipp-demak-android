import React from 'react';
import { WebView } from 'react-native-webview';

export default function ShowWebsite({ route,navigation }) {
  return (
    <WebView
        source={{ uri: route.params.link }}
        originWhitelist={['*']}
        scalesPageToFit={true}
        onError={() => {navigation.goBack()}}
        // style={{ marginTop: 20 }}
    />
  )
}