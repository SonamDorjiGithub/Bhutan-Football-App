import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../services/uploadpic/uploadpic.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImageResizer } from '@ionic-native/image-resizer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
const config={
  apiKey: "firebaseapikey######",
    authDomain: "bff-events-name.firebaseapp.com",
    databaseURL: "https://bff-app-xxx.firebaseio.com",
    projectId: "project-xxx",
    storageBucket: "xxxx-bucket.appspot.com",
    messagingSenderId: "123456789"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireStorageModule,
  AngularFireModule.initializeApp(config),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    InAppBrowser,
    DatePicker,
    UploadpicService,
    Geolocation,
    ImageResizer,
    PhotoViewer,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
