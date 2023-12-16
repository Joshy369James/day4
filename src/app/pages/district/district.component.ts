import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-district',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  district:any = [
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
      dis: "Kollam is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:3,
      title: "Alapuzha",
      image: "assets/images/ala.jpg",
      dis: "Alapuzha is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:4,
      title: "Ernamkulam",
      image: "assets/images/k2.jpg",
      dis: "Ernakulam is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },  
    {
      id:5,
      title: "Iduki",
      image: "assets/images/idu.jpg",
      dis: "idukkii is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
      
    },
    {
      id:6,
      title: "Kannur",
      image: "assets/images/kan.jpg",
      dis: "kannur is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      
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
 
 
}
 