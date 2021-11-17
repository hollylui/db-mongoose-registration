import { useState } from 'react';
import Registration from '../views/registration/Registration';
import RegContext from '../context/registration/RegContext';

const Main = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [gender, setGender] = useState('n/a');
	const [active, setActive] = useState(0);

	const props = {
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
		active,
		setActive
	};

	return (
		<RegContext.Provider value={props}>
			<Registration />
		</RegContext.Provider>
	);
};

export default Main;
