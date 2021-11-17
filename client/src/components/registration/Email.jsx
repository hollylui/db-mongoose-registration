import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { emailHandler } from '../../views/registration/regHelper';

const Email = () => {
	const { email, setEmail } = useContext(RegContext);

	return (
		<>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={(e) => emailHandler(e, setEmail)}
			/>
		</>
	);
};

export default Email;
