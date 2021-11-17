import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';
import { telephoneHandler } from '../../views/registration/regHelper';

const Telephone = () => {
	const { telephone, setTelephone } = useContext(RegContext);

	return (
		<>
			<label htmlFor="phone">Phone Number</label>
			<input
				type="text"
				name="phone"
				id="phone"
				value={telephone}
				onChange={(e) => telephoneHandler(e, setTelephone)}
			/>
		</>
	);
};

export default Telephone;
