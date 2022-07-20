import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StaffData } from '@demo/shared-models';
import { LookupDataService } from '@demo/shared/services';

@Component({
	template: `
		<h1>Template-driven form</h1>

		<form>
			<mat-form-field>
				<mat-label>Staff code</mat-label>
				<input name="staffCode" matInput [(ngModel)]="model.staffCode" maxlength="12" />
				<mat-error *ngIf="!model.staffCode">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Given name</mat-label>
				<input name="givenName" matInput [(ngModel)]="model.givenName" maxlength="50" />
				<mat-error *ngIf="!model.givenName">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Surname</mat-label>
				<input name="surname" matInput [(ngModel)]="model.surname" maxlength="50" />
				<mat-error *ngIf="!model.surname">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Initials</mat-label>
				<input name="initials" matInput [(ngModel)]="model.initials" maxlength="5" />
				<mat-error *ngIf="!model.initials">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Date of birth</mat-label>
				<input name="dateOfBirth" matInput [matDatepicker]="picker" [(ngModel)]="model.dateOfBirth" />
				<mat-hint>MM/DD/YYYY</mat-hint>
				<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
				<mat-datepicker #picker></mat-datepicker>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Address line 1</mat-label>
				<input name="addressLine1" matInput [(ngModel)]="model.addressLine1" />
			</mat-form-field>
			<mat-form-field>
				<mat-label>Address line 2</mat-label>
				<input name="addressLine2" matInput [(ngModel)]="model.addressLine2" />
			</mat-form-field>
			<mat-form-field>
				<mat-label>Address line 3</mat-label>
				<input name="addressLine3" matInput [(ngModel)]="model.addressLine3" />
			</mat-form-field>
			<mat-form-field>
				<mat-label>Address line 4</mat-label>
				<input name="addressLine4" matInput [(ngModel)]="model.addressLine4" />
			</mat-form-field>
			<mat-form-field>
				<mat-label>Postcode</mat-label>
				<input name="postcode" matInput [(ngModel)]="model.postcode" />
			</mat-form-field>

			<mat-form-field>
				<mat-label>Gender</mat-label>
				<mat-select name="genderId" [(ngModel)]="model.genderId">
					<mat-option *ngFor="let gender of genders | async" [value]="gender.value">
						{{ gender.label }}
					</mat-option>
				</mat-select>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Title</mat-label>
				<mat-select name="titleId" [(ngModel)]="model.titleId">
					<mat-option *ngFor="let title of titles | async" [value]="title.value">
						{{ title.label }}
					</mat-option>
				</mat-select>
			</mat-form-field>

			<mat-slide-toggle name="acceptEmail" [(ngModel)]="model.acceptEmail">Accept email</mat-slide-toggle>

			<mat-form-field>
				<mat-label>Email address</mat-label>
				<input [disabled]="!model.acceptEmail" name="emailAddress" matInput [(ngModel)]="model.emailAddress" />
			</mat-form-field>

			<mat-form-field>
				<mat-label>Phone number</mat-label>
				<input name="phoneNumber" matInput [(ngModel)]="model.phoneNumber" />
			</mat-form-field>
		</form>
	`,
	styles: [
		`
			:host {
				display: block;
				form {
					display: flex;
					flex-direction: column;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHomeComponent {
	model = StaffData[0];

	genders = this.lookupData.getGenders();
	titles = this.lookupData.getTitles();

	constructor(private lookupData: LookupDataService) {}
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSelectModule,
		MatSlideToggleModule,
	],
	declarations: [TemplateHomeComponent],
	exports: [TemplateHomeComponent],
})
export class TemplateHomeComponentModule {}
