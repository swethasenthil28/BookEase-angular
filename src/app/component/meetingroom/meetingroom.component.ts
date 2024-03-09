import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MeetingRoom } from 'src/app/model/MeetingRoom';
import { MeetingRoomServiceService } from 'src/app/services/meeting-room-service.service';
@Component({
  selector: 'app-meetingroom',
  templateUrl: './meetingroom.component.html',
  styleUrls: ['./meetingroom.component.css']
})
export class MeetingroomComponent {

  meetingRoom:MeetingRoom;

  constructor(MeetingRoom:MeetingRoom,private MeetingRoomServiceService: MeetingRoomServiceService) {
    this.meetingRoom=MeetingRoom;
   }

  // ngOnInit(): void {
  // }

  createMeetingRoom() {
   this.MeetingRoomServiceService.CreateNewMeetingRoomService(this.meetingRoom).subscribe({
    next:()=>console.log("Inserted successfully"),
    error: (err:any) => { console.error(err) }
    //complete: () => { this.router.navigate(['viewblogs']) }
  });
}
}

