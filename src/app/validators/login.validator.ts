import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class LoginValidator {
  public static loginValidator: FormGroup =
    new FormBuilder().group({
      user: new FormControl('', Validators.compose([
        Validators.maxLength(20),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  /*
    public static formLoginErrorMessage: Object = {
      'user': [
        { type: 'required', message: 'Campo obbligatorio!' },
        { type: 'maxlength', message: 'Lunghezza Max. 20' }
      ],
      'password': [
        { type: 'required', message: 'Campo obbligatorio!' }
      ]
    };
  */
}
