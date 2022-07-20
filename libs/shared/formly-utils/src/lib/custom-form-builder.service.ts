import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypedBuilder } from './typed-builder';

@Injectable({
	providedIn: 'root',
})
export class CustomFormBuilderService {
	/**
	 *
	 * @param opts The options to build the control key from.
	 * @returns
	 */
	buildFields<TDto>(opts: {
		parentName: string;
		dtoClassName?: string;
		fields: (typedBuilder: TypedBuilder<TDto>) => FormlyFieldConfig[];
	}) {
		// Call the function to build the fields, of the TDto type, ensuring that keys are keyof TDto.
		const builtFields = opts.fields(new TypedBuilder<TDto>());

		// Recurse the fields to apply security settings.
		return this.recurseFields({
			parentName: opts.parentName,
			dtoClassName: opts.dtoClassName,
			fields: builtFields,
		});
	}

	private recurseFields(opts: {
		fields: FormlyFieldConfig[];
		parentName: string;
		dtoClassName?: string;
		readOnly?: boolean;
	}): FormlyFieldConfig[] {
		const finalFields: FormlyFieldConfig[] = [];
		opts.fields.forEach((field) => {
			const controlKey = this.getControlKey(field);

			// If the debug flag is set on the field, dump its config to the console.
			if (field.templateOptions?.['debug']) {
				console.log(JSON.stringify(field, null, 2));
			}

			let readOnly = !!opts.readOnly;
			if (controlKey || readOnly) {
				// Should the field be hidden? If so, snip it out.
				if (controlKey && this.isControlHidden(opts.parentName, controlKey)) {
					return;
				}

				// Should the field be read-only? If so, set the readOnly flag so it gets disabled, and any children
				// are also disabled.
				if (controlKey && this.isControlReadOnly(opts.parentName, controlKey)) {
					readOnly = true;
				}

				// If flagged as readOnly, set the templateOptions.disabled expression property to return true.
				if (readOnly) {
					field.expressionProperties = {
						...field.expressionProperties,
						'templateOptions.disabled': () => true,
					};
				}
			}

			if (field.fieldGroup) {
				field.fieldGroup = this.recurseFields({
					fields: field.fieldGroup,
					dtoClassName: opts.dtoClassName,
					parentName: opts.parentName,
					readOnly: readOnly,
				});
			}

			finalFields.push(field);
		});

		return finalFields;
	}

	private getControlKey = (field: FormlyFieldConfig) => {
		if (field.templateOptions?.['controlName']) {
			return field.templateOptions['controlName'];
		}

		return field.key;
	};

	private isControlHidden(parentName: string, controlKey: string): boolean {
		// const hiddenFields = ['keyS'];
		const hiddenFields: string[] = [];

		// TODO: Implement proper lookup of security setting for the control key and its parent screen.
		return hiddenFields.indexOf(controlKey) !== -1;
	}

	private isControlReadOnly(parentName: string, controlKey: string): boolean {
		//const readOnlyFields = ['firstName'];
		const readOnlyFields: string[] = [];

		// TODO: Implement proper lookup of security setting for the control key and its parent screen.
		return readOnlyFields.indexOf(controlKey) !== -1;
	}
}
