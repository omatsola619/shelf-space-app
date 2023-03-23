import { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { styles } from "../styling/AddBook.styled";
import * as ImagePicker from 'expo-image-picker';

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
        <View style={styles.container}>
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
                    <Button title="Select Image" onPress={selectImage} />
                    {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
        </View>
    )
};

export default AddBook;