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
    const [quantity, setQuantity] = useState();
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
        if (!title || !year || !desc || !author || !genre || !price || !isbn || !selectedImage || !quantity) {
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
                selectedImage,
                quantity,
            }
            saveBooks(data)
        }
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputForm}>
          <View>
            <Text style={styles.inputText}>Title</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Year</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={year}
              onChangeText={(text) => setYear(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Description</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={desc}
              onChangeText={(text) => setDesc(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Author</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={author}
              onChangeText={(text) => setAuthor(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Genre</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={genre}
              onChangeText={(text) => setGenre(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Price</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>ISBN</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={isbn}
              onChangeText={(text) => setIsbn(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Quantity</Text>
            <TextInput
              style={styles.inputBox}
              selectionColor="grey"
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
            />
          </View>
          <View style={styles.imagePicker}>
            <TouchableHighlight
              title="Select Image"
              style={styles.imageBox}
              onPress={selectImage}
            >
              <View style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Add Image</Text>
                <Feather name="upload" size={18} color="#0366d6" />
              </View>
            </TouchableHighlight>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 200, height: 200, paddingBottom: 5 }}
              />
            )}
          </View>
          {/* submit the form */}
          <Pressable style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
};

export default AddBook;