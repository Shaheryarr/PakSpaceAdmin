import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Dimensions, ScrollView, Image } from 'react-native';
import { EMAIL_PATTERN, isInternetConnected, themeStyleSheet } from '../../../constants';
import { postImageBase64, postLoginRequest, postSignUpRequest, requestPassword } from '../../../SyncServices';
import Button from '../../common/Buttons';
import TextField from '../../common/TextField';
import styles from './styles';
import { useToast, Avatar } from 'native-base';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');

const config = {
    mediaType: 'photo',
    includeBase64: true,
    quality: 0.1,
};

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const Toast = useToast();

    const dispatch = useDispatch();

    const onChange = (text, type) => {
        setErrors({
            ...errors,
            [type]: '',
        });
        if (type == 'email') {
            setEmail(text);
        } else if (type == 'password') {
            setPassword(text);
        } else if (type == 'name') {
            setName(text)
        } else if (type == 'rePassword') {
            setRePassword(text)
        } else if (type == 'number') {
            setNumber(text)
        } else if (type == 'address') {
            setAddress(text)
        }
    };

    const validateInput = (onlyEmail = false) => {
        let isValid = true;
        let obj = {};

        if (email) {
            if (!EMAIL_PATTERN.test(email)) {
                isValid = false;
                obj = {
                    email: 'Email address is not in the correct format',
                };
            }
        } else {
            isValid = false;
            obj = {
                email: 'Email address is required',
            };
        }

        if (onlyEmail == true) {
            if (isValid == true) return isValid;
            else return obj.email;
        }

        // if (username) {
        //     if (username.length < 4) {
        //         isValid = false;
        //         obj = {
        //             ...obj,
        //             password: 'Username must be more than 4 characters',
        //         };
        //     }
        // } else {
        //     isValid = false;
        //     obj = {
        //         ...obj,
        //         password: 'Username is required',
        //     };
        // }

        if (password) {
            if (password.length < 8) {
                isValid = false;
                obj = {
                    ...obj,
                    password: 'Password must be more than 8 characters',
                };
            }
        } else {
            isValid = false;
            obj = {
                ...obj,
                password: 'Password is required',
            };
        }

        if (rePassword) {
            if (rePassword != password) {
                isValid = false;
                obj = {
                    ...obj,
                    rePassword: 'Passwords does not match',
                };
            }
        } else {
            isValid = false;
            obj = {
                ...obj,
                rePassword: 'Password validation is required',
            };
        }

        if (!name) {
            isValid = false;
            obj = {
                ...obj,
                rePassword: 'Name is required',
            };
        }

        if (!address) {
            isValid = false;
            obj = {
                ...obj,
                rePassword: 'Address is required',
            };
        }

        if (!number) {
            isValid = false;
            obj = {
                ...obj,
                rePassword: 'Contact Number is required',
            };
        }

        if (isValid == true) return isValid;
        else return obj;
    };

    const choosePhotoFromLibrary = () => {
        launchImageLibrary(config, res => {
            const { assets } = res;

            if (assets?.length) {
                setImage(assets[0]);
                console.log(assets[0]);
            }
        });
    };

    const handleImage = () => {
        return new Promise((resolve, reject) => {
            if (!image) resolve();
            else {
                let params = {
                    image_name: image.base64,
                };

                postImageBase64(params).then(res => {
                    console.log(res);
                    resolve(res.message.image_url);
                }).catch(err => {
                    reject(err)
                })
            }
        })
    }

    const handleRegister = () => {
        Keyboard.dismiss();

        if (validateInput() != true) setErrors(validateInput());
        else {
            isInternetConnected().then(async () => {
                setLoading(true);
                
                const image_url = await handleImage();

                const params = {
                    name,
                    email,
                    password,
                    image_url,
                    address,
                    number,
                    user_type: 'admin'
                }

                postSignUpRequest(params).then(res => {
                    setLoading(false);

                    Toast.show({
                        title: 'We have sent a one time password to your email. Please verify',
                        duration: 5000
                    })

                    navigation.navigate('OtpVerification', {
                        email,
                    });
                }).catch(err => {
                    setLoading(false);

                    Toast.show({
                        title: err.response.data.message
                    })
                })
            }).catch(err => {
                Toast.show({
                    title: 'Please connect to the internet',
                });
            });
        }
    }

    const navigateToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                            <Text style={{ ...styles.heading, color: themeStyleSheet.darkGray }}>Welcome to PakSpace</Text>
                            <Text style={{ ...styles.subHeading, color: themeStyleSheet.darkGray }}>Please register your organisation</Text>

                            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                                <TouchableOpacity style={{ height: height * 0.18, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} onPress={choosePhotoFromLibrary}>
                                    <View style={{ backgroundColor: themeStyleSheet.lightgray, height: 120, width: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                        <Image source={image ? { uri: image.uri } : require('../../../assets/images/comp.png')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
                                    </View>

                                    <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 120, borderWidth: 1, width: 35, height: 35, borderRadius: 35 / 2, borderColor: themeStyleSheet.extraLightGray, backgroundColor: themeStyleSheet.white, justifyContent: 'center', alignItems: 'center' }} onPress={choosePhotoFromLibrary}>
                                        <Icon name={'pencil'} size={20} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <TextField
                                    placeholder="Enter your Organistion's Name"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={"Organisation's Name"}
                                    onChange={text => onChange(text, 'name')}
                                    error={errors.name}
                                />
                                <TextField
                                    placeholder="Enter Organistion's Address"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={"Organisation's Address"}
                                    onChange={text => onChange(text, 'address')}
                                    error={errors.address}
                                />
                                {/* <TextField
                                    placeholder="Enter Username"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={"Username"}
                                    onChange={text => onChange(text, 'username')}
                                    error={errors.username}
                                /> */}
                                <TextField
                                    placeholder="Enter Email Address"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={'Email Address'}
                                    onChange={text => onChange(text, 'email')}
                                    error={errors.email}
                                    textContentType={'emailAddress'}
                                />
                                <TextField
                                    placeholder="********"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={'Password'}
                                    secureTextEntry={true}
                                    onChange={text => onChange(text, 'password')}
                                    error={errors.password}
                                    textContentType={'password'}
                                />
                                <TextField
                                    placeholder="********"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={'Re-Type Password'}
                                    secureTextEntry={true}
                                    onChange={text => onChange(text, 'rePassword')}
                                    error={errors.rePassword}
                                    textContentType={'password'}
                                />
                                <TextField
                                    placeholder="Enter Contact Number"
                                    placeholderTextColor={themeStyleSheet.lightgray}
                                    label={'Contact Number'}
                                    onChange={text => onChange(text, 'number')}
                                    error={errors.number}
                                    textContentType={'telephoneNumber'}
                                    keyboardType='number-pad'
                                />
                            </ScrollView>
                        </View>

                        <View style={{ height: height * 0.12, justifyContent: 'center' }}>
                            <Button type='secondary' title='Register' loading={loading} onPress={handleRegister} />
                        </View>
                    </KeyboardAvoidingView>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <Text style={styles.subText}>
                            Already Registered? <Text style={styles.mainText}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default SignUp;