import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
tName:any;
noOfTeams:any;
teamArray: any[]=[];
team:string[]=[];
selectedFiles: FileList[]=[];
currentUpload: Upload[]=[];
private teamCount: number = 1;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public afs: AngularFirestore,
    public navCtrl: NavController,
    private menu:MenuController,
    public uploadServ: UploadpicService
  ) { 
    // this.team = this.formBuilder.group({
    //   teamname: ['', Validators.required],
    //   logo: [null,Validators.required]
    // });
    this.tName=this.route.snapshot.params['tname'];
    this.noOfTeams=this.route.snapshot.params['no'];
    for(let i=0;i<this.noOfTeams;i++)
    {
      this.teamArray.push(
        {
          index: i+1
        }
      )
      console.log(i+1);
    }
  
  }

  ngOnInit() {
    
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  detectFiles(event:any,i:any)
  {
    this.selectedFiles[i] = event.target.files;
  }
  // addControl(){
  //   if(this.teamCount-1==8)
  //   {
  //     console.log("Cannot add anymore teams");
  //   }
  //   this.teamCount++;
  //   this.team.addControl('team' + this.teamCount, new FormControl('', Validators.required));
  // }
  // removeControl(control){
  //   this.teamCount--;
  //   this.team.removeControl(control.key);
  // }
  async alertConfirm()
  {
    let alert= await this.alertCtrl.create(
      {
        header:'Warning!',
        message:'Did you fill all team details?',
        buttons:[
          {
            text:'No',
            role:'cancel'
          },
          {
            text:'Yes',
            handler:()=>
            {
              this.confirm();
            }
          }
        ]
      }
    )
    alert.present();
    
  }
  confirm()
  {
    let basePath="/leagueotourn";
    
   for(let i=0;i<this.noOfTeams;i++)
   {
    let file = this.selectedFiles[i].item(0)
    this.currentUpload[i] = new Upload(file);
     this.afs.collection(`${basePath}`).doc(`${this.tName}`).collection('teams').doc(`${this.team[i]}`).set(
       {
         teamname:this.team[i],
         p:'0',
         w:'0',
         l:'0',
         d:'0',
         gd:'0',
         pts:'0',
         pos:'0'
       }
     ).then(data=>
    {
      this.uploadServ.pushUploadTeam(this.currentUpload[i],basePath,this.team[i],this.tName);
    });
   }
   this.alertGeneral("Info","Successfully Added Teams");
   this.navCtrl.navigateForward('/footballAdmin');
  }
  skip()
  {

  }
  async alertGeneral(header:any,message:any)
  {
    let alert= await this.alertCtrl.create(
      {
        header:header,
        message:message,
        buttons:['Okay']
      }
    );
    alert.present();
  }
  goBack()
  {
    this.afs.collection('/leagueotourn').doc(`${this.tName}`).delete().then(()=>
  {
    console.log("Delete Successful");
    this.navCtrl.navigateBack('/newtourn');
  })
  }
}
