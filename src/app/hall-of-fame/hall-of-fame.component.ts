import { Component } from '@angular/core';
import { twat } from './data.module';

@Component({
  selector: 'app-hall-of-fame',
  standalone: true,
  imports: [],
  templateUrl: './hall-of-fame.component.html',
  styleUrl: './hall-of-fame.component.css'
})
export class HallOfFameComponent {



array : twat[] =[
  {name:"Liu",
    picture: "https://i.ibb.co/mzxBVHn/4.jpg",
    stars: [1,1,1,1],
     traits: ['Passive-aggressive', 'Dishonesty', 'Incivility', 'No empathy', 'Pessimism' ]
    },
    
    {name:"Patricia",
      picture: "https://i.ibb.co/hYCrvsc/Untitled.png",
      stars: [1,1,1],
      traits: ['Irresponsibility', 'Racism', 'Laziness', 'controlling', 'impulsiveness' ]
      },
      {name:"Dave",
        picture: "https://i.ibb.co/CVfSy6K/2.png",
        stars: [1,1,1,1],
        traits: ['Lyiar', 'Rigid', 'No empathy', 'Dishonesty' ]
        },
        
        {name:"Carlos",
          picture: "https://i.ibb.co/0VZnmtc/5.png",
          stars: [1,1,1,1,1],
          traits: ['Passive-aggressive', 'Egocentric', 'Gaslighting', 'Manipulative']
          },
          {name:"Ahmad",
            picture: "https://i.ibb.co/syKYjjc/3.png",
            stars: [1,1],
            traits: ['Laziness', 'Dishonesty', 'impulsiveness', 'Incivility', 'Racism']
            },

];

// Laziness      Dishonesty        Arrogance         impulsiveness         Irresponsibility           
//  Pessimism          Insensitivity to criticism          Egocentric         Lyiar   Manipulative          Gaslighting
// Rigid        No empathy         Passive-aggressive        Abusive   controlling          Incivility      Racism 

 


} 
