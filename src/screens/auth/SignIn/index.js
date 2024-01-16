import React, { useState } from 'react';
import {
    Text,
    Image,
    Pressable,
    ScrollView,
    } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {
    const OnSignUp = () => {
        console.log("HELLO")
    }

    return(
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="E-mail" placeholder="example@gmail.com"/>
            <Input isPassword={true} label="Password" placeholder="*********"/>

            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign in with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={OnSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>

        </ScrollView>
    )
}
export default React.memo(SignIn);