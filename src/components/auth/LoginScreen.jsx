import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginGoogle, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({ email: 'claudio_ceja009@hotmail.com', password: '123456' });
    const { email, password } = values;
    const { loading } = useSelector(state => state.ui);

    const handleEmailLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginGoogle());
    }


    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>
            <form onSubmit={handleEmailLogin} className="animate__animated animate__fadeIn animate__faster">
                <input className="auth__input" type="text" placeholder="email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="password" name="password" value={password} onChange={handleInputChange} />
                <button className="btn btn-primary btn-block" disabled={loading} type="submit">Iniciar Sesión</button>


                <div className="auth__social-networks">
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Continuar con Google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register"> Registarse</Link>
            </form>
        </>
    )
}
