import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function ViewWebsite({ route,navigation }) {
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