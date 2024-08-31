import { Component,ElementRef, viewChild } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationPlayer, style, animate } from '@angular/animations';
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
  {name:"Liu Feng",
    picture: "https://i.ibb.co/mzxBVHn/4.jpg",
    stars: [1,1,1,1],
     traits: ['Passive-aggressive', 'Dishonesty', 'Incivility', 'No empathy', 'Pessimism' ]
    },
    
    {name:"Patricia O'neal",
      picture: "https://i.ibb.co/hYCrvsc/Untitled.png",
      stars: [1,1,1],
      traits: ['Irresponsibility', 'Racism', 'Laziness', 'controlling', 'impulsiveness' ]
      },
      {name:"Dave Smith",
        picture: "https://i.ibb.co/CVfSy6K/2.png",
        stars: [1,1,1,1],
        traits: ['Lyiar', 'Rigid', 'No empathy', 'Dishonesty' ]
        },
        
        {name:"Carlos Sanchez",
          picture: "https://i.ibb.co/0VZnmtc/5.png",
          stars: [1,1,1,1,1],
          traits: ['Passive-aggressive', 'Egocentric', 'Gaslighting', 'Manipulative']
          },
          {name:"Ahmad Sultan",
            picture: "https://i.ibb.co/syKYjjc/3.png",
            stars: [1,1],
            traits: ['Laziness', 'Dishonesty', 'impulsiveness', 'Incivility', 'Racism']
            },

];

hider : boolean = true;
// Laziness      Dishonesty        Arrogance         impulsiveness         Irresponsibility           
//  Pessimism          Insensitivity to criticism          Egocentric         Lyiar   Manipulative          Gaslighting
// Rigid        No empathy         Passive-aggressive        Abusive   controlling          Incivility      Racism 

 


} 
