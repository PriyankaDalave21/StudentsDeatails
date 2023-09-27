import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import AddNewStudents from './AddNewStudents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

const AddStudents = ({ navigation }) => {
    const [myUserData, setMyUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await fetch(
                "http://jsonplaceholder.typicode.com/posts"
            );

            const myData = await response.json();
            setMyUserData(myData);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        };
    }

    const handleLike = (itemId) => {
        setMyUserData(prevData =>
            prevData.map(item => {
                if (item.id === itemId) {
                    return { ...item, liked: !item.liked };
                }
                return item;
            })
        );
    };

    // const handleSubmit = () => {
    //     navigation.navigate('StudentsDetails');
    // }
    const handleSubmit1 = () => {
        navigation.navigate('AddNewStudents');

    }
    const handleSubmit = (selectedStudent) => {
        navigation.navigate('StudentsDetails', { student: selectedStudent });
    };


    return (
        <View>
            <View style={styles.topView}>
                <Text style={styles.StudentslistText}>All Students List</Text>
                <TouchableOpacity onPress={handleSubmit1} style={styles.AddStudbutton}>
                    <Text style={styles.addStudentsText}>AddNewStudents</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.mainContainer}>
                {isLoading ? (
                    <View style={styles.loader}>
                        <ActivityIndicator size={'large'} color={"#0000ff"} />
                    </View>
                ) : (
                    <View>

                        <FlatList
                            data={myUserData}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => handleSubmit(item)}>
                                        <View style={styles.card}>
                                            <View style={styles.dataContainer}>
                                                <Text style={styles.idNumber}>ID: {item.id}</Text>
                                                <TouchableOpacity onPress={() => handleLike(item.id)}>
                                                    <MaterialCommunityIcons
                                                        name={item.liked ? 'heart' : 'heart-outline'}
                                                        size={25}
                                                        color={item.liked ? 'red' : 'black'}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <Text style={styles.myName}>Name: {item.name}</Text>
                                                <Text style={styles.myName}>Email: {item.email}</Text>
                                                <Text style={styles.myName}>Phone Number: {item.phone}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => String(item.id)}
                        />

                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        minHeight: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    AddStudbutton: {
        // backgroundColor: '',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // borderRadius: 5,
        // marginTop: 10,
    },
    StudentslistText: {
        // color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addStudentsText: {
        // color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mainContainer: {
        width: "100%",
        paddingTop: 20,
        justifyContent: 'center',
    },
    dataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    card: {
        height: 130,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        margin: 5,
        elevation: 4,
    },
    mainHeader: {
        fontSize: 18,
        // fontWeight: 'bold',
        marginBottom: 20,
        justifyContent: 'center',
        textAlign: 'right',

    },
    idNumber: {
        fontWeight: 'bold',
    },
    myName: {
        marginBottom: 5,
    },
    likebuttonview: {
        alignItems: 'flex-end',
        paddingRight: 50,
    },


});

export default AddStudents;
