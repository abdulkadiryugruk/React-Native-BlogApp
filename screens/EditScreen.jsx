import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation, route}) => {
	const {state, editBlogPost} = useContext(Context)
	const blogPost = state.find((blogPost)=>blogPost.id === route.params.id)
	const id = route.params.id
  return (
	<BlogPostForm
	initialValues={{title:blogPost.title, content: blogPost.content}}
	isEditable={true}
	onSubmit={(title, content) => {
        editBlogPost(id, title, content, ()=>navigation.pop());
      }}
	/>
  )
}

export default EditScreen

const styles = StyleSheet.create({})