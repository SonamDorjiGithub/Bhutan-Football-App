import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-footbal-futsal-admin',
  templateUrl: './footbal-futsal-admin.page.html',
  styleUrls: ['./footbal-futsal-admin.page.scss'],
})
export class FootbalFutsalAdminPage implements OnInit {

  public date: string = new Date().toISOString();

  time_all: boolean = true;  
  time_8to9am: boolean;
  time_9to10am: boolean;
  time_10to11am: boolean;
  time_11to12pm: boolean;
  time_12to1pm: boolean;
  time_1to2pm: boolean;
  time_2to3pm: boolean;
  time_3to4pm: boolean;
  time_4to5pm: boolean;
  time_5to6pm: boolean;
  time_6to7pm: boolean;
  time_7to8pm: boolean;
  time_8to9pm: boolean;
  time_9to10pm: boolean;
  day:any;

  changFutsalMonData:any[]=[];  
  changFutsalTuesData:any[]=[];  
  changFutsalWedData:any[]=[];  
  changFutsalThuData:any[]=[];  
  changFutsalFriData:any[]=[];  
  changFutsalSatData:any[]=[]; 
  changFutsalSunData:any[]=[];  

  mon_all: boolean = true;    
  mon_8to9am: boolean;
  mon_9to10am: boolean;
  mon_10to11am: boolean;
  mon_11to12pm: boolean;
  mon_12to1pm: boolean;
  mon_1to2pm: boolean;
  mon_2to3pm: boolean;
  mon_3to4pm: boolean;
  mon_4to5pm: boolean;
  mon_5to6pm: boolean;
  mon_6to7pm: boolean;
  mon_7to8pm: boolean;
  mon_8to9pm: boolean;
  mon_9to10pm: boolean;

  tues_all: boolean = true;    
  tues_8to9am: boolean;
  tues_9to10am: boolean;
  tues_10to11am: boolean;
  tues_11to12pm: boolean;
  tues_12to1pm: boolean;
  tues_1to2pm: boolean;
  tues_2to3pm: boolean;
  tues_3to4pm: boolean;
  tues_4to5pm: boolean;
  tues_5to6pm: boolean;
  tues_6to7pm: boolean;
  tues_7to8pm: boolean;
  tues_8to9pm: boolean;
  tues_9to10pm: boolean;

  wed_all: boolean = true;    
  wed_8to9am: boolean;
  wed_9to10am: boolean;
  wed_10to11am: boolean;
  wed_11to12pm: boolean;
  wed_12to1pm: boolean;
  wed_1to2pm: boolean;
  wed_2to3pm: boolean;
  wed_3to4pm: boolean;
  wed_4to5pm: boolean;
  wed_5to6pm: boolean;
  wed_6to7pm: boolean;
  wed_7to8pm: boolean;
  wed_8to9pm: boolean;
  wed_9to10pm: boolean;

  thu_all: boolean = true;    
  thu_8to9am: boolean;
  thu_9to10am: boolean;
  thu_10to11am: boolean;
  thu_11to12pm: boolean;
  thu_12to1pm: boolean;
  thu_1to2pm: boolean;
  thu_2to3pm: boolean;
  thu_3to4pm: boolean;
  thu_4to5pm: boolean;
  thu_5to6pm: boolean;
  thu_6to7pm: boolean;
  thu_7to8pm: boolean;
  thu_8to9pm: boolean;
  thu_9to10pm: boolean;

  fri_all: boolean = true;    
  fri_8to9am: boolean;
  fri_9to10am: boolean;
  fri_10to11am: boolean;
  fri_11to12pm: boolean;
  fri_12to1pm: boolean;
  fri_1to2pm: boolean;
  fri_2to3pm: boolean;
  fri_3to4pm: boolean;
  fri_4to5pm: boolean;
  fri_5to6pm: boolean;
  fri_6to7pm: boolean;
  fri_7to8pm: boolean;
  fri_8to9pm: boolean;
  fri_9to10pm: boolean;

  sat_all: boolean = true;    
  sat_8to9am: boolean;
  sat_9to10am: boolean;
  sat_10to11am: boolean;
  sat_11to12pm: boolean;
  sat_12to1pm: boolean;
  sat_1to2pm: boolean;
  sat_2to3pm: boolean;
  sat_3to4pm: boolean;
  sat_4to5pm: boolean;
  sat_5to6pm: boolean;
  sat_6to7pm: boolean;
  sat_7to8pm: boolean;
  sat_8to9pm: boolean;
  sat_9to10pm: boolean;

  sun_all: boolean = true;    
  sun_8to9am: boolean;
  sun_9to10am: boolean;
  sun_10to11am: boolean;
  sun_11to12pm: boolean;
  sun_12to1pm: boolean;
  sun_1to2pm: boolean;
  sun_2to3pm: boolean;
  sun_3to4pm: boolean;
  sun_4to5pm: boolean;
  sun_5to6pm: boolean;
  sun_6to7pm: boolean;
  sun_7to8pm: boolean;
  sun_8to9pm: boolean;
  sun_9to10pm: boolean;

  constructor(
    private fs : AngularFirestore,
    private menu: MenuController,
    public alertController: AlertController,
    private navCtl : NavController,
    public toastController: ToastController
  ) { 
    this.loadFromFirestoreMonday();
    this.loadFromFirestoreTuesday();
    this.loadFromFirestoreWednesday();
    this.loadFromFirestoreThursday();
    this.loadFromFirestoreFriday();
    this.loadFromFirestoreSaturday();
    this.loadFromFirestoreSunday();

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
          this.mon_8to9am = true;
          this.mon_9to10am = true;
          this.mon_10to11am = true;
          this.mon_11to12pm = true;
          this.mon_12to1pm = true;
          this.mon_1to2pm = true;
          this.mon_2to3pm = true;
          this.mon_3to4pm = true;
          this.mon_4to5pm = true;
          this.mon_5to6pm = true;
          this.mon_6to7pm = true;
          this.mon_7to8pm = true;
          this.mon_8to9pm = true;
          this.mon_9to10pm = true;
        }
        else{
          this.mon_8to9am = false;
          this.mon_9to10am = false;
          this.mon_10to11am = false;
          this.mon_11to12pm = false;
          this.mon_12to1pm = false;
          this.mon_1to2pm = false;
          this.mon_2to3pm = false;
          this.mon_3to4pm = false;
          this.mon_4to5pm = false;
          this.mon_5to6pm = false;
          this.mon_6to7pm = false;
          this.mon_7to8pm = false;
          this.mon_8to9pm = false;
          this.mon_9to10pm = false;
        }
      }  
     else if(this.day == "/tuesday"){
        if(this.tues_all == true){
          this.tues_8to9am = true;
          this.tues_9to10am = true;
          this.tues_10to11am = true;
          this.tues_11to12pm = true;
          this.tues_12to1pm = true;
          this.tues_1to2pm = true;
          this.tues_2to3pm = true;
          this.tues_3to4pm = true;
          this.tues_4to5pm = true;
          this.tues_5to6pm = true;
          this.tues_6to7pm = true;
          this.tues_7to8pm = true;
          this.tues_8to9pm = true;
          this.tues_9to10pm = true;
        }
        else{
          this.tues_8to9am = false;
          this.tues_9to10am = false;
          this.tues_10to11am = false;
          this.tues_11to12pm = false;
          this.tues_12to1pm = false;
          this.tues_1to2pm = false;
          this.tues_2to3pm = false;
          this.tues_3to4pm = false;
          this.tues_4to5pm = false;
          this.tues_5to6pm = false;
          this.tues_6to7pm = false;
          this.tues_7to8pm = false;
          this.tues_8to9pm = false;
          this.tues_9to10pm = false;
        }
      } 
      else if(this.day == "/wednesday"){
        if(this.wed_all == true){
          this.wed_8to9am = true;
          this.wed_9to10am = true;
          this.wed_10to11am = true;
          this.wed_11to12pm = true;
          this.wed_12to1pm = true;
          this.wed_1to2pm = true;
          this.wed_2to3pm = true;
          this.wed_3to4pm = true;
          this.wed_4to5pm = true;
          this.wed_5to6pm = true;
          this.wed_6to7pm = true;
          this.wed_7to8pm = true;
          this.wed_8to9pm = true;
          this.wed_9to10pm = true;
        }
        else{
          this.wed_8to9am = false;
          this.wed_9to10am = false;
          this.wed_10to11am = false;
          this.wed_11to12pm = false;
          this.wed_12to1pm = false;
          this.wed_1to2pm = false;
          this.wed_2to3pm = false;
          this.wed_3to4pm = false;
          this.wed_4to5pm = false;
          this.wed_5to6pm = false;
          this.wed_6to7pm = false;
          this.wed_7to8pm = false;
          this.wed_8to9pm = false;
          this.wed_9to10pm = false;
        }
      }  
      else if(this.day == "/thursday"){
        if(this.thu_all == true){
          this.thu_8to9am = true;
          this.thu_9to10am = true;
          this.thu_10to11am = true;
          this.thu_11to12pm = true;
          this.thu_12to1pm = true;
          this.thu_1to2pm = true;
          this.thu_2to3pm = true;
          this.thu_3to4pm = true;
          this.thu_4to5pm = true;
          this.thu_5to6pm = true;
          this.thu_6to7pm = true;
          this.thu_7to8pm = true;
          this.thu_8to9pm = true;
          this.thu_9to10pm = true;
        }
        else{
          this.thu_8to9am = false;
          this.thu_9to10am = false;
          this.thu_10to11am = false;
          this.thu_11to12pm = false;
          this.thu_12to1pm = false;
          this.thu_1to2pm = false;
          this.thu_2to3pm = false;
          this.thu_3to4pm = false;
          this.thu_4to5pm = false;
          this.thu_5to6pm = false;
          this.thu_6to7pm = false;
          this.thu_7to8pm = false;
          this.thu_8to9pm = false;
          this.thu_9to10pm = false;
        }
      }  
      else if(this.day == "/friday"){
        if(this.fri_all == true){
          this.fri_8to9am = true;
          this.fri_9to10am = true;
          this.fri_10to11am = true;
          this.fri_11to12pm = true;
          this.fri_12to1pm = true;
          this.fri_1to2pm = true;
          this.fri_2to3pm = true;
          this.fri_3to4pm = true;
          this.fri_4to5pm = true;
          this.fri_5to6pm = true;
          this.fri_6to7pm = true;
          this.fri_7to8pm = true;
          this.fri_8to9pm = true;
          this.fri_9to10pm = true;
        }
        else{
          this.fri_8to9am = false;
          this.fri_9to10am = false;
          this.fri_10to11am = false;
          this.fri_11to12pm = false;
          this.fri_12to1pm = false;
          this.fri_1to2pm = false;
          this.fri_2to3pm = false;
          this.fri_3to4pm = false;
          this.fri_4to5pm = false;
          this.fri_5to6pm = false;
          this.fri_6to7pm = false;
          this.fri_7to8pm = false;
          this.fri_8to9pm = false;
          this.fri_9to10pm = false;
        }
      }  
      else if(this.day == "/saturday"){
        if(this.sat_all == true){
          this.sat_8to9am = true;
          this.sat_9to10am = true;
          this.sat_10to11am = true;
          this.sat_11to12pm = true;
          this.sat_12to1pm = true;
          this.sat_1to2pm = true;
          this.sat_2to3pm = true;
          this.sat_3to4pm = true;
          this.sat_4to5pm = true;
          this.sat_5to6pm = true;
          this.sat_6to7pm = true;
          this.sat_7to8pm = true;
          this.sat_8to9pm = true;
          this.sat_9to10pm = true;
        }
        else{
          this.sat_8to9am = false;
          this.sat_9to10am = false;
          this.sat_10to11am = false;
          this.sat_11to12pm = false;
          this.sat_12to1pm = false;
          this.sat_1to2pm = false;
          this.sat_2to3pm = false;
          this.sat_3to4pm = false;
          this.sat_4to5pm = false;
          this.sat_5to6pm = false;
          this.sat_6to7pm = false;
          this.sat_7to8pm = false;
          this.sat_8to9pm = false;
          this.sat_9to10pm = false;
        }
      }
      else if(this.day == "/sunday"){
        if(this.sun_all == true){
          this.sun_8to9am = true;
          this.sun_9to10am = true;
          this.sun_10to11am = true;
          this.sun_11to12pm = true;
          this.sun_12to1pm = true;
          this.sun_1to2pm = true;
          this.sun_2to3pm = true;
          this.sun_3to4pm = true;
          this.sun_4to5pm = true;
          this.sun_5to6pm = true;
          this.sun_6to7pm = true;
          this.sun_7to8pm = true;
          this.sun_8to9pm = true;
          this.sun_9to10pm = true;
        }
        else{
          this.sun_8to9am = false;
          this.sun_9to10am = false;
          this.sun_10to11am = false;
          this.sun_11to12pm = false;
          this.sun_12to1pm = false;
          this.sun_1to2pm = false;
          this.sun_2to3pm = false;
          this.sun_3to4pm = false;
          this.sun_4to5pm = false;
          this.sun_5to6pm = false;
          this.sun_6to7pm = false;
          this.sun_7to8pm = false;
          this.sun_8to9pm = false;
          this.sun_9to10pm = false;
        }
      }  
    }

    changeStatus(time_status: any,day:any){
      console.log("day selected="+day);
      if(time_status == "time_8to9am_arg"){
        console.log(day+" 8 to 9 am");
          if(day == "/monday"){
            this.updateOnFirebase('time_8to9am_arg',this.mon_8to9am,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_8to9am_arg',this.tues_8to9am,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_8to9am_arg',this.wed_8to9am,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_8to9am_arg',this.thu_8to9am,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_8to9am_arg',this.fri_8to9am,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_8to9am_arg',this.sat_8to9am,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_8to9am_arg',this.sun_8to9am,day);
          }
      }
      else if(time_status == "time_9to10am_arg"){
        console.log(day+" 9 to 10 am");
          if(day == "/monday"){
            this.updateOnFirebase('time_9to10am_arg',this.mon_9to10am,day);          
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_9to10am_arg',this.tues_9to10am,day);          
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_9to10am_arg',this.wed_9to10am,day);          
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_9to10am_arg',this.thu_9to10am,day);          
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_9to10am_arg',this.fri_9to10am,day);          
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_9to10am_arg',this.sat_9to10am,day);          
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_9to10am_arg',this.sun_9to10am,day);          
          }
      }
      else if(time_status == "time_10to11am_arg"){
        console.log(day+" 10 to 11 am");
          if(day == "/monday"){
            this.updateOnFirebase('time_10to11am_arg',this.mon_10to11am,day);                    
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_10to11am_arg',this.tues_10to11am,day);                    
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_10to11am_arg',this.wed_10to11am,day);                    
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_10to11am_arg',this.thu_10to11am,day);                    
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_10to11am_arg',this.fri_10to11am,day);                    
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_10to11am_arg',this.sat_10to11am,day);                    
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_10to11am_arg',this.sun_10to11am,day);                    
          }
      }
      else if(time_status == "time_11to12pm_arg"){
        console.log(day+" 11 to 12 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_11to12pm_arg',this.mon_11to12pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_11to12pm_arg',this.tues_11to12pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_11to12pm_arg',this.wed_11to12pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_11to12pm_arg',this.thu_11to12pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_11to12pm_arg',this.fri_11to12pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_11to12pm_arg',this.sat_11to12pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_11to12pm_arg',this.sun_11to12pm,day);
          }
      }
      else if(time_status == "time_12to1pm_arg"){
        console.log(day+" 12 to 1 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_12to1pm_arg',this.mon_12to1pm,day);
          }
         else if(day == "/tuesday"){
          this.updateOnFirebase('time_12to1pm_arg',this.tues_12to1pm,day);
         }
         else if(day == "/wednesday"){
          this.updateOnFirebase('time_12to1pm_arg',this.wed_12to1pm,day);
         }
         else if(day == "/thursday"){
          this.updateOnFirebase('time_12to1pm_arg',this.thu_12to1pm,day);
         }
         else if(day == "/friday"){
          this.updateOnFirebase('time_12to1pm_arg',this.fri_12to1pm,day);
         }
         else if(day == "/saturday"){
          this.updateOnFirebase('time_12to1pm_arg',this.sat_12to1pm,day);
         }
         else if(day == "/sunday"){
          this.updateOnFirebase('time_12to1pm_arg',this.sun_12to1pm,day);
         }
      }
      else if(time_status == "time_1to2pm_arg"){
        console.log(day+" 1 to 2 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_1to2pm_arg',this.mon_1to2pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_1to2pm_arg',this.tues_1to2pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_1to2pm_arg',this.wed_1to2pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_1to2pm_arg',this.thu_1to2pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_1to2pm_arg',this.fri_1to2pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_1to2pm_arg',this.sat_1to2pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_1to2pm_arg',this.sun_1to2pm,day);
          }
      }
      else if(time_status == "time_1to2pm_arg"){
        console.log(day+" 1 to 2 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_1to2pm_arg',this.mon_1to2pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_1to2pm_arg',this.tues_1to2pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_1to2pm_arg',this.wed_1to2pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_1to2pm_arg',this.thu_1to2pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_1to2pm_arg',this.fri_1to2pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_1to2pm_arg',this.sat_1to2pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_1to2pm_arg',this.sun_1to2pm,day);
          }
      }
      else if(time_status == "time_2to3pm_arg"){
        console.log(day+" 2 to 3 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_2to3pm_arg',this.mon_2to3pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_2to3pm_arg',this.tues_2to3pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_2to3pm_arg',this.wed_2to3pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_2to3pm_arg',this.thu_2to3pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_2to3pm_arg',this.fri_2to3pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_2to3pm_arg',this.sat_2to3pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_2to3pm_arg',this.sun_2to3pm,day);
          }
      }
      else if(time_status == "time_3to4pm_arg"){
        console.log(day+" 3 to 4 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_3to4pm_arg',this.mon_3to4pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_3to4pm_arg',this.tues_3to4pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_3to4pm_arg',this.wed_3to4pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_3to4pm_arg',this.thu_3to4pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_3to4pm_arg',this.fri_3to4pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_3to4pm_arg',this.sat_3to4pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_3to4pm_arg',this.sun_3to4pm,day);
          }
      }
      else if(time_status == "time_4to5pm_arg"){
        console.log(day+" 4 to 5 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_4to5pm_arg',this.mon_4to5pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_4to5pm_arg',this.tues_4to5pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_4to5pm_arg',this.wed_4to5pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_4to5pm_arg',this.thu_4to5pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_4to5pm_arg',this.fri_4to5pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_4to5pm_arg',this.sat_4to5pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_4to5pm_arg',this.sun_4to5pm,day);
          }
      }
      else if(time_status == "time_5to6pm_arg"){
        console.log(day+" 5 to 6 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_5to6pm_arg',this.mon_5to6pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_5to6pm_arg',this.tues_5to6pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_5to6pm_arg',this.wed_5to6pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_5to6pm_arg',this.thu_5to6pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_5to6pm_arg',this.fri_5to6pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_5to6pm_arg',this.sat_5to6pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_5to6pm_arg',this.sun_5to6pm,day);
          }
      }
      else if(time_status == "time_6to7pm_arg"){
        console.log(day+" 6 to 7 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_6to7pm_arg',this.mon_6to7pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_6to7pm_arg',this.tues_6to7pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_6to7pm_arg',this.wed_6to7pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_6to7pm_arg',this.thu_6to7pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_6to7pm_arg',this.fri_6to7pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_6to7pm_arg',this.sat_6to7pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_6to7pm_arg',this.sun_6to7pm,day);
          }
      }
      else if(time_status == "time_7to8pm_arg"){
        console.log(day+" 7 to 8 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_7to8pm_arg',this.mon_7to8pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_7to8pm_arg',this.tues_7to8pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_7to8pm_arg',this.wed_7to8pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_7to8pm_arg',this.thu_7to8pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_7to8pm_arg',this.fri_7to8pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_7to8pm_arg',this.sat_7to8pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_7to8pm_arg',this.sun_7to8pm,day);
          }
      }
      else if(time_status == "time_8to9pm_arg"){
        console.log(day+" 8 to 9 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_8to9pm_arg',this.mon_8to9pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_8to9pm_arg',this.tues_8to9pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_8to9pm_arg',this.wed_8to9pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_8to9pm_arg',this.thu_8to9pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_8to9pm_arg',this.fri_8to9pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_8to9pm_arg',this.sat_8to9pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_8to9pm_arg',this.sun_8to9pm,day);
          }
      }
      else if(time_status == "time_9to10pm_arg"){
        console.log(day+" 9 to 10 pm");
          if(day == "/monday"){
            this.updateOnFirebase('time_9to10pm_arg',this.mon_9to10pm,day);
          }
          else if(day == "/tuesday"){
            this.updateOnFirebase('time_9to10pm_arg',this.tues_9to10pm,day);
          }
          else if(day == "/wednesday"){
            this.updateOnFirebase('time_9to10pm_arg',this.wed_9to10pm,day);
          }
          else if(day == "/thursday"){
            this.updateOnFirebase('time_9to10pm_arg',this.thu_9to10pm,day);
          }
          else if(day == "/friday"){
            this.updateOnFirebase('time_9to10pm_arg',this.fri_9to10pm,day);
          }
          else if(day == "/saturday"){
            this.updateOnFirebase('time_9to10pm_arg',this.sat_9to10pm,day);
          }
          else if(day == "/sunday"){
            this.updateOnFirebase('time_9to10pm_arg',this.sun_9to10pm,day);
          }
      }
    }
  
    updateOnFirebase(time_key: any, time_val: any,day:any){
      //console.log(time_key);
      if(time_key == "time_8to9am_arg"){
        console.log("inside fs update"+day);
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_8to9am : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_9to10am_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_9to10am : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_10to11am_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_10to11am : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_11to12pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_11to12pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_12to1pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_12to1pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_1to2pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_1to2pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_2to3pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_2to3pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_3to4pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_3to4pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_4to5pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_4to5pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_5to6pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_5to6pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_6to7pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_6to7pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_7to8pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_7to8pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_8to9pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_8to9pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
      else if(time_key == "time_9to10pm_arg"){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection(`${day}`).doc('time').update(
          {
          time_9to10pm : time_val,
        }
        ).then(data=>
          {
            console.log(data);
          }
          )
      }
    }

    loadFromFirestoreMonday(){
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/monday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {

            this.changFutsalMonData.push({
              time_8to9am:doc.data().time_8to9am,
              time_9to10am:doc.data().time_9to10am,
              time_10to11am : doc.data().time_10to11pm,
              time_11to12pm :doc.data().time_11to12pm,
              time_12to1pm : doc.data().time_12to1pm,
              time_1to2pm : doc.data().time_1to2pm,
              time_2to3pm : doc.data().time_2to3pm,
              time_3to4pm : doc.data().time_3to4pm,
              time_4to5pm : doc.data().time_4to5pm,
              time_5to6pm : doc.data().time_5to6pm,
              time_6to7pm : doc.data().time_6to7pm,
              time_7to8pm : doc.data().time_7to8pm,
              time_8to9pm : doc.data().time_8to9pm,
              time_9to10pm : doc.data().time_9to10pm
            })
            this.mon_8to9am = doc.data().time_8to9am;
            this.mon_9to10am = doc.data().time_9to10am;
            this.mon_10to11am = doc.data().time_10to11am;
            this.mon_11to12pm = doc.data().time_11to12pm;
            this.mon_12to1pm = doc.data().time_12to1pm;
            this.mon_1to2pm = doc.data().time_1to2pm;
            this.mon_2to3pm = doc.data().time_2to3pm;
            this.mon_3to4pm = doc.data().time_3to4pm;
            this.mon_4to5pm = doc.data().time_4to5pm;
            this.mon_5to6pm = doc.data().time_5to6pm;
            this.mon_6to7pm = doc.data().time_6to7pm;
            this.mon_7to8pm = doc.data().time_7to8pm;
            this.mon_8to9pm = doc.data().time_8to9pm;
            this.mon_9to10pm = doc.data().time_9to10pm;
          });
          })
          setTimeout(() => {
            console.log("value="+this.mon_10to11am);      
            if(this.mon_10to11am == undefined){
              console.log("No Internet Connection");
              this.presentToast();
              this.navCtl.navigateForward('/footballAdmin');
            }      
        }, 4000);
      
    }
    

    loadFromFirestoreTuesday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/tuesday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalTuesData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.tues_8to9am = doc.data().time_8to9am;
          this.tues_9to10am = doc.data().time_9to10am;
          this.tues_10to11am = doc.data().time_10to11am;
          this.tues_11to12pm = doc.data().time_11to12pm;
          this.tues_12to1pm = doc.data().time_12to1pm;
          this.tues_1to2pm = doc.data().time_1to2pm;
          this.tues_2to3pm = doc.data().time_2to3pm;
          this.tues_3to4pm = doc.data().time_3to4pm;
          this.tues_4to5pm = doc.data().time_4to5pm;
          this.tues_5to6pm = doc.data().time_5to6pm;
          this.tues_6to7pm = doc.data().time_6to7pm;
          this.tues_7to8pm = doc.data().time_7to8pm;
          this.tues_8to9pm = doc.data().time_8to9pm;
          this.tues_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalTuesData);
    }

    loadFromFirestoreWednesday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/wednesday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalWedData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.wed_8to9am = doc.data().time_8to9am;
          this.wed_9to10am = doc.data().time_9to10am;
          this.wed_10to11am = doc.data().time_10to11am;
          this.wed_11to12pm = doc.data().time_11to12pm;
          this.wed_12to1pm = doc.data().time_12to1pm;
          this.wed_1to2pm = doc.data().time_1to2pm;
          this.wed_2to3pm = doc.data().time_2to3pm;
          this.wed_3to4pm = doc.data().time_3to4pm;
          this.wed_4to5pm = doc.data().time_4to5pm;
          this.wed_5to6pm = doc.data().time_5to6pm;
          this.wed_6to7pm = doc.data().time_6to7pm;
          this.wed_7to8pm = doc.data().time_7to8pm;
          this.wed_8to9pm = doc.data().time_8to9pm;
          this.wed_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalWedData);
    }

    loadFromFirestoreThursday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/thursday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalThuData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.thu_8to9am = doc.data().time_8to9am;
          this.thu_9to10am = doc.data().time_9to10am;
          this.thu_10to11am = doc.data().time_10to11am;
          this.thu_11to12pm = doc.data().time_11to12pm;
          this.thu_12to1pm = doc.data().time_12to1pm;
          this.thu_1to2pm = doc.data().time_1to2pm;
          this.thu_2to3pm = doc.data().time_2to3pm;
          this.thu_3to4pm = doc.data().time_3to4pm;
          this.thu_4to5pm = doc.data().time_4to5pm;
          this.thu_5to6pm = doc.data().time_5to6pm;
          this.thu_6to7pm = doc.data().time_6to7pm;
          this.thu_7to8pm = doc.data().time_7to8pm;
          this.thu_8to9pm = doc.data().time_8to9pm;
          this.thu_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalThuData);
    }

    loadFromFirestoreFriday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/friday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalFriData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.fri_8to9am = doc.data().time_8to9am;
          this.fri_9to10am = doc.data().time_9to10am;
          this.fri_10to11am = doc.data().time_10to11am;
          this.fri_11to12pm = doc.data().time_11to12pm;
          this.fri_12to1pm = doc.data().time_12to1pm;
          this.fri_1to2pm = doc.data().time_1to2pm;
          this.fri_2to3pm = doc.data().time_2to3pm;
          this.fri_3to4pm = doc.data().time_3to4pm;
          this.fri_4to5pm = doc.data().time_4to5pm;
          this.fri_5to6pm = doc.data().time_5to6pm;
          this.fri_6to7pm = doc.data().time_6to7pm;
          this.fri_7to8pm = doc.data().time_7to8pm;
          this.fri_8to9pm = doc.data().time_8to9pm;
          this.fri_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalFriData);
    }

    loadFromFirestoreSaturday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/saturday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalSatData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.sat_8to9am = doc.data().time_8to9am;
          this.sat_9to10am = doc.data().time_9to10am;
          this.sat_10to11am = doc.data().time_10to11am;
          this.sat_11to12pm = doc.data().time_11to12pm;
          this.sat_12to1pm = doc.data().time_12to1pm;
          this.sat_1to2pm = doc.data().time_1to2pm;
          this.sat_2to3pm = doc.data().time_2to3pm;
          this.sat_3to4pm = doc.data().time_3to4pm;
          this.sat_4to5pm = doc.data().time_4to5pm;
          this.sat_5to6pm = doc.data().time_5to6pm;
          this.sat_6to7pm = doc.data().time_6to7pm;
          this.sat_7to8pm = doc.data().time_7to8pm;
          this.sat_8to9pm = doc.data().time_8to9pm;
          this.sat_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalSatData);
    }

    loadFromFirestoreSunday(){
      this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/sunday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFutsalSunData.push({
            time_8to9am:doc.data().time_8to9am,
            time_9to10am:doc.data().time_9to10am,
            time_10to11am : doc.data().time_10to11pm,
            time_11to12pm :doc.data().time_11to12pm,
            time_12to1pm : doc.data().time_12to1pm,
            time_1to2pm : doc.data().time_1to2pm,
            time_2to3pm : doc.data().time_2to3pm,
            time_3to4pm : doc.data().time_3to4pm,
            time_4to5pm : doc.data().time_4to5pm,
            time_5to6pm : doc.data().time_5to6pm,
            time_6to7pm : doc.data().time_6to7pm,
            time_7to8pm : doc.data().time_7to8pm,
            time_8to9pm : doc.data().time_8to9pm,
            time_9to10pm : doc.data().time_9to10pm
          })
          this.sun_8to9am = doc.data().time_8to9am;
          this.sun_9to10am = doc.data().time_9to10am;
          this.sun_10to11am = doc.data().time_10to11am;
          this.sun_11to12pm = doc.data().time_11to12pm;
          this.sun_12to1pm = doc.data().time_12to1pm;
          this.sun_1to2pm = doc.data().time_1to2pm;
          this.sun_2to3pm = doc.data().time_2to3pm;
          this.sun_3to4pm = doc.data().time_3to4pm;
          this.sun_4to5pm = doc.data().time_4to5pm;
          this.sun_5to6pm = doc.data().time_5to6pm;
          this.sun_6to7pm = doc.data().time_6to7pm;
          this.sun_7to8pm = doc.data().time_7to8pm;
          this.sun_8to9pm = doc.data().time_8to9pm;
          this.sun_9to10pm = doc.data().time_9to10pm;
        });
        })
        console.log(this.changFutsalSunData);
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'No Internet Connection or is too Weak!',
        duration: 2000
      });
      toast.present();
    }
}
