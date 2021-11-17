import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { dateOfBirthHandler } from '../../views/registration/regHelper';

const DateOfBirth = () => {
	const { dateOfBirth, setDateOfBirth } = useContext(RegContext);
	return (
		<>
			<label htmlFor="dateOfBirth">Birthday</label>
			<input
				type="text"
				name="dateOfBirth"
				id="dateOfBirth"
				value={dateOfBirth}
				onChange={(e) => dateOfBirthHandler(e, setDateOfBirth)}
			/>
		</>
	);
};

export default DateOfBirth;
