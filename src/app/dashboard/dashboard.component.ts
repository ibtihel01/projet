import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';
import { FormateursService } from '../formateur/formateurs-service.service';
import { ParticipantsService } from '../participant/participants-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topFormateurs= [{nom:'sayahi',prenom:'ibtihel'}
];

tracksAndSessions = [{track:'MEAN',sessions:0}, {track:'Angular',sessions:0},
{track:'NodeJS',sessions:0}, {track:'Android',sessions:0}, {track:'Swift',sessions:0}, {track:'Xamarin',sessions:0},{track:'Ionic',sessions:0}];
sessionsNbr: number;
formateursNbr:number;
participantsNbr:number;
constructor(private FakesessionitemService: FakesessionitemService, private formateurItemService : FormateursService,private participantItemService : ParticipantsService) {
  this.formateursNbr = formateurItemService.getLength();
  this.sessionsNbr = FakesessionitemService.getLength();
  this.participantsNbr = participantItemService.getLength();

}

  ngOnInit(): void {
    this.tracksAndSessions.forEach((item:any)=>{
      item.sessions=this.FakesessionitemService.getNbrSession(item.track);
    })
  }

}
