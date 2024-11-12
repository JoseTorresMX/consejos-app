import { Injectable } from '@angular/core';
/**
 * Importamos las librerias
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * Configurar el servicio para consumir la API
 * de consejos https://api.adviceslip.com/advice
 *  */

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  /**
   * Agregamos la URL de la API
   * @param
   */
  private apiURL = 'https://api.adviceslip.com/advice';

  /**
   * Le damos cuerpo al constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Creamo un metood el cual haga solicitudes
   * GET al endpoint
   */
  getAdvice(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
