import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 playerObject= { 
'playerXName': "",
'playerOName': "",
'selectXAvatar': "",
'selectOAvatar': ""
}
  constructor() { }
 
  setData(nameX: any,nameO: any,X: any,O: any) {

    this.playerObject['playerXName'] = nameX;
    this.playerObject['playerOName'] = nameO;
    this.playerObject['selectXAvatar'] = X;
    this.playerObject['selectOAvatar'] = O;
  }

  getData() {
    return this.playerObject
  }

}