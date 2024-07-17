import React, { useEffect, useState } from 'react';

import { navigate } from 'gatsby';
import { Button, TextInput } from 'flowbite-react';

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import useData from "../hooks/useData";
import useUser from "../hooks/useUser";

const Login = () => {
    const { data } = useData();

    const { user, error, loading, login } = useUser(data?.id);

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

    const handleLogin = async (event) => {
        event.preventDefault();

        if (data.id === 'NONE') {
            alert('You cannot login on our demo page. :D');
            return;
        }

        await login(data.id, email, password)
    };

    const handleRegister = async () => {
        await navigate('/register');
    };

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data }>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6" style={ { color: data.color } }>Log In</h2>
                    { error && <p className="text-red-500 text-center mb-4">{ error }</p> }

                    <form onSubmit={ handleLogin }>
                        <div className="mb-4">
                            <TextInput id="email" type="email" value={ email } onChange={ (event) => setEmail(event.target.value) } placeholder="john@email.com" required/>
                        </div>

                        <div className="mb-4">
                            <TextInput id="password" type="password" value={ password } onChange={ (event) => setPassword(event.target.value) } placeholder="********" required/>
                        </div>

                        <Button type="submit" className="w-full" color="success">{ loading ? 'Logging In...' : 'Log In' }</Button>
                    </form>

                    <div className="flex justify-center mt-4">
                        <Button onClick={ handleRegister } color="info" className="w-full">Register</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
