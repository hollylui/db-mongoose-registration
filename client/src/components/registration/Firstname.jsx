import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { fnameHandler } from '../../views/registration/regHelper';

const Firstname = () => {
	const { firstName, setFirstName } = useContext(RegContext);
	return (
		<>
			<label htmlFor="fname">First Name</label>
			<input
				type="text"
				name="fname"
				id="fname"
				value={firstName}
				onChange={(e) => fnameHandler(e, setFirstName)}
			/>
		</>
	);
};

export default Firstname;
