import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({ nombre: '', email: '', password: '', password2: '' });
    const { nombre, email, password, password2 } = values;
    const { msgError } = useSelector(state => state.ui);


    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailAndPassword(email, password, nombre));
        }
    }

    const isFormValid = () => {
        if (nombre.trim().length === 0) {
            dispatch(setError("Se necesita el nombre"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email invalido"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("Error en el password"));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title mb-5">Registro</h3>
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
                {msgError && (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>)
                }
                <input className="auth__input" type="text" placeholder="Nombre" name="nombre" autoComplete="off" value={nombre} onChange={handleInputChange} />
                <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirmar Password" name="password2" value={password2} onChange={handleInputChange} />
                <button className="btn btn-primary btn-block mb-5" type="submit">Registrarse</button>
                <Link className="link mt-5" to="/auth/login"> Ya estás registrado?</Link>
            </form>
        </>
    )
}
