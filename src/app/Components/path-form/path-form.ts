import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PathService } from '../../Services/path-service';
import { Router } from '@angular/router';
import { Path } from '../../Shared/Models/path';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-path-form',
  styleUrl: './path-form.scss',
  templateUrl: './path-form.html',
})
export class PathForm {
  private fb = inject(FormBuilder);
  private pathServ = inject(PathService);
  private router = inject(Router);

  // Add four fields with fb.group

  // nonNullable means reset() goes back to these 
  // starting values instead of null,
  // and getRawValue() is typed without null.
  protected pathForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    region: ['', [Validators.required]],
    description: ['', [Validators.required]],
    difficulty: [''],
    surface: [''],
    dogFriendly: [true],
  })

  protected onSubmit(): void{
    if(this.pathForm.invalid){
      return;
    }

    // getRawValue() includes disaled controls too. value would skip them.

    const formValue = this.pathForm.getRawValue();
    
    this.pathServ.addPath(formValue as Path);
    this.pathForm.reset();
    
  }



  // protected onSubmit(): void {
  //   if (this.breweryForm.invalid) {
  //     return;
  //   }

  //   // getRawValue() includes disabled controls too. value would skip them.
  //   const formValue = this.breweryForm.getRawValue();
  //   const id = this.isEditMode() ? Number(this.id()) : this.breweryService.nextId();

  //   if (this.isEditMode()) {
  //     this.breweryService.updateBrewery({ id, ...formValue });
  //   } else {
  //     this.breweryService.addBrewery({ id, ...formValue });
  //   }

  //   this.breweryForm.reset();
  //   this.router.navigate(['/breweries', id]);
  // }

}
