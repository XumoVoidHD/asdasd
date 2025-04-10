import React, { Component } from 'react';

class PasswordGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Aspphalt',
            dob: '1999-01-01', // Format: YYYY-MM-DD
            password: ''
        };
    }

    componentDidMount() {
        this.generatePassword();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.username !== this.state.username ||
            prevState.dob !== this.state.dob
        ) {
            console.log('User data has changed. Regenerating password...');
            this.generatePassword();
        }
    }

    generatePassword = () => {
        const { username, dob } = this.state;

        // Extract info
        const namePart = username.substring(0, 3).toUpperCase();
        const dateObj = new Date(dob);
        const yearPart = String(dateObj.getFullYear()).slice(-2);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // getMonth is zero-based
        const dayMonthSum = String(day + month).padStart(2, '0');

        // Generate password
        const password = `${namePart}${yearPart}${dayMonthSum}`;

        this.setState({ password });
    };

    render() {
        const { username, dob, password } = this.state;

        return (
            <div>
                <h2>Password Generator</h2>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Date of Birth:</strong> {dob}</p>
                <p><strong>Generated Password:</strong> {password}</p>
            </div>
        );
    }
}

export default PasswordGenerator;
