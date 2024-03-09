import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from '../model/MeetingRoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomServiceService {

  constructor(private httpClient: HttpClient) { }

  // addNewAccount(newAccount: Account): Observable<any> {
  //   return this.httpClient.post("http://localhost:8090/account", newAccount);
  
  CreateNewMeetingRoomService(newMeetingRoom:MeetingRoom):Observable<any>{
    return this.httpClient.post("http://localhost:8080/newMeetingRoom",newMeetingRoom);
  }
}
