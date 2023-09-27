import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont()

const New = ({ navigation,  }) => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    // api call
    const url = "http://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getAPIData();
  }, [])
  // const [liked, setLiked] = useState(false);
  const handleSubmit = () => {
    navigation.navigate('StudentsDeatails');
  }

  return (
    <View style={styles.firstview}>
      <View style={styles.secondview}>
        <Text style={styles.textinput}>StudentsList</Text>
        <TouchableOpacity
          style={{ marginLeft: 100 }}
          onPress={() => navigation.navigate('AddNewStudents')
          }>
          <Text style={styles.textinput}>New</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSubmit}>

        {
          data.length ?
            data.map((item) =>
              <View key={item.id} style={styles.textview}>
                <Text>Id:{item.id}</Text>
                <Text>title:{item.title}</Text>

              </View>
            )
            :
            null
        }
        {/* <View style={styles.likebuttonview}>
          <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={30}
              color={liked ? "red" : "black"}
            />
          </Pressable>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  input: {
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    height: 80,

  },
  firstview: {
    height: 40,
    elevation: 4,
    backgroundColor: 'lightgreen'
  },
  secondview: {
    flexDirection: 'row',
    marginTop: 5
  },
  textview: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  textinput: {
    fontSize: 20,
    marginLeft: 10
  },
  likebuttonview: {
    alignItems: 'flex-end',
    paddingRight: 50
  }

};

export default New;
