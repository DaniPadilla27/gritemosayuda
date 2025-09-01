import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface DatosUsuario {
  nombre: string
  apellidos: string
  edad: number | null
  grado: string
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "gritemos_ayuda"
  mostrarFormulario = false
  mostrarGoogleForm = false
  mostrarWhatsApp = false

  datosUsuario: DatosUsuario = {
    nombre: "",
    apellidos: "",
    edad: null,
    grado: "",
  }

  abrirFormulario() {
    if (this.validarDatos()) {
      this.mostrarFormulario = false
      this.mostrarGoogleForm = true
    } else {
      alert("Por favor, completa todos los campos antes de continuar.")
    }
  }

  finalizarEncuesta() {
    this.mostrarGoogleForm = false
    this.mostrarWhatsApp = true
  }

  volverInicio() {
    this.mostrarFormulario = false
    this.mostrarGoogleForm = false
    this.mostrarWhatsApp = false
  }

  abrirWhatsApp(numero: string, mensaje: string) {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
  }

  private validarDatos(): boolean {
    console.log("[v0] Validating form data:", this.datosUsuario)

    const isValid = !!(
      this.datosUsuario.nombre.trim() &&
      this.datosUsuario.apellidos.trim() &&
      this.datosUsuario.edad !== null &&
      this.datosUsuario.edad !== undefined &&
      this.datosUsuario.edad > 0 &&
      this.datosUsuario.grado.trim()
    )

    console.log("[v0] Form validation result:", isValid)
    return isValid
  }

  private limpiarDatos() {
    this.datosUsuario = {
      nombre: "",
      apellidos: "",
      edad: null,
      grado: "",
    }
  }
}
