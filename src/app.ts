import * as config from 'text!config.json';

export class App {

  constructor() {

    console.log(config);
    let text = config;
    let parsedObject = JSON.parse(config as any);
    console.log("zzz");
    console.log(config);

    //alert("ANWR" + answer);
    //alert(parsedObject.propname);
  }
}
