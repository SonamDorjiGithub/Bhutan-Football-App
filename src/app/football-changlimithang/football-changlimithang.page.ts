import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-football-changlimithang',
  templateUrl: './football-changlimithang.page.html',
  styleUrls: ['./football-changlimithang.page.scss'],
})
export class FootballChanglimithangPage implements OnInit {
  
  public date: string = new Date().toISOString();

  changFootballMon_var: boolean = false;
  changFootballTues_var: boolean = false;
  changFootballWed_var: boolean = false;
  changFootballThu_var: boolean = false;
  changFootballFri_var: boolean = false;
  changFootballSat_var: boolean = false;
  changFootballSun_var: boolean = false;
 
  changFootMonData:any[]=[];
  changFootTuesData:any[]=[];
  changFootWedData:any[]=[];
  changFootThuData:any[]=[];
  changFootFriData:any[]=[];
  changFootSatData:any[]=[];
  changFootSunData:any[]=[];

  constructor(
    private fs: AngularFirestore,
    private menu: MenuController,
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { 
    this.loadFromFirestoreMonday();
    this.loadFromFirestoreTuesday();
    this.loadFromFirestoreWednesday();
    this.loadFromFirestoreThursday();
    this.loadFromFirestoreFriday();
    this.loadFromFirestoreSaturday();
    this.loadFromFirestoreSunday();
    this.loadPriceDetail();

    this.getDay();
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

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  showChangFullMon(){
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballMon_var == false){
      this.changFootballMon_var = true;
    }
    else{
      this.changFootballMon_var = false;
    }
  }

  showChangFullTues(){
    this.changFootballMon_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballTues_var == false){
      this.changFootballTues_var = true;
    }
    else{
      this.changFootballTues_var = false;
    }
  }

  showChangFullWed(){
    console.log("wednesday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballWed_var == false){
      this.changFootballWed_var = true;
      console.log("wednesday true")
    }
    else{
      this.changFootballWed_var = false;
    }
  }

  showChangFullThu(){
    console.log("thursday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballThu_var == false){
      this.changFootballThu_var = true;
      console.log("thursday true")
    }
    else{
      this.changFootballThu_var = false;
    }
  }

  showChangFullFri(){
    console.log("friday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballFri_var == false){
      this.changFootballFri_var = true;
      console.log("friday true")
    }
    else{
      this.changFootballFri_var = false;
    }
  }

  showChangFullSat(){
    console.log("saturday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballSat_var == false){
      this.changFootballSat_var = true;
      console.log("saturday true")
    }
    else{
      this.changFootballSat_var = false;
    }
  }

  showChangFullSun(){
    console.log("sunday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;

    if(this.changFootballSun_var == false){
      this.changFootballSun_var = true;
      console.log("sunday true")
    }
    else{
      this.changFootballSun_var = false;
    }
  }

  loadFromFirestoreMonday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootMonData.push({
          mon8to10am:doc.data().time_8to10am,
          mon10to12am:doc.data().time_10to12am,
          mon12to2pm : doc.data().time_12to2pm,
          mon2to4pm :doc.data().time_2to4pm,
          mon4to6pm : doc.data().time_4to6pm,
          mon6to8pm : doc.data().time_6to8pm,
          mon8to10pm : doc.data().time_8to10pm,
          monRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFootMonData);
  }

  loadFromFirestoreTuesday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/tuesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootTuesData.push({
          tues8to10am:doc.data().time_8to10am,
          tues10to12am:doc.data().time_10to12am,
          tues12to2pm : doc.data().time_12to2pm,
          tues2to4pm :doc.data().time_2to4pm,
          tues4to6pm : doc.data().time_4to6pm,
          tues6to8pm : doc.data().time_6to8pm,
          tues8to10pm : doc.data().time_8to10pm,
          tuesRemarks: doc.data().remarks,
        })
      });
      })
      console.log(this.changFootTuesData);
   }

    loadFromFirestoreWednesday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/wednesday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootWedData.push({
            wed8to10am:doc.data().time_8to10am,
            wed10to12am:doc.data().time_10to12am,
            wed12to2pm : doc.data().time_12to2pm,
            wed2to4pm :doc.data().time_2to4pm,
            wed4to6pm : doc.data().time_4to6pm,
            wed6to8pm : doc.data().time_6to8pm,
            wed8to10pm : doc.data().time_8to10pm,
            wedRemarks: doc.data().remarks,
          })
        });
        })
        console.log(this.changFootWedData);
      }

    loadFromFirestoreThursday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/thursday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootThuData.push({
            thu8to10am:doc.data().time_8to10am,
            thu10to12am:doc.data().time_10to12am,
            thu12to2pm : doc.data().time_12to2pm,
            thu2to4pm :doc.data().time_2to4pm,
            thu4to6pm : doc.data().time_4to6pm,
            thu6to8pm : doc.data().time_6to8pm,
            thu8to10pm : doc.data().time_8to10pm,
            thuRemarks: doc.data().remarks,
          })
        });
        })
        console.log(this.changFootFriData);
      }

      loadFromFirestoreFriday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/friday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootFriData.push({
              fri8to10am:doc.data().time_8to10am,
              fri10to12am:doc.data().time_10to12am,
              fri12to2pm : doc.data().time_12to2pm,
              fri2to4pm :doc.data().time_2to4pm,
              fri4to6pm : doc.data().time_4to6pm,
              fri6to8pm : doc.data().time_6to8pm,
              fri8to10pm : doc.data().time_8to10pm,
              friRemarks: doc.data().remarks,
            })
          });
          })
          console.log(this.changFootFriData);
        }

      loadFromFirestoreSaturday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/saturday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootSatData.push({
              sat8to10am:doc.data().time_8to10am,
              sat10to12am:doc.data().time_10to12am,
              sat12to2pm : doc.data().time_12to2pm,
              sat2to4pm :doc.data().time_2to4pm,
              sat4to6pm : doc.data().time_4to6pm,
              sat6to8pm : doc.data().time_6to8pm,
              sat8to10pm : doc.data().time_8to10pm,
              satRemarks: doc.data().remarks,
            })
          });
          })
          console.log(this.changFootFriData);
      }

      loadFromFirestoreSunday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/sunday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootSunData.push({
              sun8to10am:doc.data().time_8to10am,
              sun10to12am:doc.data().time_10to12am,
              sun12to2pm : doc.data().time_12to2pm,
              sun2to4pm :doc.data().time_2to4pm,
              sun4to6pm : doc.data().time_4to6pm,
              sun6to8pm : doc.data().time_6to8pm,
              sun8to10pm : doc.data().time_8to10pm,
              sunRemarks: doc.data().remarks,
            })
          });
          })
          console.log(this.changFootSunData);
      }

  changFootballPriceData:any[]=[];

  contact_no: number;
  price_weekend_day: number;
  price_weekend_night: number;
  price_weekdays_day : number;
  price_weekdays_night : number;

  loadPriceDetail(){
    this.fs.collection('/football').doc('Changlimithang_Full').get().subscribe(res=>  
      {
        this.changFootballPriceData.push({
          contact_no:res.data().contact_no,
          price_weekend_day :res.data().price_weekend_day,
          price_weekend_night : res.data().price_weekend_night,
          price_weekdays_day : res.data().price_weekdays_day,
          price_weekdays_night : res.data().price_weekdays_night
        })
        this.contact_no = res.data().contact_no;
        this.price_weekend_day = res.data().price_weekend_day,
        this.price_weekend_night = res.data().price_weekend_night,
        this.price_weekdays_day = res.data().price_weekdays_day,
        this.price_weekdays_night = res.data().price_weekdays_night
      })
      console.log(this.changFootballPriceData);
  }

    callChang(){
      this.callNumber.callNumber(this.contact_no.toString(), true)
    }
}
