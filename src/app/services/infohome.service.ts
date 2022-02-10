import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfohomeService {

  constructor() { }
  dataPublications: Object[] = [
    {
      id: 0,
      img: "./assets/img/anuncio1.jpg",
      title: "Casa de Lujo en el Lago",
      description: "Casa en el lago con excelente vista, acabados de lujo a un excelente precio",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    },
    {
      id: 1,
      img: "./assets/img/anuncio2.jpg",
      title: "Casa terminados de Lujo",
      description: "Casa con diseño moderno, así como tecnología iteligente y amueblada",
      price: "2,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    },
    {
      id: 2,
      img: "./assets/img/anuncio3.jpg",
      title: "Casa con alberca",
      description: "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    },
    {
      id: 3,
      img: "./assets/img/anuncio4.jpg",
      title: "Casa fuera de la ciudad",
      description: "Casa en el lago con excelente vista, acabados de lujo a un excelente precio",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    },
    {
      id: 4,
      img: "./assets/img/anuncio5.jpg",
      title: "Casa frente al bosque",
      description: "Casa con diseño moderno, así como tecnología iteligente y amueblada",
      price: "2,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    },
    {
      id: 5,
      img: "./assets/img/anuncio6.jpg",
      title: "Casa con Alberca",
      description: "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2",
      technical_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem odio in repellendus unde quas a tempore veritatis cum, iste quasi eligendi dolor similique perferendis optio, quidem, quod ipsam quis, Distinctio rerum assumenda aut, ullam eos at porro deserunt voluptatum illum voluptas! Nisi temporibus optio molestiae laudantium maiores, rerum harum. Quas deleniti ducimus explicabo similique sed earum quam odit voluptate."
    }
  ];

  dataHome: Object[] = [
    {
      id: 0,
      img: "./assets/img/anuncio2.jpg",
      title: "Casa de Lujo en el Lago",
      description: "Casa en el lago con excelente vista, acabados de lujo a un excelente precio",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2"
    },
    {
      id: 1,
      img: "./assets/img/anuncio1.jpg",
      title: "Casa terminados de Lujo",
      description: "Casa con diseño moderno, así como tecnología iteligente y amueblada",
      price: "2,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2"
    },
    {
      id: 2,
      img: "./assets/img/anuncio3.jpg",
      title: "Casa con Alberca",
      description: "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad",
      price: "3,000,000",
      bathrooms: "3",
      parking: "3",
      bedroom: "2"
    }
  ];
  dataBlog: Object[] = [
    {
      id: 0,
      img: "./assets/img/blog1.jpg",
      title: "Terraza en el techo de tu casa",
      description: "Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero",
      by: "Admin",
      date: new Date().toDateString(),
    },
    {
      id: 1,
      img: "./assets/img/blog2.jpg",
      title: "Guía para la decoración de tu hogar",
      description: "Maximiza el espacio en tu hogar con esta guía,aprende a combinar muebles y colores para darle vidad a tu espacio",
      by: "Admin",
      date: new Date().toDateString(),
    }
  ];
  dataBlogPage: Object[] = [
    {
      id: 0,
      img: "./assets/img/blog1.jpg",
      title: "Terraza en el techo de tu casa",
      description: "Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero",
      by: "Admin",
      date: new Date().toDateString(),
    },
    {
      id: 1,
      img: "./assets/img/blog2.jpg",
      title: "Guía para la decoración de tu hogar",
      description: "Maximiza el espacio en tu hogar con esta guía,aprende a combinar muebles y colores para darle vidad a tu espacio",
      by: "Admin",
      date: new Date().toDateString(),
    },
    {
      id: 2,
      img: "./assets/img/blog3.jpg",
      title: "Guía para la decoración de tu hogar",
      description: "Maximiza el espacio en tu hogar con esta guía,aprende a combinar muebles y colores para darle vidad a tu espacio",
      by: "Admin",
      date: new Date().toDateString(),
    },
    {
      id: 3,
      img: "./assets/img/blog4.jpg",
      title: "Guía para la decoración de tu hogar",
      description: "Maximiza el espacio en tu hogar con esta guía,aprende a combinar muebles y colores para darle vidad a tu espacio",
      by: "Admin",
      date: new Date().toDateString(),
    }
  ];
  getDataBlog() {
    return this.dataBlog;
  }
  getDataHome() {
    return this.dataHome;
  }
  getDataPublications() {
    return this.dataPublications;
  }
  getInfoPublication(id: number) {
    return this.dataPublications[id];
  }
  getDataBlogPage() {
    return this.dataBlog;
  }
}
