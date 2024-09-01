import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { Upload } from '../../models/upload/upload';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { AlertController, NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-newtourn',
  templateUrl: './newtourn.page.html',
  styleUrls: ['./newtourn.page.scss'],
})
export class NewtournPage implements OnInit {
  tName:any;
  noOfTeams:any;
  startDate:any;
  endDate:any;
  noOTeams:any;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(
    public datepicker: DatePicker,
    public fs: AngularFirestore,
    public uploadServ: UploadpicService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  detectFiles(event:any)
  {
    this.selectedFiles = event.target.files;
  }

  pickSDate()
  {
    this.datepicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datepicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>
      {
        let dateArray=date.toString().split(' ');
        this.startDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3];
      }
      ,error=>
      {
        console.log("Error while fetching date: ,message: "+error);
      }
    )
  }

  pickEDate()
  {
    this.datepicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datepicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>
      {
        let dateArray=date.toString().split(' ');
        this.endDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3];
      }
      ,error=>
      {
        console.log("Error while fetching date: "+error);
      }
    )
  }
  addT()
  {
    if(this.noOfTeams>32)
    {
      this.teamExceed();
    }
    else{
      let basePath:string="/leagueotourn";
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.fs.collection(`${basePath}`).doc(`${this.tName}`).set(
      {
      tname : this.tName,
      startdate : this.startDate, 
      enddate : this.endDate,
      teams: this.noOfTeams
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtrl.navigateForward('/teams/'+this.tName+'/'+this.noOfTeams);
        console.log(data);
        this.uploadServ.pushUpload1(this.currentUpload,basePath,this.tName);
      }
      )
    }
    
  }
  async teamExceed()
  {
    let alert = await this.alertCtrl.create(
      {
        header:"Info",
        message:"Number of teams exceeded! *Max is 32",
        buttons:['OK']
      }
    )
    alert.present();
  }
  async alert(header:any, message:any)
  {
    let alert= await this.alertCtrl.create(
      {
        header: header,
        message: message,
        buttons:['OK']
      }
    )
    alert.present();
  }

  openMenu()
  {
    this.menuCtrl.toggle('myMenu');
  }

  goBack()
  {
    this.navCtrl.navigateForward('/managetourn');
  }
}
