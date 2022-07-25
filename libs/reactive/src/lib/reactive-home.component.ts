import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
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
		<h1>Reactive form</h1>

		<form [formGroup]="profileForm">
			<mat-form-field>
				<mat-label>Staff code</mat-label>
				<input matInput formControlName="staffCode" maxlength="12" />
				<mat-error *ngIf="profileForm.get('staffCode')?.hasError('required')">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Given name</mat-label>
				<input matInput formControlName="givenName" maxlength="50" />
				<mat-error *ngIf="profileForm.get('givenName')?.hasError('required')">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Surname</mat-label>
				<input matInput formControlName="surname" maxlength="50" />
				<mat-error *ngIf="profileForm.get('surname')?.hasError('required')">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Initials</mat-label>
				<input matInput formControlName="initials" maxlength="5" />
				<mat-error *ngIf="profileForm.get('initials')?.hasError('required')">This field is required</mat-error>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Date of birth</mat-label>
				<input matInput [matDatepicker]="picker" formControlName="dateOfBirth" />
				<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
				<mat-datepicker #picker></mat-datepicker>
			</mat-form-field>

			<mat-card>
				<mat-card-title>Address</mat-card-title>

				<mat-card-content>
					<mat-form-field>
						<mat-label>Address line 1</mat-label>
						<input matInput formControlName="addressLine1" />
					</mat-form-field>
					<mat-form-field>
						<mat-label>Address line 2</mat-label>
						<input matInput formControlName="addressLine2" />
					</mat-form-field>
					<mat-form-field>
						<mat-label>Address line 3</mat-label>
						<input matInput formControlName="addressLine3" />
					</mat-form-field>
					<mat-form-field>
						<mat-label>Address line 4</mat-label>
						<input matInput formControlName="addressLine4" />
					</mat-form-field>
					<mat-form-field>
						<mat-label>Postcode</mat-label>
						<input matInput formControlName="postcode" />
					</mat-form-field>
				</mat-card-content>
			</mat-card>

			<mat-form-field>
				<mat-label>Gender</mat-label>
				<mat-select formControlName="genderId">
					<mat-option *ngFor="let gender of genders | async" [value]="gender.value">
						{{ gender.label }}
					</mat-option>
				</mat-select>
			</mat-form-field>

			<mat-form-field>
				<mat-label>Title</mat-label>
				<mat-select formControlName="titleId">
					<mat-option *ngFor="let title of titles | async" [value]="title.value">
						{{ title.label }}
					</mat-option>
				</mat-select>
			</mat-form-field>

			<mat-slide-toggle formControlName="acceptEmail">Accept email</mat-slide-toggle>

			<mat-form-field *ngIf="profileForm.get('acceptEmail')?.value">
				<mat-label>Email address</mat-label>
				<input matInput formControlName="emailAddress" />
			</mat-form-field>

			<mat-form-field>
				<mat-label>Phone number</mat-label>
				<input matInput formControlName="phoneNumber" />
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

				mat-card-content {
					display: flex;
					flex-direction: column;
				}

				mat-card {
					margin-bottom: 1rem;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveHomeComponent implements OnInit {
	profileForm = this.fb.group({
		staffCode: ['', Validators.required],
		givenName: ['', Validators.required],
		surname: ['', Validators.required],
		initials: [''],
		dateOfBirth: [],
		addressLine1: [''],
		addressLine2: [''],
		addressLine3: [''],
		addressLine4: [''],
		postcode: [''],
		genderId: [],
		titleId: [],
		acceptEmail: [false],
		emailAddress: [''],
		phoneNumber: [''],
	});

	model = StaffData[0];

	genders = this.lookupData.getGenders();
	titles = this.lookupData.getTitles();

	constructor(private fb: FormBuilder, private lookupData: LookupDataService) {}

	ngOnInit(): void {
		this.profileForm.patchValue(this.model as any);
	}
}

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSelectModule,
		MatSlideToggleModule,
	],
	declarations: [ReactiveHomeComponent],
	exports: [ReactiveHomeComponent],
})
export class ReactiveHomeComponentModule {}
