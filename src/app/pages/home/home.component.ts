import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  firstName?: string | null;
  lastName?: string | null;
  salutation?: any;
  street?: string | null;
  birthDate?: any;
  telephone?: string | null;
  returntocheckoutURL?: string | null;
  vendorId?: string | null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _data = inject(DataService);

  ngOnInit(): void {
    const encodeIfNeeded = (param: string | null) =>
      param ? encodeURIComponent(param) : null;

    this.firstName = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('firstName')
    );
    this.lastName = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('lastName')
    );
    this.salutation = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('salutation')
    );
    this.street = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('street')
    );
    this.birthDate = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('birthDate')
    );
    this.telephone = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('telephone')
    );
    this.returntocheckoutURL = this.route.snapshot.queryParamMap.get(
      'returntocheckoutURL'
    ); // Leave as is
    this.vendorId = encodeIfNeeded(
      this.route.snapshot.queryParamMap.get('vendorId')
    );

    // this.firstName = this.route.snapshot.queryParamMap.get('firstName');
    // this.lastName = this.route.snapshot.queryParamMap.get('lastName');
    // this.salutation = this.route.snapshot.queryParamMap.get('salutation');
    // this.street = this.route.snapshot.queryParamMap.get('street');
    // this.birthDate = this.route.snapshot.queryParamMap.get('birthDate');
    // this.telephone = this.route.snapshot.queryParamMap.get('telephone');
    // this.returntocheckoutURL = this.route.snapshot.queryParamMap.get(
    //   'returntocheckoutURL'
    // );
    // this.vendorId = this.route.snapshot.queryParamMap.get('vendorId');

    if (this.vendorId === '242022') {
      this._data.data = {
        firstName: this.firstName,
        lastName: this.lastName,
        salutation: this.salutation,
        street: this.street,
        birthDate: this.birthDate,
        telephone: this.telephone,
        returntocheckoutURL: this.returntocheckoutURL,
        vendorId: this.vendorId,
      };

      sessionStorage.setItem('userFormData', JSON.stringify(this._data.data));
      this.router.navigate(['calculator']);
      console.log('dados', this._data.data);
    } else {
      this.router.navigate(['error-page']);
    }
  }
}
