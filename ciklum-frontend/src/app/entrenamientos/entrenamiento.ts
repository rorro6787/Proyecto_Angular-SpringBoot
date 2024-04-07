import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ContactoSesionComponent } from '../detalles-sesion/contacto-sesion/contacto-sesion.component';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.html', 
  styleUrls: ['./entrenamiento.css'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule, TitleCasePipe],
})
export class Entrenamiento implements OnInit {
  planes: any[] = [];

  constructor(private router: Router) {
  }

  

  vueltaAlHome(): void {
    //this.estadoPestanaService.cambiarMostrarPestana(true);
    this.router.navigateByUrl('principal');
  }

  ngOnInit(): void {
    // Aquí podrías cargar las sesiones desde algún servicio o una API
    this.planes = [
      { nombre: 'Plan 1', descripcion: 'Descripción del plan de entrenamiento 1' },
      { nombre: 'Plan 2', descripcion: 'Descripción del plan de entrenamiento 2' },
      // Agrega más sesiones si es necesario
    ];
  }

  verPlan() {
    // Navegar a la ruta 'contacto-sesion'
    this.router.navigate(['sesiones']);
    
  }

  editarPlan(planes: any) {
    // Lógica para editar la sesión
  }

  eliminarPlan(planes: any) {
    // Lógica para eliminar la sesión
  }

  agregarPlan() {
    // Lógica para añadir una nueva sesión
    // Aquí podrías abrir un formulario para añadir una nueva sesión
  }

}
