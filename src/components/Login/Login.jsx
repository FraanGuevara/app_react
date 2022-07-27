import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const history = useHistory();
    console.log(history);
    

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === ''){
            swAlert(<h3>Los campos no pueden estar vacios</h3>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)){
            swAlert(<h3>Escribe una direccion de correo valida</h3>);
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swAlert(<h3>Usuario o contraseña incorrectos</h3>);
            return;
        }
        
        console.log('Login correcto');
        axios.post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swAlert(<h3>Ingresaste correctamente</h3>);
                console.log(res.data);
                const tkn = res.data.token;
                localStorage.setItem('token', tkn);
                history.push('/listado');
            })
        
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Email:</span>
                    <br />
                    <input type="text" name='email' placeholder='Insert email here...' />
                </label>
                <br />
                <label>
                    <span>Password:</span>
                    <br />
                    <input type="password" name="password" placeholder=' Insert password here...' />
                </label>
                <br />
                <button type='submit'>Ingresar</button>
            </form>
        </>
    )
}
