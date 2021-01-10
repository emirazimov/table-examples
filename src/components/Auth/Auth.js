import React from 'react'
import './Auth.css'
import 'materialize-css'
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom'

export default function Auth() {
	return (
		<div className="auth">
			<h1 className="login_title">Регистрация</h1>
			<div className="row">
				<form className="padding col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="title" type="text" />
							<label htmlFor="title">Название магазина</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="inn" type="number" />
							<label htmlFor="inn">ИНН</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" />
							<label htmlFor="email">Почта</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							{/* <input id="phone" type="number" /> */}
							<NumberFormat
								className="inputEvent_number"
								id="phone"
								// id="phone"
								// onBlur={(e) => phone.onBlur(e)}
								// value={phone.value}
								// onChange={(e) => phone.onChange(e)}
								format="+996 (###) ###-###"
								mask="_"
							/>
							<label htmlFor="phone">+996 (###) ###-###</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" />
							<label htmlFor="password">Пароль</label>
						</div>
					</div>
				</form>
			</div>
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="password2" type="password" />
							<label htmlFor="password2">Пароль еще раз</label>
						</div>
					</div>
				</form>
			</div>
			<button className="auth_btn">Создать профиль</button> <br />
			<NavLink to="/login">Хотите войти ?</NavLink>
		</div>
	)
}
