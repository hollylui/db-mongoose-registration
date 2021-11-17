import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { registerHandler } from '../../views/registration/regHelper';
import Gender from './Gender';
import Telephone from './Telephone';
import Email from './Email';
import DateOfBirth from './DateOfBirth';
import Username from './Username';
import Password from './Password';
import Firstname from './Firstname';
import Lastname from './Lastname';

const RegForm = () => {
	// useContext ---------------------------
	const {
		username,
		setUsername,
		password,
		setPassword,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		dateOfBirth,
		setDateOfBirth,
		email,
		setEmail,
		telephone,
		setTelephone,
		gender,
		setGender,
		setActive
	} = useContext(RegContext);

	return (
		<form
			action=""
			onSubmit={(e) =>
				registerHandler(
					e,
					username,
					setUsername,
					password,
					setPassword,
					firstName,
					setFirstName,
					lastName,
					setLastName,
					dateOfBirth,
					email,
					setEmail,
					telephone,
					setTelephone,
					gender,
					setGender,
					setActive,
					setDateOfBirth
				)
			}
		>
			<fieldset>
				{/* form title ------------------------------------------------ */}
				<legend>Registration Form</legend>

				<Username />
				<Password />
				<Firstname />
				<Lastname />
				<DateOfBirth />
				<Email />
				<Telephone />
				<Gender />

				{/* register button -------------------------------------------- */}
				<input className="register" type="submit" value="Register" />
			</fieldset>
		</form>
	);
};

export default RegForm;
