import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  district=[
    {
      id:1,
      title: "Trivandram",
      image: "assets/images/thiru.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title: "kollam",
      image: "assets/images/kollam.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:3,
      title: "Alapuzha",
      image: "assets/images/ala.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:4,
      title: "Ernamkulam",
      image: "assets/images/k2.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },  
    {
      id:5,
      title: "Iduki",
      image: "assets/images/idu.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
      
    },
    {
      id:6,
      title: "Kannur",
      image: "assets/images/kan.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
    },
    {
      id:7,
      title: "Kottayam",
      image: "assets/images/ko.jpg",
      dis: "kottayam is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
    },
    {
      id:8,
      title: "Kasargod",
      image: "assets/images/ka.jpg",
      dis: "kasargod is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
    }
  ];
 

  
  constructor(public route:ActivatedRoute){ }
  ngOnInit(){
    this.getDetails();
  }
  id:any;
  data:any;
  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.district.filter(d => d.id == this.id)
  }

}
