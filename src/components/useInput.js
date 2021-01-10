import { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	const [isMinError, setMinError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [inputValid, setInputValid] = useState(false)

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinError(true) : setMinError(false)
					break
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break
				case 'maxLength':
					value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
					break
				case 'isEmail':
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
					break
				case 'isPhone':
					const phone = /^(996\s|3|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{3})$/
					phone.test(String(value).toLowerCase()) ? setInputValid(false) : setInputValid(true)
					break
				default:
					console.log('default')
			}
		}
	}, [value])
	useEffect(() => {
		if (isEmpty || isMinError || maxLengthError || emailError) {
			setInputValid(true)
		} else {
			setInputValid(false)
		}
	}, [isEmpty, maxLengthError, isMinError, emailError])
	return { isEmpty, isMinError, maxLengthError, emailError, inputValid,phoneError }
}

const useInput = (initial, validations) => {
	const [value, setValue] = useState('')
	const [isDirty, setDirty] = useState(false)
	const valid = useValidation(value, validations)
	const onChange = (e) => {
		setValue(e.target.value)
	}
	const onBlur = (e) => {
		setDirty(true)
	}
	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid
	}
}
export default useInput
