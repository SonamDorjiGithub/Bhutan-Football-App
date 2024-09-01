import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-futsal-changlimithang',
  templateUrl: './futsal-changlimithang.page.html',
  styleUrls: ['./futsal-changlimithang.page.scss'],
})
export class FutsalChanglimithangPage implements OnInit {

  public date: string = new Date().toISOString();

  changFutsalMon_var: boolean = false;
  changFutsalTues_var: boolean = false;
  changFutsalWed_var: boolean = false;
  changFutsalThu_var: boolean = false;
  changFutsalFri_var: boolean = false;
  changFutsalSat_var: boolean = false;
  changFutsalSun_var: boolean = false;

  changFutsalMonData:any[]=[];
  changFutsalTuesData:any[]=[];
  changFutsalWedData:any[]=[];
  changFutsalThuData:any[]=[];
  changFutsalFriData:any[]=[];
  changFutsalSatData:any[]=[];
  changFutsalSunData:any[]=[];

  constructor(
    private fs: AngularFirestore,
    private menu: MenuController,
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { 
    console.log("in constructor");
    this.loadFromFirestoreFutsalMonday();
    this.loadFromFirestoreFutsalTuesday();
    this.loadFromFirestoreFutsalWednesday();
    this.loadFromFirestoreFutsalThursday();
    this.loadFromFirestoreFutsalFriday();
    this.loadFromFirestoreFutsalSaturday();
    this.loadFromFirestoreFutsalSunday();
    this.loadPriceDetail();

    this.getDay();
  }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  day: string;

  monColor: string = "green";
  tueColor: string = "green";
  wedColor: string = "green";
  thuColor: string = "green";
  friColor: string = "green";
  satColor: string = "green";
  sunColor: string = "green";

  //to show date on current day
  monDate: boolean = false;
  tueDate: boolean = false;
  wedDate: boolean = false;
  thuDate: boolean = false;
  friDate: boolean = false;
  satDate: boolean = false;
  sunDate: boolean = false;

  getDay(){
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.day = weekdays[currentDate.getDay()];
    console.log("Day: "+this.day);

    //this.day = "sunday"
    //change color of dat text
    if(this.day == "monday"){
      this.monDate = true;
    }
    else if(this.day == "tuesday"){
      this.monColor = "blue";
      this.tueDate = true;
    }
    else if(this.day == "wednesday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedDate = true;
    }
    else if(this.day == "thursday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuDate = true;
    }
    else if(this.day == "friday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friDate = true;
    }
    else if(this.day == "saturday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friColor = "blue";
      this.satDate = true;
    }
    else if(this.day == "sunday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friColor = "blue";
      this.satColor = "blue";
      this.sunDate = true;
    }
  }

  showChangFutsalMon(){
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalMon_var == false){
      this.changFutsalMon_var = true;
    }
    else{
      this.changFutsalMon_var = false;
    }
  }

  showChangFutsalTues(){
    this.changFutsalMon_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalTues_var == false){
      this.changFutsalTues_var = true;
    }
    else{
      this.changFutsalTues_var = false;
    }
  }

  showChangFutsalWed(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalWed_var == false){
      this.changFutsalWed_var = true;
    }
    else{
      this.changFutsalWed_var = false;
    }
  }

  showChangFutsalThu(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalThu_var == false){
      this.changFutsalThu_var = true;
    }
    else{
      this.changFutsalThu_var = false;
    }
  }

  showChangFutsalFri(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalFri_var == false){
      this.changFutsalFri_var = true;
    }
    else{
      this.changFutsalFri_var = false;
    }
  }
  showChangFutsalSat(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalSat_var == false){
      this.changFutsalSat_var = true;
    }
    else{
      this.changFutsalSat_var = false;
    }
  }
  showChangFutsalSun(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;

    if(this.changFutsalSun_var == false){
      this.changFutsalSun_var = true;
    }
    else{
      this.changFutsalSun_var = false;
    }
  }

  loadFromFirestoreFutsalMonday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalMonData.push({
          mon8to9am:doc.data().time_8to9am,
          mon9to10am:doc.data().time_9to10am,
          mon10to11am : doc.data().time_10to11am,
          mon11to12pm :doc.data().time_11to12pm,
          mon12to1pm : doc.data().time_12to1pm,
          mon1to2pm : doc.data().time_1to2pm,
          mon2to3pm : doc.data().time_2to3pm,
          mon3to4pm : doc.data().time_3to4pm,
          mon4to5pm : doc.data().time_4to5pm,
          mon5to6pm : doc.data().time_5to6pm,
          mon6to7pm : doc.data().time_6to7pm,
          mon7to8pm : doc.data().time_7to8pm,
          mon8to9pm : doc.data().time_8to9pm,
          mon9to10pm : doc.data().time_9to10pm,
          monRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalMonData);
  }

  loadFromFirestoreFutsalTuesday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/tuesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalTuesData.push({
          tues8to9am:doc.data().time_8to9am,
          tues9to10am:doc.data().time_9to10am,
          tues10to11am : doc.data().time_10to11am,
          tues11to12pm :doc.data().time_11to12pm,
          tues12to1pm : doc.data().time_12to1pm,
          tues1to2pm : doc.data().time_1to2pm,
          tues2to3pm : doc.data().time_2to3pm,
          tues3to4pm : doc.data().time_3to4pm,
          tues4to5pm : doc.data().time_4to5pm,
          tues5to6pm : doc.data().time_5to6pm,
          tues6to7pm : doc.data().time_6to7pm,
          tues7to8pm : doc.data().time_7to8pm,
          tues8to9pm : doc.data().time_8to9pm,
          tues9to10pm : doc.data().time_9to10pm,
          tuesRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalTuesData);
  }

  loadFromFirestoreFutsalWednesday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/wednesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalWedData.push({
          wed8to9am:doc.data().time_8to9am,
          wed9to10am:doc.data().time_9to10am,
          wed10to11am : doc.data().time_10to11am,
          wed11to12pm :doc.data().time_11to12pm,
          wed12to1pm : doc.data().time_12to1pm,
          wed1to2pm : doc.data().time_1to2pm,
          wed2to3pm : doc.data().time_2to3pm,
          wed3to4pm : doc.data().time_3to4pm,
          wed4to5pm : doc.data().time_4to5pm,
          wed5to6pm : doc.data().time_5to6pm,
          wed6to7pm : doc.data().time_6to7pm,
          wed7to8pm : doc.data().time_7to8pm,
          wed8to9pm : doc.data().time_8to9pm,
          wed9to10pm : doc.data().time_9to10pm,
          wedRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalWedData);
  }

  loadFromFirestoreFutsalThursday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/thursday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalThuData.push({
          thu8to9am:doc.data().time_8to9am,
          thu9to10am:doc.data().time_9to10am,
          thu10to11am : doc.data().time_10to11am,
          thu11to12pm :doc.data().time_11to12pm,
          thu12to1pm : doc.data().time_12to1pm,
          thu1to2pm : doc.data().time_1to2pm,
          thu2to3pm : doc.data().time_2to3pm,
          thu3to4pm : doc.data().time_3to4pm,
          thu4to5pm : doc.data().time_4to5pm,
          thu5to6pm : doc.data().time_5to6pm,
          thu6to7pm : doc.data().time_6to7pm,
          thu7to8pm : doc.data().time_7to8pm,
          thu8to9pm : doc.data().time_8to9pm,
          thu9to10pm : doc.data().time_9to10pm,
          thuRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalThuData);
  }

  loadFromFirestoreFutsalFriday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/friday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalFriData.push({
          fri8to9am:doc.data().time_8to9am,
          fri9to10am:doc.data().time_9to10am,
          fri10to11am : doc.data().time_10to11am,
          fri11to12pm :doc.data().time_11to12pm,
          fri12to1pm : doc.data().time_12to1pm,
          fri1to2pm : doc.data().time_1to2pm,
          fri2to3pm : doc.data().time_2to3pm,
          fri3to4pm : doc.data().time_3to4pm,
          fri4to5pm : doc.data().time_4to5pm,
          fri5to6pm : doc.data().time_5to6pm,
          fri6to7pm : doc.data().time_6to7pm,
          fri7to8pm : doc.data().time_7to8pm,
          fri8to9pm : doc.data().time_8to9pm,
          fri9to10pm : doc.data().time_9to10pm,
          friRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalFriData);
  }
  loadFromFirestoreFutsalSaturday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/saturday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalSatData.push({
          sat8to9am:doc.data().time_8to9am,
          sat9to10am:doc.data().time_9to10am,
          sat10to11am : doc.data().time_10to11am,
          sat11to12pm :doc.data().time_11to12pm,
          sat12to1pm : doc.data().time_12to1pm,
          sat1to2pm : doc.data().time_1to2pm,
          sat2to3pm : doc.data().time_2to3pm,
          sat3to4pm : doc.data().time_3to4pm,
          sat4to5pm : doc.data().time_4to5pm,
          sat5to6pm : doc.data().time_5to6pm,
          sat6to7pm : doc.data().time_6to7pm,
          sat7to8pm : doc.data().time_7to8pm,
          sat8to9pm : doc.data().time_8to9pm,
          sat9to10pm : doc.data().time_9to10pm,
          satRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalSatData);
  }
  
  loadFromFirestoreFutsalSunday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/sunday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalSunData.push({
          sun8to9am:doc.data().time_8to9am,
          sun9to10am:doc.data().time_9to10am,
          sun10to11am : doc.data().time_10to11am,
          sun11to12pm :doc.data().time_11to12pm,
          sun12to1pm : doc.data().time_12to1pm,
          sun1to2pm : doc.data().time_1to2pm,
          sun2to3pm : doc.data().time_2to3pm,
          sun3to4pm : doc.data().time_3to4pm,
          sun4to5pm : doc.data().time_4to5pm,
          sun5to6pm : doc.data().time_5to6pm,
          sun6to7pm : doc.data().time_6to7pm,
          sun7to8pm : doc.data().time_7to8pm,
          sun8to9pm : doc.data().time_8to9pm,
          sun9to10pm : doc.data().time_9to10pm,
          sunRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFutsalSunData);
  }

  changFutsalPriceData:any[]=[];

  contact_no: number;
  price_nationalholiday_day: number;
  price_nationalholiday_night: number;
  price_weekend_day: number;
  price_weekend_night: number;
  price_weekdays_day : number;
  price_weekdays_night : number;

  loadPriceDetail(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').get().subscribe(res=>  
      {
        this.changFutsalPriceData.push({
          contact_no:res.data().contact_no,
          price_nationalholiday_day:res.data().price_nationalholiday_day,
          price_nationalholiday_night : res.data().price_nationalholiday_night,
          price_weekend_day :res.data().price_weekend_day,
          price_weekend_night : res.data().price_weekend_night,
          price_weekdays_day : res.data().price_weekdays_day,
          price_weekdays_night : res.data().price_weekdays_night
        })
        this.contact_no = res.data().contact_no;
        this.price_nationalholiday_day = res.data().price_nationalholiday_day,
        this.price_nationalholiday_night = res.data().price_nationalholiday_night,
        this.price_weekend_day = res.data().price_weekend_day,
        this.price_weekend_night = res.data().price_weekend_night,
        this.price_weekdays_day = res.data().price_weekdays_day,
        this.price_weekdays_night = res.data().price_weekdays_night
      })
      console.log(this.changFutsalPriceData);
  }

  callChang(){
    this.callNumber.callNumber(this.contact_no.toString(), true)
  }
  
}
