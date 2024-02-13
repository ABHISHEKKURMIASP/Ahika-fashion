import Cat1 from  '../images/cat1.jpg';
import Cat2 from  '../images/cat2.jpg';
import Cat3 from  '../images/cat3.jpg';
import Cat4 from  '../images/cat4.webp';
import Img1 from '../images/img1.webp';
import Img2 from '../images/Img2.webp';
import Img3 from '../images/Img3.webp';
import Img4 from '../images/Img4.webp';
import Cart1 from '../images/cart1.webp';
import Cart2 from '../images/cart2.webp';
import Cart3 from '../images/cart3.webp';
import Cart4 from '../images/cart4.webp';
import Single1 from '../images/single1.webp';
import Single2 from '../images/single2.webp';
import Single3 from '../images/single3.webp';
import Single4 from '../images/single4.webp';
import Single5 from '../images/single5.webp';






export const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/VKSKD1758.jpg?v=1703832714',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD1588_e493b5a0-26c7-42ad-bcec-0803ab24b1c5.jpg?v=1703847324',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/SPPX6910_700x_243f54ef-941c-4473-a56f-71e28ee59db9.webp?v=1703778123',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD1818.jpg?v=1703832714',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD1975_700x_e708e3a9-4a21-4200-bb7e-567f3f5cebb6.webp?v=1703778122',
    // route: 'shop/mens',
  },
  {
    id: 6,
    title: 'hats',
    imageUrl: "https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD2022_5_4b8d31c3-590d-47c5-ae95-da603040772a.jpg?v=1703833887",
    route: 'shop/hats',
  },
  {
    id: 7,
    title: 'jackets',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/SPPX7523.jpg?v=1703847324',
    route: 'shop/jackets',
  },
  {
    id: 8,
    title: 'sneakers',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD1859_f962e964-e611-4a28-ab49-21b1d0277128.jpg?v=1703847324',
    route: 'shop/sneakers',
  },
 
  {
    id: 9,
    title: 'mens',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0604/0040/2685/files/VKSKD1300_1_f2caacbd-d374-4700-8b4b-82912836fdd2.jpg?v=1703848755',
    // route: 'shop/mens',
  },
 
];


export const images = [
  {
    id: 1,
    src:Cat1,
    alt: "Image 1",
    text: "JACQUARD SUIT SETS"
  },
  {
    id: 2,
    src:Cat2,
    alt: "Image 2",
    text: "ANARKALI SUIT SETS"
  },
  {
    id: 3,
    src: Cat3,
    alt: "Image 3",
    text: "EVERDAY WEAR"
  },
  {
    id: 4,
    src: Cat4,
    alt: "Image 4",
    text: "FESTIVE EDITS"
  }
];

export const category2 = [
  {
    id: 1,
    src:Img1,
    alt: "Im1",
    text: "KURTAS"
  },
  {
    id: 2,
    src:Img2,
    alt: "Im2",
    text: "KURTA SETS"
  },
  {
    id: 3,
    src: Img3,
    alt: "Im3",
    text: "SUIT SETS"
  },
  {
    id: 4,
    src: Img4,
    alt: "Im4",
    text: "DRESSES"
  }
];


export const Cart=[
  {
    id: 1,
    description: "Yellow Viscose Rayon Abstract Printed Straight Kurta VCK9632",
    price: 799.0,
    image: Cart1,
    cutPrice: 2999.0, // Add cut price
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    colors: ['white', '#FFD6B6', '#FFBDB2'],
    title:"SKU: VCK9632_XS",
    material:"vjhgj",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",

    images: [
     
      { image: Single1, title: "Front View" },
      { image: Single2, title: "Back View" },
      { image: Single3, title: "Front View" },
      { image: Single4, title: "Back View" },
      { image: Single5, title: "Front View" },
    
      
    ],
 
  },
  {
    id: 2,
   
    price: 599.0,
    image: Cart2,
    cutPrice: 3999.0, // Add cut price
    description: "Yellow Viscose Rayon Floral Printed Straight Suit Set VKSKD2162",

    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    colors: ['#F6EEDB', '#FFD6B6', '#FFBDB2'],
    title:"SKU: VCK9632_XS",
    material:"vjhgj",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",

    images: [
      { image: Single1, title: "Front View" },
      { image: Single2, title: "Back View" },
      { image: Single3, title: "Front View" },
      { image: Single4, title: "Back View" },
      { image: Single5, title: "Front View" },
    
    ],
   
  },
  {
    id: 3,
    
    price: 799,
    image: Cart3,
    cutPrice: 1998.0, // Add cut price
    description: "Beige Pure Cotton Floral Yoke Design Flared Suit Set VKSKD2078",
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    colors: ['#F6EEDB', '#FFD6B6', '#FFBDB2'],
    title:"SKU: VCK9632_XS",
    material:"vjhgj",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",
    images: [
      { image: Single1, title: "Front View" },
      { image: Single2, title: "Back View" },
      { image: Single3, title: "Front View" },
      { image: Single4, title: "Back View" },
      { image: Single5, title: "Front View" },
    
    ],
   
  },
  {
  id: 4,
 
  price: 799,
  image: Cart4,
  cutPrice: 2998.0, // Add cut price
  description: "Teal Polyester Ethnic Motifs Printed Flared Suit Set PKSKD2205",
  size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  colors: ['#F6EEDB', '#FFD6B6', '#FFBDB2'],
  title:"SKU: VCK9632_XS",
  material:"vjhgj",
  addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
  stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
  sizefit:"The model (height 5'8) is wearing a size S",
  materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
  specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",
  images: [
    { image: Single1, title: "Front View" },
      { image: Single2, title: "Back View" },
      { image: Single3, title: "Front View" },
      { image: Single4, title: "Back View" },
      { image: Single5, title: "Front View" },
    
  ],
 
  },
]