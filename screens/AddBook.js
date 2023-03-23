import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "../styling/AddBook.styled";
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

function AddBook() {
    const [selectedImage, setSelectedImage] = useState(null);

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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputForm}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Title"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Year"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Description"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Author"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="genre"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="price"
                    selectionColor="grey" 
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="isbn"
                    selectionColor="grey" 
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
                <Pressable style={styles.submitBtn}>
                    <Text style={styles.submitText}>Submit</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
};

export default AddBook;