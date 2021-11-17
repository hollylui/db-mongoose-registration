import { genderHandler } from '../../views/registration/regHelper';
import { useContext } from 'react';
import RegContext from '../../context/registration/RegContext';

const Gender = () => {
	const { setGender, active, setActive } = useContext(RegContext);

	return (
		<div className="radio">
			<input
				className="radioInput"
				type="radio"
				name="gender"
				id="na"
				value="n/a"
				checked={active === 0}
				onClick={(e) => genderHandler(e, setActive, setGender)}
			/>
			<label className="radioLabel" htmlFor="na">
				N/A
			</label>

			<input
				className="radioInput"
				type="radio"
				name="gender"
				id="male"
				value="male"
				checked={active === 1}
				onClick={(e) => genderHandler(e, setActive, setGender)}
			/>
			<label className="radioLabel" htmlFor="male">
				Male
			</label>

			<input
				className="radioInput"
				type="radio"
				name="gender"
				id="female"
				value="female"
				checked={active === 2}
				onClick={(e) => genderHandler(e, setActive, setGender)}
			/>
			<label className="radioLabel" htmlFor="female">
				Female
			</label>

			<input
				className="radioInput"
				type="radio"
				name="gender"
				id="other"
				value="other"
				checked={active === 3}
				onClick={(e) => genderHandler(e, setActive, setGender)}
			/>
			<label className="radioLabel" htmlFor="other">
				Other
			</label>
		</div>
	);
};

export default Gender;
