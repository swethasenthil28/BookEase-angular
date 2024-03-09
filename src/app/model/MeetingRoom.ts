export class MeetingRoom{
    id :number;
    name:string;
    capacity:number;
    floorNumber:number;
    type:string;
    date:string;
    costOfRoom:number;
    isAvailable:boolean;

    constructor(id:number,name:string,capacity:number,floorNumber:number,type:string,date:string,costOfRoom:number,isAvailable:boolean){
            this.id=id;
            this.capacity=capacity;
            this.costOfRoom=costOfRoom;
            this.date=date;
            this.floorNumber=floorNumber;
            this.isAvailable=isAvailable;
            this.name=name;
            this.type=type;
        }

}
