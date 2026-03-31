import { clsx, type ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";

const cn = (...classValues: ClassValue[]) => {
	return twMerge(clsx(classValues));
};

export default cn;