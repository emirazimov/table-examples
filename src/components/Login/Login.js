import React from 'react'
import './Login.css'
import 'materialize-css'
import { NavLink } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import useInput from '../useInput'

export default function Login() {
	const email = useInput('', { isEmail: true, isEmpty: true })
	const password = useInput('', { isEmpty: true })
	const [valid, setValid] = React.useState(false)
	React.useEffect(() => {
		if (!email.isEmpty && !email.emailError && !password.isEmpty) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [
		password.value,
		email.value,
		email.isDirty,
		email.isEmpty,
		email.emailError,
		password.isDirty,
		password.isEmpty
	])
	const handleClick = () => {
		console.log('click')
	}
	
	return (
		<div className="login">
			<h1 className="login_title">Вход</h1>
			<div className="row">
				<form className="padding col s12">
					<div className="row">
						<div className="input-field col s12">
							<input
								onBlur={(e) => email.onBlur(e)}
								value={email.value}
								onChange={(e) => email.onChange(e)}
								id="password"
								type="email"
							/>

							<label htmlFor="phone">Почта</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input
								onBlur={(e) => password.onBlur(e)}
								value={password.value}
								onChange={(e) => password.onChange(e)}
								id="password"
								type="password"
							/>
							<label htmlFor="password">Пароль</label>
						</div>
					</div>
				</form>
			</div>
			<button onClick={handleClick} disabled={!valid} className="login_btn">
				Войти
			</button>{' '}
			<br />
			{email.isDirty && email.isEmpty && <div className="login-error">Заполните поле email</div>}
			{email.isDirty && email.emailError && <div className="login-error">Неккоректный email</div>}
			{password.isDirty && password.isEmpty && <div className="login-error">Заполните поле пароля</div>}
			<NavLink className="login_link" to="/auth">
				Хотите зарегистрироваться ?
			</NavLink>
		</div>
	)
}
