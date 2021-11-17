import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;


  constructor(private postService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('',
        Validators.required),
      texto: new FormControl('',
        Validators.required),
      autor: new FormControl('',
        Validators.required),
      imagen: new FormControl('',
        Validators.required),
      fecha: new FormControl('',
        Validators.required),
      categoria: new FormControl('',
        Validators.required)

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.addPost(this.formulario.value);
    this.formulario.reset()
  }

  selectCategory(categoria: string) {
    this.postService.getPostByCategory(categoria)

  }

}
