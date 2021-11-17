import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { passwordHandler } from '../../views/registration/regHelper';

const Password = () => {
	const { password, setPassword } = useContext(RegContext);
	return (
		<>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => passwordHandler(e, setPassword)}
			/>
		</>
	);
};

export default Password;
