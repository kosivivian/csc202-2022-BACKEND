import { Injectable } from '@nestjs/common';

@Injectable() //this decorator allows AppService to be injected by AppController
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'Hello World!',title:'My Greeting App'}
  }
  getHome(): {} {
    return {title: 'Home Page'};
  }
  getAboutUs(): {} {
    return {title: 'About Us Page'};
  }
}
