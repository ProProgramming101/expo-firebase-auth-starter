
import React from 'react';
import { TextInput } from 'react-native';

export default class EmailTextInput extends React.Component {

    render() {
        return <TextInput {...this.props}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        />;
    }

}