import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { lnameHandler } from '../../views/registration/regHelper';

const Lastname = () => {
	const { lastName, setLastName } = useContext(RegContext);

	return (
		<>
			<label htmlFor="lname">Last Name</label>
			<input
				type="text"
				name="lname"
				id="lname"
				value={lastName}
				onChange={(e) => lnameHandler(e, setLastName)}
			/>
		</>
	);
};

export default Lastname;
