import CSV from './csv';
import Logger from './logger';
import ParquetField from './parquet/field';

const sleep = (timeout: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};

const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export {
	CSV,
	Logger,
	ParquetField,
	sleep,
	randomNumber,
};
