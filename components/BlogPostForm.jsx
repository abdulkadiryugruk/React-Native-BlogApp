import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues, isEditable }) => {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );

  return (
    <View style={styles.main}>
      <Text style={styles.baslik}>Başlığı giriniz:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.baslik}>İçeriği giriniz:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onSubmit(title, content)}
        >
          {isEditable ? (
            <Text style={styles.btnText}>Guncelle</Text>
          ) : (
            <Text style={styles.btnText}>Kaydet</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    padding: 10,
  },
  baslik: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "green",
    width: "80%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
