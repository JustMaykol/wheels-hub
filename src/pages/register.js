import React, { useEffect, useState } from 'react';

import { navigate } from "gatsby";
import { Button, TextInput } from 'flowbite-react';

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import useData from "../hooks/useData";
import useUser from "../hooks/useUser";

const Register = () => {
    const { data } = useData();
    const { user, error, loading, register } = useUser();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            const redirect = localStorage.getItem('redirect');

            if (redirect) {
                localStorage.removeItem('redirect');
                navigate(redirect);
                return;
            }

            navigate('/');
        }
    }, [user]);

    const handleRegister = async (event) => {
        event.preventDefault();

        if (data.id === 'NONE') {
            alert('You cannot register on our demo page. :D');
            return;
        }

        await register(data.id, name, email, password)
    };

    const handleLogin = async () => {
        await navigate('/login');
    };

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data }>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6" style={ { color: data.color } }>Register</h2>
                    { error && <p className="text-red-500 text-center mb-4">{ error }</p> }

                    <form onSubmit={ handleRegister }>
                        <div className="mb-4">
                            <TextInput id="name" type="name" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="John Doe" required/>
                        </div>

                        <div className="mb-4">
                            <TextInput id="email" type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="john@email.com" required/>
                        </div>

                        <div className="mb-4">
                            <TextInput id="password" type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder="********" required/>
                        </div>

                        <Button type="submit" className="w-full" color="success">{ loading ? 'Registering...' : 'Register' }</Button>
                    </form>

                    <div className="flex justify-center mt-4">
                        <Button onClick={ handleLogin } color="info" className="w-full">Log In</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
