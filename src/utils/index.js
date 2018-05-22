export const getItemFromArrById = (id, arr) => {
    return arr.find((item) => item.id === id);
};


const validateText = (text) => {
	return !!text.trim().length;
};

const validateNumber = (number, min = -Infinity, max = +Infinity) => {
	number = +number;
	if(number || number === 0) {
		return number >= min && number <= max;
	}
	else {
		return false;
	}
};

const validateStatus = (value) => {
	const statusValues = [
		'relationship',
		'single',
		'complicated',
	];
	return !!statusValues.find((item) => item === value);
};

export const validateForm = (state) => {
	const {
		firstName,
		lastName,
		age,
		visits,
		progress,
		status
	} = state;
	return validateText(firstName)
		&& validateText(lastName)
		&& validateNumber(age, 0, 100)
		&& validateNumber(visits, 0)
		&& validateNumber(progress, 0)
		&& validateStatus(status)
};