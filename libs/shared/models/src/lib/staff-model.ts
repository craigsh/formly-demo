export type StaffModel = {
	staffCode: string;
	firstName: string;
	surname: string;
	initials: string;
	dateOfBirth: Date;
	genderId: number;
	titleId: number;
	addressLine1: string;
	addressLine2: string;
	addressLine3: string;
	addressLine4: string;
	postcode: string;
	accessOwnRecordOnly: boolean;
	emailAddress: string;
	phoneNumber: string;
};