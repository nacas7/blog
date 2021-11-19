import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;




  constructor(private postService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required,

      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/)

      ]),
      fecha: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/)

      ]),
      categoria: new FormControl('', [
        Validators.required

      ])

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.addPost(this.formulario.value);
    this.formulario.reset()
    Swal.fire({
      title: 'Post enviado',
      text: 'Puede comprobar su Post en el blog',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }

  selectCategory(categoria: string) {
    return this.postService.getPostByCategory(categoria);

  }

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  }



}
