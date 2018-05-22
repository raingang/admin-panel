const logged = (state = false, { type }) => {
	switch(type){
		case 'LOG_IN':
			return true;
		default:
			return state;
	}
};

export default logged;