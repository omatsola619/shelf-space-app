import { useState } from "react";
import { Button, Image, Pressable, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "../styling/AddBook.styled";
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { useToast } from "react-native-toast-notifications";
import { saveBooks } from "../utility/http";

function AddBook() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [isbn, setIsbn] = useState('');
    const toast = useToast();

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      };

      const showToast = () => {
        toast.show("fill the form completely", {
            type: "warning",
            placement: "bottom",
            duration: 1500,
            offset: 30,
            animationType: "slide-in"
        })
      }

    const handleSubmit = () => {
        if (!title || !year || !desc || !author || !genre || !price || !isbn || !selectedImage) {
            showToast();
        } else{
            const data = {
                title,
                year,
                desc,
                author,
                genre,
                price,
                isbn,
                selectedImage
            }
            saveBooks(data)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputForm}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Title"
                    selectionColor="grey" 
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Year"
                    selectionColor="grey" 
                    value={year}
                    onChangeText={(text) => setYear(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Description"
                    selectionColor="grey" 
                    value={desc}
                    onChangeText={(text) => setDesc(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Author"
                    selectionColor="grey" 
                    value={author}
                    onChangeText={(text) => setAuthor(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="genre"
                    selectionColor="grey" 
                    value={genre}
                    onChangeText={(text) => setGenre(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="price"
                    selectionColor="grey"
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="isbn"
                    selectionColor="grey" 
                    value={isbn}
                    onChangeText={(text) => setIsbn(text)}
                />
                <View style={styles.imagePicker}>
                    <TouchableHighlight title="Select Image" style={styles.imageBox} onPress={selectImage}>
                        <View style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>Select Image</Text>
                            <Feather name="upload" size={18} color="white" />
                        </View>
                    </TouchableHighlight>
                    {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, paddingBottom: 5 }} />}
                </View>
                {/* submit the form */}
                <Pressable style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
};

export default AddBook;