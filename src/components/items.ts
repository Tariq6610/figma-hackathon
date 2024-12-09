interface Products {
    id: number,
    name : string,
    percentOff? : string,
    newPrice : string,
    oldPrice? : string,
    stars : number,
    rating : number,
    image : string
}

export const newProducts : Products[] = [
    {
      id: 1,
      name : "T-SHIRT WITH TAPE DETAILS",
      newPrice : "$120",
      stars : 4,
      rating : 4,
      image : '/products/Frame 32.png'
    },
    {
      id: 2,
      name : "SKINNY FIT JEANS",
      percentOff : "-10%",
      newPrice : "$240",
      oldPrice : "$260",
      stars : 3,
      rating : 3,
      image : '/products/Frame 33.png'
    },
    {
      id: 3,
      name : "CHECKERED SHIRT",
      newPrice : "$180",
      stars : 4,
      rating : 4,
      image : '/products/Frame 34.png'
    },
    {
      id: 4,
      name : "SLEEVE STRIPED T-SHIRT",
      percentOff : "-20%",
      newPrice : "$130",
      oldPrice : "$160",
      stars : 4,
      rating : 4,
      image : '/products/Frame 35.png'
    },
  ]

  export const topProducts : Products[] = [
    {
      id: 5,
      name : "VERTICAL STRIPED SHIRT",
      percentOff : "-10%",
      newPrice : "$212",
      oldPrice : "$232",
      stars : 5,
      rating : 5,
      image : '/topProducts/Frame 32.png'
    },
    {
      id: 6,
      name : "COURAGE GRAPHIC T-SHIRT",
      newPrice : "$145",
      stars : 4,
      rating : 4,
      image : '/topProducts/Frame 33.png'
    },
    {
      id: 7,
      name : "LOOSE FIT BERMUDA SHORTS",
      newPrice : "$80",
      stars : 3,
      rating : 3,
      image : '/topProducts/Frame 34.png'
    },
    {
      id: 8,
      name : "FADED SKINNY JEANS",
      newPrice : "$210",
      stars : 4,
      rating : 4,
      image : '/topProducts/Frame 38.png'
    },
  ]


  export const recomendedProducts : Products[] = [
    {
      id: 9,
      name : "Polo with Contrast Trims",
      percentOff : "-20%",
      newPrice : "$212",
      oldPrice : "$242",
      stars : 4,
      rating : 4,
      image : '/recomended/Frame 32.png'
    },
    {
      id: 10,
      name : "Gradient Graphic T-shirt",
      newPrice : "$145",
      stars : 3,
      rating : 3,
      image : '/recomended/Frame 33.png'
    },
    {
      id: 11,
      name : "Polo with Tipping Details",
      newPrice : "$180",
      stars : 4,
      rating : 4,
      image : '/recomended/Frame 34.png'
    },
    {
      id: 12,
      name : "Black Striped T-shirt",
      newPrice : "$120",
      stars : 5,
      rating : 5,
      image : '/recomended/Frame 38.png'
    },
  ]

  export const allProducts : Products[] = [
    {
      id: 1,
      name : "T-SHIRT WITH TAPE DETAILS",
      newPrice : "$120",
      stars : 4,
      rating : 4,
      image : '/products/Frame 32.png'
    },
    {
      id: 2,
      name : "SKINNY FIT JEANS",
      percentOff : "-10%",
      newPrice : "$240",
      oldPrice : "$260",
      stars : 3,
      rating : 3,
      image : '/products/Frame 33.png'
    },
    {
      id: 3,
      name : "CHECKERED SHIRT",
      newPrice : "$180",
      stars : 4,
      rating : 4,
      image : '/products/Frame 34.png'
    },
    {
      id: 4,
      name : "SLEEVE STRIPED T-SHIRT",
      percentOff : "-20%",
      newPrice : "$130",
      oldPrice : "$160",
      stars : 4,
      rating : 4,
      image : '/products/Frame 35.png'
    },
    {
    id: 5,
    name : "VERTICAL STRIPED SHIRT",
    percentOff : "-10%",
    newPrice : "$212",
    oldPrice : "$232",
    stars : 5,
    rating : 5,
    image : '/topProducts/Frame 32.png'
  },
  {
    id: 6,
    name : "COURAGE GRAPHIC T-SHIRT",
    newPrice : "$145",
    stars : 4,
    rating : 4,
    image : '/topProducts/Frame 33.png'
  },
  {
    id: 7,
    name : "LOOSE FIT BERMUDA SHORTS",
    newPrice : "$80",
    stars : 3,
    rating : 3,
    image : '/topProducts/Frame 34.png'
  },
  {
    id: 8,
    name : "FADED SKINNY JEANS",
    newPrice : "$210",
    stars : 4,
    rating : 4,
    image : '/topProducts/Frame 38.png'
  },
  {
    id: 9,
    name : "Polo with Contrast Trims",
    percentOff : "-20%",
    newPrice : "$212",
    oldPrice : "$242",
    stars : 4,
    rating : 4,
    image : '/recomended/Frame 32.png'
  },
  {
    id: 10,
    name : "Gradient Graphic T-shirt",
    newPrice : "$145",
    stars : 3,
    rating : 3,
    image : '/recomended/Frame 33.png'
  },
  {
    id: 11,
    name : "Polo with Tipping Details",
    newPrice : "$180",
    stars : 4,
    rating : 4,
    image : '/recomended/Frame 34.png'
  },
  {
    id: 12,
    name : "Black Striped T-shirt",
    newPrice : "$120",
    stars : 5,
    rating : 5,
    image : '/recomended/Frame 38.png'
  },
  ]
