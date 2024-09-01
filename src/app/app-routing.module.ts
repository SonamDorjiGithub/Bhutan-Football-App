import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'football', loadChildren: './football/football.module#FootballPageModule' },
  { path: 'footbalFullAdmin', loadChildren: './footbal-full-admin/footbal-full-admin.module#FootbalFullAdminPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'footbalFutsalAdmin', loadChildren: './footbal-futsal-admin/footbal-futsal-admin.module#FootbalFutsalAdminPageModule' },
  { path: 'football-changlimithang', loadChildren: './football-changlimithang/football-changlimithang.module#FootballChanglimithangPageModule' },
  { path: 'futsal-changlimithang', loadChildren: './futsal-changlimithang/futsal-changlimithang.module#FutsalChanglimithangPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'managetourn', loadChildren: './managetourn/managetourn.module#ManagetournPageModule' },
  { path: 'newtourn', loadChildren: './newtourn/newtourn.module#NewtournPageModule' },
  { path: 'teams/:tname/:no', loadChildren: './teams/teams.module#TeamsPageModule',runGuardsAndResolvers:'always' },
  { path: 'leagueotourn', loadChildren: './leagueotourn/leagueotourn.module#LeagueotournPageModule' },
  { path: 'ttable/:tname', loadChildren: './ttable/ttable.module#TtablePageModule',runGuardsAndResolvers:'always'  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'upcomingevents', loadChildren: './upcomingevents/upcomingevents.module#UpcomingeventsPageModule' },
  { path: 'football-changjiji', loadChildren: './football-changjiji/football-changjiji.module#FootballChangjijiPageModule' },
  { path: 'futsal-changjiji', loadChildren: './futsal-changjiji/futsal-changjiji.module#FutsalChangjijiPageModule' },
  { path: 'match', loadChildren: './match/match.module#MatchPageModule' },
  { path: 'teamplayerdetail/:matchteam1/:playerteam1/:matchtitle', loadChildren: './teamplayerdetail/teamplayerdetail.module#TeamplayerdetailPageModule' },
  { path: 'teamplayerdetail2/:matchteam2/:playerteam2/:matchtitle', loadChildren: './teamplayerdetail2/teamplayerdetail2.module#Teamplayerdetail2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
