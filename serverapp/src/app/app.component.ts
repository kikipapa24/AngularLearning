import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName:String;
  serverContent:String;
  serverList:Object[]=[];
  title = 'serverapp';


  addServer():void{
    this.serverList.push({'serverName':this.serverName,
                          'serverContent':this.serverContent,
                          'servertType':'server'});
  }

  addBluePrint():void{
    this.serverList.push({'serverName':this.serverName,
                          'serverContent':this.serverContent,
                          'servertType':'bp'});

                          console.log( this.serverList);
  }
}
