import { StatusBar, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  viewWrapper: {
    flex:1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:"lightgrey"
  },
  viewData:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center"
  },
  viewCard:{
    backgroundColor:"rgba(255,255,255,0.85)",
    borderRadius:8,
    shadowRadius:4,
    width:100,
    // height:110,
    alignContent:"center",
    alignItems:"center",
    paddingTop:8,
    paddingBottom:8,
    margin:8
  },
  viewLogoCard:{
    width:60,
    height:60,
  },
  textNameCard:{
    color: "black",
    fontSize:13,
    fontWeight:"500",
    textAlign:"center",
    textTransform:"capitalize",
    lineHeight:13,
    marginTop:6,
    marginHorizontal:8,
  },
  cariView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginVertical:10
  },
  cariInput: {
    borderWidth: 1.5, 
    borderColor: 'dodgerblue', 
    color: 'black', 
    backgroundColor: 'white', 
    height:45, 
    width:300, 
    marginRight:5, 
    padding: 10, 
    borderTopLeftRadius: 7, 
    borderBottomLeftRadius: 7
  },
  cariBtn: {
    backgroundColor: "dodgerblue", 
    justifyContent: "center", 
    padding: 10, 
    borderTopRightRadius: 7, 
    borderBottomRightRadius: 7
  },
  cariBtnText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: "bold", 
    marginHorizontal: 2
  }
});