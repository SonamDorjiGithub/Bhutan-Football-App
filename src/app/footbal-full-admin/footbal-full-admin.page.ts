import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-footbal-full-admin',
  templateUrl: './footbal-full-admin.page.html',
  styleUrls: ['./footbal-full-admin.page.scss'],
})
export class FootbalFullAdminPage implements OnInit {
  
  public date: string = new Date().toISOString();

  time_all: boolean = true;  
  time_8to10am: boolean;
  time_10to12am: boolean;
  time_12to2pm: boolean;
  time_2to4pm: boolean;
  time_4to6pm: boolean;
  time_6to8pm: boolean;
  time_8to10pm: boolean;
  day:any;

  changFootMonData:any[]=[];  
  changFootTuesData:any[]=[];  
  changFootWedData:any[]=[];  
  changFootThuData:any[]=[];  
  changFootFriData:any[]=[]; 
  changFootSatData:any[]=[];  
  changFootSunData:any[]=[];  

  //local variable. It is not for sending to firebase, it is only for storing from firebase and 
  //to show in client side
  mon_all: boolean = true;    
  mon_8to10am: boolean;
  mon_10to12am: boolean;
  mon_12to2pm: boolean;
  mon_2to4pm: boolean;
  mon_4to6pm: boolean;
  mon_6to8pm: boolean;
  mon_8to10pm: boolean;

  tues_all: boolean = true;    
  tues_8to10am: boolean;
  tues_10to12am: boolean;
  tues_12to2pm: boolean;
  tues_2to4pm: boolean;
  tues_4to6pm: boolean;
  tues_6to8pm: boolean;
  tues_8to10pm: boolean;

  wed_all: boolean = true;    
  wed_8to10am: boolean;
  wed_10to12am: boolean;
  wed_12to2pm: boolean;
  wed_2to4pm: boolean;
  wed_4to6pm: boolean;
  wed_6to8pm: boolean;
  wed_8to10pm: boolean;

  thu_all: boolean = true;    
  thu_8to10am: boolean;
  thu_10to12am: boolean;
  thu_12to2pm: boolean;
  thu_2to4pm: boolean;
  thu_4to6pm: boolean;
  thu_6to8pm: boolean;
  thu_8to10pm: boolean;

  fri_all: boolean = true;    
  fri_8to10am: boolean;
  fri_10to12am: boolean;
  fri_12to2pm: boolean;
  fri_2to4pm: boolean;
  fri_4to6pm: boolean;
  fri_6to8pm: boolean;
  fri_8to10pm: boolean;

  sat_all: boolean = true;    
  sat_8to10am: boolean;
  sat_10to12am: boolean;
  sat_12to2pm: boolean;
  sat_2to4pm: boolean;
  sat_4to6pm: boolean;
  sat_6to8pm: boolean;
  sat_8to10pm: boolean;

  sun_all: boolean = true;    
  sun_8to10am: boolean;
  sun_10to12am: boolean;
  sun_12to2pm: boolean;
  sun_2to4pm: boolean;
  sun_4to6pm: boolean;
  sun_6to8pm: boolean;
  sun_8to10pm: boolean;

  constructor(
    private fs : AngularFirestore,
    private menu: MenuController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private navCtl : NavController
  ) { 
    //this.presentLoading();
    this.loadFromFirestoreMonday();
    this.loadFromFirestoreTuesday();
    this.loadFromFirestoreWednesday();
    this.loadFromFirestoreThursday();
    this.loadFromFirestoreFriday();
    this.loadFromFirestoreSaturday();
    this.loadFromFirestoreSunday();
    //this.loadingController.dismiss();    
    
    this.getDay();
  }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  today: string;

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
    this.today = weekdays[currentDate.getDay()];
    console.log("Day: "+this.today);

    //this.today = "sunday"
    //change color of dat text
    if(this.today == "monday"){
      this.monDate = true;
    }
    else if(this.today == "tuesday"){
      this.monColor = "blue";
      this.tueDate = true;
    }
    else if(this.today == "wednesday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedDate = true;
    }
    else if(this.today == "thursday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuDate = true;
    }
    else if(this.today == "friday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friDate = true;
    }
    else if(this.today == "saturday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friColor = "blue";
      this.satDate = true;
    }
    else if(this.today == "sunday"){
      this.monColor = "blue";
      this.tueColor = "blue";
      this.wedColor = "blue";
      this.thuColor = "blue";
      this.friColor = "blue";
      this.satColor = "blue";
      this.sunDate = true;
    }
  }

  goDay(day:any){
    console.log("show day="+day);
    this.day=day;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 15000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Changes will be made for all timing which cannot be reset. Are you sure to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            if(this.day == '/monday'){
              if(this.mon_all == true){
                this.mon_all = false;
                console.log("blah: false"+this.mon_all);
              }
              else{
                this.mon_all = true;
                console.log("blah: true"+this.mon_all);
              }
            }

            else if(this.day == '/tuesday'){
              if(this.tues_all == true){
                this.tues_all = false;
              }
              else{
                this.tues_all = true;
              }
            }
            else if(this.day == '/wednesday'){
              if(this.wed_all == true){
                this.wed_all = false;
              }
              else{
                this.wed_all = true;
              }
            }
            else if(this.day == '/thursday'){
              if(this.thu_all == true){
                this.thu_all = false;
              }
              else{
                this.thu_all = true;
              }
            }
            else if(this.day == '/friday'){
              if(this.fri_all == true){
                this.fri_all = false;
              }
              else{
                this.fri_all = true;
              }
            }
            else if(this.day == '/saturday'){
              if(this.sat_all == true){
                this.sat_all = false;
              }
              else{
                this.sat_all = true;
              }
            }
            else if(this.day == '/sunday'){
              if(this.sun_all == true){
                this.sun_all = false;
              }
              else{
                this.sun_all = true;
              }
            }
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.allToggle();
          }
        }
      ]
    });

    await alert.present();
  }

  allToggle(){
    if(this.day == "/monday"){
        if(this.mon_all == true){
          this.mon_8to10am = true;
          this.mon_10to12am = true;
          this.mon_12to2pm = true;
          this.mon_2to4pm = true;
          this.mon_4to6pm = true;
          this.mon_6to8pm = true;
          this.mon_8to10pm = true;
        }
        else{
          this.mon_8to10am = false;
          this.mon_10to12am = false;
          this.mon_12to2pm = false;
          this.mon_2to4pm = false;
          this.mon_4to6pm = false;
          this.mon_6to8pm = false;
          this.mon_8to10pm = false;
        }
      }    

    else if(this.day == "/tuesday"){
      if(this.tues_all == true){
        this.tues_8to10am = true;
        this.tues_10to12am = true;
        this.tues_12to2pm = true;
        this.tues_2to4pm = true;
        this.tues_4to6pm = true;
        this.tues_6to8pm = true;
        this.tues_8to10pm = true;
      }
      else{
        this.tues_8to10am = false;
        this.tues_10to12am = false;
        this.tues_12to2pm = false;
        this.tues_2to4pm = false;
        this.tues_4to6pm = false;
        this.tues_6to8pm = false;
        this.tues_8to10pm = false;
      }
    }
    
    else if(this.day == "/wednesday"){
      if(this.wed_all == true){
        this.wed_8to10am = true;
        this.wed_10to12am = true;
        this.wed_12to2pm = true;
        this.wed_2to4pm = true;
        this.wed_4to6pm = true;
        this.wed_6to8pm = true;
        this.wed_8to10pm = true;
      }
      else{
        this.wed_8to10am = false;
        this.wed_10to12am = false;
        this.wed_12to2pm = false;
        this.wed_2to4pm = false;
        this.wed_4to6pm = false;
        this.wed_6to8pm = false;
        this.wed_8to10pm = false;
      }
    }

    else if(this.day == "/thursday"){
      if(this.thu_all == true){
        this.thu_8to10am = true;
        this.thu_10to12am = true;
        this.thu_12to2pm = true;
        this.thu_2to4pm = true;
        this.thu_4to6pm = true;
        this.thu_6to8pm = true;
        this.thu_8to10pm = true;
      }
      else{
        this.thu_8to10am = false;
        this.thu_10to12am = false;
        this.thu_12to2pm = false;
        this.thu_2to4pm = false;
        this.thu_4to6pm = false;
        this.thu_6to8pm = false;
        this.thu_8to10pm = false;
      }
    }

    else if(this.day == "/friday"){
      if(this.fri_all == true){
        this.fri_8to10am = true;
        this.fri_10to12am = true;
        this.fri_12to2pm = true;
        this.fri_2to4pm = true;
        this.fri_4to6pm = true;
        this.fri_6to8pm = true;
        this.fri_8to10pm = true;
      }
      else{
        this.fri_8to10am = false;
        this.fri_10to12am = false;
        this.fri_12to2pm = false;
        this.fri_2to4pm = false;
        this.fri_4to6pm = false;
        this.fri_6to8pm = false;
        this.fri_8to10pm = false;
      }
    }
    else if(this.day == "/saturday"){
      if(this.sat_all == true){
        this.sat_8to10am = true;
        this.sat_10to12am = true;
        this.sat_12to2pm = true;
        this.sat_2to4pm = true;
        this.sat_4to6pm = true;
        this.sat_6to8pm = true;
        this.sat_8to10pm = true;
      }
      else{
        this.sat_8to10am = false;
        this.sat_10to12am = false;
        this.sat_12to2pm = false;
        this.sat_2to4pm = false;
        this.sat_4to6pm = false;
        this.sat_6to8pm = false;
        this.sat_8to10pm = false;
      }
    }
    else if(this.day == "/sunday"){
      if(this.sun_all == true){
        this.sun_8to10am = true;
        this.sun_10to12am = true;
        this.sun_12to2pm = true;
        this.sun_2to4pm = true;
        this.sun_4to6pm = true;
        this.sun_6to8pm = true;
        this.sun_8to10pm = true;
      }
      else{
        this.sun_8to10am = false;
        this.sun_10to12am = false;
        this.sun_12to2pm = false;
        this.sun_2to4pm = false;
        this.sun_4to6pm = false;
        this.sun_6to8pm = false;
        this.sun_8to10pm = false;
      }
    }
  }

  changeStatus(time_status: any,day:any){
    console.log("day selected="+day);
    if(time_status == "time_8to10am_arg"){
      console.log(day+" 8 to 10 am");
        if(day == "/monday"){
          this.updateOnFirebase('time_8to10am_arg',this.mon_8to10am,day);
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_8to10am_arg',this.tues_8to10am,day);
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_8to10am_arg',this.wed_8to10am,day);
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_8to10am_arg',this.thu_8to10am,day);
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_8to10am_arg',this.fri_8to10am,day);
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_8to10am_arg',this.sat_8to10am,day);
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_8to10am_arg',this.sun_8to10am,day);
        }
    }
    else if(time_status == "time_10to12am_arg"){
      console.log(day+" 10 to 12 am");
        if(day == "/monday"){
          this.updateOnFirebase('time_10to12am_arg',this.mon_10to12am,day);          
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_10to12am_arg',this.tues_10to12am,day);         
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_10to12am_arg',this.wed_10to12am,day);         
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_10to12am_arg',this.thu_10to12am,day);         
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_10to12am_arg',this.fri_10to12am,day);         
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_10to12am_arg',this.sat_10to12am,day);         
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_10to12am_arg',this.sun_10to12am,day);         
        }
    }
    else if(time_status == "time_12to2pm_arg"){
      console.log(day+" 12 to 2 pm");
        if(day == "/monday"){
          this.updateOnFirebase('time_12to2pm_arg',this.mon_12to2pm,day);                    
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_12to2pm_arg',this.tues_12to2pm,day);                   
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_12to2pm_arg',this.wed_12to2pm,day);                   
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_12to2pm_arg',this.thu_12to2pm,day);                   
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_12to2pm_arg',this.fri_12to2pm,day);                   
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_12to2pm_arg',this.sat_12to2pm,day);                   
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_12to2pm_arg',this.sun_12to2pm,day);                   
        }
    }
    else if(time_status == "time_2to4pm_arg"){
      console.log(day+" 2 to 4 pm");
        if(day == "/monday"){
          this.updateOnFirebase('time_2to4pm_arg',this.mon_2to4pm,day);
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_2to4pm_arg',this.tues_2to4pm,day);          
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_2to4pm_arg',this.wed_2to4pm,day);          
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_2to4pm_arg',this.thu_2to4pm,day);          
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_2to4pm_arg',this.fri_2to4pm,day);          
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_2to4pm_arg',this.sat_2to4pm,day);          
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_2to4pm_arg',this.sun_2to4pm,day);          
        }
    }
    else if(time_status == "time_4to6pm_arg"){
      console.log(day+" 4 to 6 pm");
        if(day == "/monday"){
          this.updateOnFirebase('time_4to6pm_arg',this.mon_4to6pm,day);
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_4to6pm_arg',this.tues_4to6pm,day);          
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_4to6pm_arg',this.wed_4to6pm,day);          
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_4to6pm_arg',this.thu_4to6pm,day);          
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_4to6pm_arg',this.fri_4to6pm,day);          
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_4to6pm_arg',this.sat_4to6pm,day);          
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_4to6pm_arg',this.sun_4to6pm,day);          
        }
    }
    else if(time_status == "time_6to8pm_arg"){
      console.log(day+" 6 to 8 pm");
        if(day == "/monday"){
          this.updateOnFirebase('time_6to8pm_arg',this.mon_6to8pm,day);
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_6to8pm_arg',this.tues_6to8pm,day);          
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_6to8pm_arg',this.wed_6to8pm,day);          
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_6to8pm_arg',this.thu_6to8pm,day);          
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_6to8pm_arg',this.fri_6to8pm,day);          
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_6to8pm_arg',this.sat_6to8pm,day);          
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_6to8pm_arg',this.sun_6to8pm,day);          
        }
    }
    else if(time_status == "time_8to10pm_arg"){
      console.log(day+" 8 to 10 pm");
        if(day == "/monday"){
          this.updateOnFirebase('time_8to10pm_arg',this.mon_8to10pm,day);
        }
        else if(day == "/tuesday"){
          this.updateOnFirebase('time_8to10pm_arg',this.tues_8to10pm,day);          
        }
        else if(day == "/wednesday"){
          this.updateOnFirebase('time_8to10pm_arg',this.wed_8to10pm,day);          
        }
        else if(day == "/thursday"){
          this.updateOnFirebase('time_8to10pm_arg',this.thu_8to10pm,day);          
        }
        else if(day == "/friday"){
          this.updateOnFirebase('time_8to10pm_arg',this.fri_8to10pm,day);          
        }
        else if(day == "/saturday"){
          this.updateOnFirebase('time_8to10pm_arg',this.sat_8to10pm,day);          
        }
        else if(day == "/sunday"){
          this.updateOnFirebase('time_8to10pm_arg',this.sun_8to10pm,day);          
        }
    }
  }
  
  updateOnFirebase(time_key: any, time_val: any,day:any){
    //console.log(time_key);
    if(time_key == "time_8to10am_arg"){
      console.log("inside fs update"+day);
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_8to10am : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_10to12am_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_10to12am : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_12to2pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_12to2pm : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_2to4pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_2to4pm : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_4to6pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_4to6pm : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_6to8pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_6to8pm : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(time_key == "time_8to10pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection(`${day}`).doc('time').update(
        {
        time_8to10pm : time_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
  }

  loadFromFirestoreMonday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootMonData.push({
          time_8to10am:doc.data().time_8to10am,
          time_10to12am:doc.data().time_10to12am,
          time_12to2pm : doc.data().time_12to2pm,
          time_2to4pm :doc.data().time_2to4pm,
          time_4to6pm : doc.data().time_4to6pm,
          time_6to8pm : doc.data().time_6to8pm,
          time_8to10pm : doc.data().time_8to10pm
        })
        this.mon_8to10am = doc.data().time_8to10am;
        this.mon_10to12am = doc.data().time_10to12am;
        this.mon_12to2pm = doc.data().time_12to2pm;
        this.mon_2to4pm = doc.data().time_2to4pm;
        this.mon_4to6pm = doc.data().time_4to6pm;
        this.mon_6to8pm = doc.data().time_6to8pm;
        this.mon_8to10pm = doc.data().time_8to10pm;
      });
      })
      console.log(this.changFootMonData);
      setTimeout(() => {
        console.log("value="+this.mon_8to10am);      
        if(this.mon_8to10am == undefined){
          console.log("No Internet Connection");
          this.presentToast();
          this.navCtl.navigateForward('/footballAdmin');
        }      
    }, 4000);
  }

  loadFromFirestoreTuesday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/tuesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootTuesData.push({
          time_8to10am:doc.data().time_8to10am,
          time_10to12am:doc.data().time_10to12am,
          time_12to2pm : doc.data().time_12to2pm,
          time_2to4pm :doc.data().time_2to4pm,
          time_4to6pm : doc.data().time_4to6pm,
          time_6to8pm : doc.data().time_6to8pm,
          time_8to10pm : doc.data().time_8to10pm
        })
        this.tues_8to10am = doc.data().time_8to10am;
        this.tues_10to12am = doc.data().time_10to12am;
        this.tues_12to2pm = doc.data().time_12to2pm;
        this.tues_2to4pm = doc.data().time_2to4pm;
        this.tues_4to6pm = doc.data().time_4to6pm;
        this.tues_6to8pm = doc.data().time_6to8pm;
        this.tues_8to10pm = doc.data().time_8to10pm;
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
            time_8to10am:doc.data().time_8to10am,
            time_10to12am:doc.data().time_10to12am,
            time_12to2pm : doc.data().time_12to2pm,
            time_2to4pm :doc.data().time_2to4pm,
            time_4to6pm : doc.data().time_4to6pm,
            time_6to8pm : doc.data().time_6to8pm,
            time_8to10pm : doc.data().time_8to10pm
          })
          this.wed_8to10am = doc.data().time_8to10am;
          this.wed_10to12am = doc.data().time_10to12am;
          this.wed_12to2pm = doc.data().time_12to2pm;
          this.wed_2to4pm = doc.data().time_2to4pm;
          this.wed_4to6pm = doc.data().time_4to6pm;
          this.wed_6to8pm = doc.data().time_6to8pm;
          this.wed_8to10pm = doc.data().time_8to10pm;
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
            time_8to10am:doc.data().time_8to10am,
            time_10to12am:doc.data().time_10to12am,
            time_12to2pm : doc.data().time_12to2pm,
            time_2to4pm :doc.data().time_2to4pm,
            time_4to6pm : doc.data().time_4to6pm,
            time_6to8pm : doc.data().time_6to8pm,
            time_8to10pm : doc.data().time_8to10pm
          })
          this.thu_8to10am = doc.data().time_8to10am;
          this.thu_10to12am = doc.data().time_10to12am;
          this.thu_12to2pm = doc.data().time_12to2pm;
          this.thu_2to4pm = doc.data().time_2to4pm;
          this.thu_4to6pm = doc.data().time_4to6pm;
          this.thu_6to8pm = doc.data().time_6to8pm;
          this.thu_8to10pm = doc.data().time_8to10pm;
        });
        })
        console.log(this.changFootThuData);
    }

    loadFromFirestoreFriday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/friday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootFriData.push({
            time_8to10am:doc.data().time_8to10am,
            time_10to12am:doc.data().time_10to12am,
            time_12to2pm : doc.data().time_12to2pm,
            time_2to4pm :doc.data().time_2to4pm,
            time_4to6pm : doc.data().time_4to6pm,
            time_6to8pm : doc.data().time_6to8pm,
            time_8to10pm : doc.data().time_8to10pm
          })
          this.fri_8to10am = doc.data().time_8to10am;
          this.fri_10to12am = doc.data().time_10to12am;
          this.fri_12to2pm = doc.data().time_12to2pm;
          this.fri_2to4pm = doc.data().time_2to4pm;
          this.fri_4to6pm = doc.data().time_4to6pm;
          this.fri_6to8pm = doc.data().time_6to8pm;
          this.fri_8to10pm = doc.data().time_8to10pm;
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
            time_8to10am:doc.data().time_8to10am,
            time_10to12am:doc.data().time_10to12am,
            time_12to2pm : doc.data().time_12to2pm,
            time_2to4pm :doc.data().time_2to4pm,
            time_4to6pm : doc.data().time_4to6pm,
            time_6to8pm : doc.data().time_6to8pm,
            time_8to10pm : doc.data().time_8to10pm
          })
          this.sat_8to10am = doc.data().time_8to10am;
          this.sat_10to12am = doc.data().time_10to12am;
          this.sat_12to2pm = doc.data().time_12to2pm;
          this.sat_2to4pm = doc.data().time_2to4pm;
          this.sat_4to6pm = doc.data().time_4to6pm;
          this.sat_6to8pm = doc.data().time_6to8pm;
          this.sat_8to10pm = doc.data().time_8to10pm;
        });
        })
        console.log(this.changFootSatData);
    }
    
    loadFromFirestoreSunday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/sunday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootSunData.push({
            time_8to10am:doc.data().time_8to10am,
            time_10to12am:doc.data().time_10to12am,
            time_12to2pm : doc.data().time_12to2pm,
            time_2to4pm :doc.data().time_2to4pm,
            time_4to6pm : doc.data().time_4to6pm,
            time_6to8pm : doc.data().time_6to8pm,
            time_8to10pm : doc.data().time_8to10pm
          })
          this.sun_8to10am = doc.data().time_8to10am;
          this.sun_10to12am = doc.data().time_10to12am;
          this.sun_12to2pm = doc.data().time_12to2pm;
          this.sun_2to4pm = doc.data().time_2to4pm;
          this.sun_4to6pm = doc.data().time_4to6pm;
          this.sun_6to8pm = doc.data().time_6to8pm;
          this.sun_8to10pm = doc.data().time_8to10pm;
        });
        })
        console.log(this.changFootSunData);
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'No Internet Connection or is too Weak!',
        duration: 2000
      });
      toast.present();
    }
}
