import CSV from './csv';
import Logger from './logger';

const sleep = (timeout: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};

export {
	CSV,
	Logger,
	sleep,
};
