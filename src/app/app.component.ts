import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ramdev";
  officersList: any[] = [];
  constructor() {
    this.officersList.push({
      title: " President",
      name: "John Naylor",
      imgSrc: "assets/president.JPG"
    });
    this.officersList.push({
      title: "Vice President",
      name: "Mohammad Malik",
      imgSrc: "assets/vice-president.JPEG"
    });
    this.officersList.push({
      title: "Hackathon Czar",
      name: "Zephyr Headley",
      imgSrc: "assets/hackathon-czar.JPG"
    });
    this.officersList.push({
      title: "Webmaster",
      name: "Ali Tayeh",
      imgSrc: "assets/webmaster.JPG"
    });
    this.officersList.push({
      title: "Faculty Advisor",
      name: "Dr Kostadin Damevski",
      imgSrc: "assets/faculty-advisor.JPG"
    });
    this.officersList.push({
      title: "Marketing Officer",
      name: "Christopher Estes",
      imgSrc: "assets/marketing.JPG"
    });
    this.officersList.push({
      title: "Treasurer",
      name: "Vinie Patel",
      imgSrc: "assets/placeholder.JPEG"
    });
  }
}
