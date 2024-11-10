import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import {Context} from "../context/BlogContext";
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('Show', {id:item.id})}
            >
            <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
          onPress={()=>{deleteBlogPost(item.id)}}
          >
          <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
          </View>
          </TouchableOpacity>
        );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth:1,
    height:50,
    borderColor:'grey'
  },
  title:{
    fontSize:20,
  }
})