import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule

  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
