import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { EncryptService } from '../../services/encrypt.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent implements OnInit {
  //http://localhost:4200/?vendorId=242022&firstName=Joao&lastName=Ribeiro&telephone=1232123&birthDate=12-03-02&salutation=MAN&street=djosas

  userForm!: FormGroup;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _data = inject(DataService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private encryptionService = inject(EncryptService);

  firstName?: string | null;
  lastName?: string | null;
  salutation?: any;
  street?: string | null;
  birthDate?: any;
  telephone?: string | null;
  returntocheckoutURL?: string | null;
  vendorId?: string | null;

  constructor() {}

  ngOnInit(): void {
    const savedData = sessionStorage.getItem('userFormData');
    const initialData = savedData ? JSON.parse(savedData) : this._data.data;

    this.userForm = this.fb.group({
      firstName: [initialData?.firstName || ''],
      lastName: [initialData?.lastName || ''],
      salutation: [initialData?.salutation || ''],
      street: [initialData?.street || ''],
      birthDate: [initialData?.birthDate || null],
      telephone: [initialData?.telephone || ''],
      returntocheckoutURL: [initialData?.returntocheckoutURL || ''],
      vendorId: [initialData?.vendorId || ''],
    });

    this.userForm.valueChanges.subscribe((formValues) => {
      const encryptedData = this.encryptionService.encrypt(
        JSON.stringify(formValues)
      );
      sessionStorage.setItem('userFormData', encryptedData);
    });
  }
}
