import { createBaseFormData } from './Home.helpers';

const formLayout = [
	{
		type: 'form-page',
		label: 'form_label_enter_your_details',
		items: [
			{
				type: 'email-field',
				label: 'form_label_email_address',
				name: 'email',
				isRequired: true
			},
			{
				type: 'text-field',
				label: 'form_label_first_name',
				name: 'firstName',
				dataQaId: 'registration_firstName_textInput',
				isRequired: true
			},
			{
				type: 'text-field',
				label: 'form_label_surname',
				name: 'surname',
				dataQaId: 'registration_surname_textInput',
				isRequired: false
			},
			{
				type: 'radiogroup-field',
				label: 'form_label_gender',
				name: 'gender',
				isRequired: true,
				items: [
					{
						type: 'radio-field',
						label: 'form_label_gender_female',
						value: 'FEMALE',
						name: 'gender',
						dataQaId: 'registration_femaleGenderOption_radioButton',
						isChecked: true
					},
					{
						type: 'radio-field',
						label: 'form_label_gender_male',
						value: 'MALE',
						name: 'gender',
						dataQaId: 'registration_maleGenderOption_radioButton',
						isChecked: false
					}
				]
			}
		]
	},
	{
		type: 'form-page',
		label: 'form_label_create_username',
		caption: 'form_caption_create_username',
		items: [
			{
				type: 'password-field',
				label: 'form_label_password',
				name: 'password',
				isRequired: true
			},
			{
				type: 'password-field',
				label: 'form_label_confirm_password',
				name: 'confirmPassword',
				isRequired: true
			}
		]
	}
];

const expectedFormData = {
	email: {
		isTouched: false,
		type: 'email-field',
		value: '',
		isRequired: true,
		isValid: true
	},
	firstName: {
		isTouched: false,
		type: 'text-field',
		value: '',
		isRequired: true,
		isValid: true
	},
	surname: {
		isTouched: false,
		type: 'text-field',
		value: '',
		isRequired: false,
		isValid: true
	},
	gender: {
		isTouched: false,
		type: 'radiogroup-field',
		value: '',
		isRequired: true,
		isValid: true
	},
	password: {
		isTouched: false,
		type: 'password-field',
		value: '',
		isRequired: true,
		isValid: true
	},
	confirmPassword: {
		isTouched: false,
		type: 'password-field',
		value: '',
		isRequired: true,
		isValid: true
	}
}

describe('Given a form layout', () => {
	it('should create the base formData object', () => {
		expect(createBaseFormData(formLayout)).toEqual(expectedFormData);
	});
});
