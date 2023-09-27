import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AddNewStudents = ({ navigation, }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [std, setStd] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!name || !phoneNumber || !email) {
            setError('Please fill in all required fields.');
            return;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        navigation.navigate('AddStudents', { name, phoneNumber, std });
    };

    return (
        <ScrollView>
            <View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../components/Images/stud.png')} />

                </View>

                <View style={styles.container}>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <View style={styles.input}>
                        <TextInput
                            placeholder="Student Name"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Std"
                            value={std}
                            onChangeText={setStd}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Address"
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.mainbutton}>
                            <Text style={styles.button}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f7f7f7',
    },
    textstyle: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'NunitoSans_600SemiBold',
        paddingBottom: 20,
        paddingTop: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    mainbutton: {
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    button: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        color: 'black',
        height: 20,
        width: 120,
        fontFamily: 'NunitoSans_600SemiBold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        height: 250,
        width: 350,
    }
});

export default AddNewStudents;
