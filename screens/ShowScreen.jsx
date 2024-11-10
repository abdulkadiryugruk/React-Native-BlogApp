import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

const ShowScreen = ({route}) => {

	const {state} = useContext(Context)
	const blogPost = state.find((blogPost)=>blogPost.id === route.params.id)
  return (
	<View style={styles.container}>
		<View style={styles.kutu}>
		<Text style={styles.title}>Baslik</Text>
	  <Text>{blogPost.title}</Text>
	  </View>
	  <View style={styles.kutu}>
		<Text style={styles.title}>Icerik</Text>
	  <Text>{blogPost.content}</Text>
	  </View>
	</View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center'
	},
	title:{
		fontSize:25,
		color:'red',
		marginBottom:10
		},
		kutu:{
			borderWidth:1,
			borderRadius:20,
			width:'80%',
			margin:10,
			alignItems:'center',
			justifyContent:'center',
		}
})