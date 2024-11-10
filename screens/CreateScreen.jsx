import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
	onSubmit={(title, content) => {
        addBlogPost(title, content, ()=>navigation.navigate('Home'));
      }}
	  isEditable={false}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
