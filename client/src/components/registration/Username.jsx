import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { userNameHandler } from '../../views/registration/regHelper';

const Username = () => {
	const { username, setUsername } = useContext(RegContext);
	return (
		<>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				value={username}
				onChange={(e) => userNameHandler(e, setUsername)}
			/>
		</>
	);
};

export default Username;
