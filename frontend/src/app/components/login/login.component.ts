import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})

export class LoginComponent implements AfterViewInit, OnInit {

  constructor(/*private authService: AuthService*/ private router: Router) { }


  emailLogin: string = '';
  passwordLogin: string = '';

  nameR: string = '';
  emailR: string = '';
  passwordR: string = '';

  errorMessage: string = '';

  mostrarexito = false;
  mostrarerror = false;
  backgroundisabled = false;

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    const switchCtn = document.querySelector("#switch-cnt");
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const aContainer = document.querySelector("#a-container");
    const bContainer = document.querySelector("#b-container");
    const allButtons = document.querySelectorAll(".submit");

    const getButtons = () => {
      if (event) {
        event.preventDefault();
      }
    };

    if(switchCtn && switchC1 && switchC2 && switchCircle && switchBtn && aContainer && bContainer && allButtons){

      const changeForm = () => {
      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    };

    const mainF = () => {
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", getButtons);
      }
      for (let i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener("click", changeForm);
      }
    };

    if (switchCtn) {
      mainF();
    }
  }
}

/*
autenticarUsuario(username : string, password:string): void {
  if (username) {
    this.authService.obtenerUser(username).subscribe(
      (response: any) => {
        console.log('Usuario obtenido:', response);
        if(response && response.name==username && response.password == password){
          this.authService.loggedIn = true;
          this.authService.user = response;
          this.router.navigateByUrl('/profile');
        }
        else{
          const errorMessage = document.getElementById('errorMessage');
          if(errorMessage){
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Credenciales incorrectas';
          }
          this.authService.loggedIn = false;
        }
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
        const errorMessage = document.getElementById('errorMessage');
        if(errorMessage){
          errorMessage.style.color = 'red';
          errorMessage.textContent = 'Usuario no encontrado';
        }
      }
    );
  }
}
comprobarDisponibilidadUsuario(nombre: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    this.authService.obtenerUsuarios().subscribe(
      (users) => {
        console.log('Users:', users);
        for (let i = 0; i < users.length; i++) {
          if (users[i].name == nombre) {
            resolve(false);
            return;
          }
        }
        resolve(true);
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
        reject(false);
      }
    );
  });
}

  async agregarUsuario() {
    if(this.nameR != "" && this.passwordR != ""){
    const usuario = {
      name: this.nameR,
      password: this.passwordR,
      email: this.emailR,
    };

    const disponibilidad = await this.comprobarDisponibilidadUsuario(usuario.name);

    if (disponibilidad) {
      this.authService.agregarUsuario(usuario).subscribe(
        response => {
          console.log('Usuario agregado:', response);
          this.mostrarDialog(true);
        }
      );
    } else {
      this.mostrarDialog(false);
    }
  }else{
    const errorMessage = document.getElementById('errorMessageSignUp');
    if(errorMessage){
      errorMessage.style.color = 'red';
      errorMessage.textContent = 'Debe llenar todos los campos';
    }
  }
  }
*/
  mostrarDialog(exito: boolean) {
    if(exito){
      this.mostrarexito = true;
      this.backgroundisabled = true;
    }
    else{
      this.mostrarerror = true;
      this.backgroundisabled = true;
    }
  }
  ocultarDialog() {
      this.mostrarexito = false;
      this.mostrarerror = false;
      this.backgroundisabled = false;
      this.nameR = "";
      this.passwordR = "";
      this.emailR = "";
      const errorMessage = document.getElementById('errorMessageSignUp');
      if(errorMessage){
        errorMessage.style.display = 'none';
      }
  }
}