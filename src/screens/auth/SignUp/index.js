import React, { useState } from 'react';
import {
    Text,
    Image,
    View,
    Pressable,
    } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = () => {
    const [checked, setChecked] = useState(false);

    const OnSignIn = () => {
        console.log("HELLO")
    }

    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Joe Doe"/>
            <Input label="E-mail" placeholder="example@gmail.com"/>
            <Input isPassword={true} label="Password" placeholder="*********"/>

            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text> </Text>
            </View>

            <Button style={styles.button} title="Sign Up" />
            <Separator text="Or sign up with" />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={OnSignIn} style={styles.footerLink}> Sign In</Text>
            </Text>

        </View>
    )
}
export default React.memo(SignUp);