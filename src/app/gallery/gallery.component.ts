import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  gallery:IProduct[] = [
    {
      title: 'angular',
      description: 'angular boots',
      price: 20,
      img: '../../assets/images/products/boot-ang1.png'
    },
    {
      title: 'angular',
      description: 'angular boots',
      price: 15,
      img: '../../assets/images/products/boot-ang2.png'
    },
    {
      title: 'C#',
      description: 'C# Core',
      price: 23,
      img: '../../assets/images/products/boot-core1.png'
    },
    {
      title: 'C#',
      description: 'C# Core',
      price: 50,
      img: '../../assets/images/products/boot-core2.png'
    },
    {
      title: 'Redis',
      description: 'Redis im mermory DB',
      price: 100,
      img: '../../assets/images/products/boot-redis1.png'
    },
    {
      title: 'angular',
      description: 'angular boots',
      price: 20,
      img: '../../assets/images/products/boot-ang1.png'
    },
    {
      title: 'visual studio',
      description: 'Code glove',
      price: 20,
      img: '../../assets/images/products/glove-code1.png'
    },
    {
      title: 'visual studio',
      description: 'code glove',
      price: 20,
      img: '../../assets/images/products/glove-code2.png'
    },
    {
      title: 'React',
      description: 'React glove',
      price: 10,
      img: '../../assets/images/products/glove-react1.png'
    },
    {
      title: 'C#',
      description: 'C# Hat',
      price: 20,
      img: '../../assets/images/products/hat-core1.png'
    },
    {
      title: 'angular',
      description: 'angular boots',
      price: 20,
      img: '../../assets/images/products/boot-ang1.png'
    },
    {
      title: 'angular',
      description: 'angular boots',
      price: 15,
      img: '../../assets/images/products/boot-ang2.png'
    },
    {
      title: 'C#',
      description: 'C# Core',
      price: 23,
      img: '../../assets/images/products/boot-core1.png'
    },
    {
      title: 'C#',
      description: 'C# Core',
      price: 50,
      img: '../../assets/images/products/boot-core2.png'
    },
    {
      title: 'Redis',
      description: 'Redis im mermory DB',
      price: 100,
      img: '../../assets/images/products/boot-redis1.png'
    },
    {
      title: 'angular',
      description: 'angular boots',
      price: 20,
      img: '../../assets/images/products/boot-ang1.png'
    },
    {
      title: 'visual studio',
      description: 'Code glove',
      price: 20,
      img: '../../assets/images/products/glove-code1.png'
    },
    {
      title: 'visual studio',
      description: 'code glove',
      price: 20,
      img: '../../assets/images/products/glove-code2.png'
    },
    {
      title: 'React',
      description: 'React glove',
      price: 10,
      img: '../../assets/images/products/glove-react1.png'
    },
    {
      title: 'C#',
      description: 'C# Hat',
      price: 20,
      img: '../../assets/images/products/hat-core1.png'
    }
  ]
}

interface IProduct {
  title:string;
  description:string;
  price:number;
  img:string;
}