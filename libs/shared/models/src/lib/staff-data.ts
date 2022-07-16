import { StaffModel } from './staff-model';

export const StaffData: StaffModel[] = [
	{
		staffCode: 'S001',
		givenName: 'John',
		surname: 'Smith',
		initials: 'JS',
		dateOfBirth: new Date('1980-01-01'),
		accessOwnRecordOnly: true,
		emailAddress: 'john.smith.8903@email.com',
		addressLine1: '123 Main Street',
		addressLine2: '',
		addressLine3: '',
		addressLine4: '',
		postcode: 'AB1 2CD',
		phoneNumber: '0123456789',
		titleId: 1,
		genderId: 1,
	},
];
