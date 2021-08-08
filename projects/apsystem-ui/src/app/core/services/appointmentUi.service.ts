import { Appointment } from './../models/appointment';
import { AppointmentModel } from './../models/Appointment-model';
import { environment } from './../../../environments/environment';
import { SlotModel } from './../models/Slot-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentSlots } from 'apsystem-api-client/lib/api/models/APSystem/Models.Appointment/appointment-slots';


@Injectable({
  providedIn: 'root'
})
export class AppointmentUiService {
  baseUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }

  GetAppointmentSlots(): Observable<SlotModel[]>{
      return this.http.get<SlotModel[]>(this.baseUrl + '/api/v1/Auth/ApSlots');
  }

  CreateNewAppointment(appointmentSlots: AppointmentModel): Observable<AppointmentModel>{
    return this.http.post<AppointmentModel>(this.baseUrl + '​/api​/v1​/Auth​/CreateAp', appointmentSlots);
  }

 AddAppointmentSlot(newSlots: SlotModel): Observable<SlotModel>{
  return this.http.post(this.baseUrl + '​/api​/v1​/Auth​/AddSlots', newSlots);
 }

  GetAppointmentList(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.baseUrl + '/api/v1/Auth/GetAppointment');
  }

  AppointmentbyDoctorID(getSlots: Appointment): Observable<Appointment[]>{
    return this.http.post<Appointment[]>(this.baseUrl + '​/api​/v1​/Auth/ApbyDocId', getSlots);
  }

  UpdadteAppointemnt(id: number, UpdateAppointment: AppointmentModel): Observable<AppointmentModel>{
    return this.http.put<AppointmentModel>(this.baseUrl + '​/api​/v1​/Auth/EditAppointment', {id,UpdateAppointment});
  }

  DeleteAppointemnt(id: number){
    return this.http.delete<AppointmentModel>(this.baseUrl + '​/api​/v1​/Auth​/EditAppointment', );
  }






}
