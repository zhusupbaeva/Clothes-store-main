import { v4 as uuidv4 } from 'uuid'

export const categories = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80',
    title: 'ALL CLOTHES',
    url: '/products',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    title: 'SHIRT STYLES',
    url: '/products/shirts',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1507274301514-7de9f124ff54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    title: 'SHORT SKIRTS',
    url: '/products/skirts',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    title: 'RUNNING SHOES',
    url: '/products/shoes',
  },
  // {
  //   id: 5,
  //   img: 'https://images.unsplash.com/photo-1664386047606-c081c0a0812d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=871&q=80',
  //   title: 'WOMEN',
  //   url: '/products/women',
  // },
  // {
  //   id: 6,
  //   img: 'https://images.unsplash.com/photo-1664307658708-3c1fdd853158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //   title: 'MAN',
  //   url: '/products/man',
  // },
]

export const items = [
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439730/item/goods_60_439730.jpg?width=380',
    price: 29.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445174/item/goods_66_445174.jpg?width=380',
    price: 29.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender:'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445445/item/goods_61_445445.jpg?width=380',
    price: 29.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/441721/item/goods_38_441721.jpg?width=380',
    price: 29.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/447004/item/goods_64_447004.jpg?width=380',
    price: 29.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'skirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/448502/item/goods_70_448502.jpg?width=380',
    price: 39.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'skirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445939/item/goods_34_445939.jpg?width=380',
    price: 59.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'skirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439491/item/goods_08_439491.jpg?width=380',
    price: 19.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'skirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/448502/item/goods_04_448502.jpg?width=380',
    price: 39.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'skirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/448502/item/goods_09_448502.jpg?width=380',
    price: 39.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shoes',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/442233/item/goods_32_442233.jpg?width=380',
    price: 29.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shoes',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/438920/item/goods_09_438920.jpg?width=380',
    price: 29.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shoes',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/438918/item/goods_01_438918.jpg?width=380',
    price: 39.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shoes',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/447450/item/goods_33_447450.jpg?width=1008&impolicy=quality_75',
    price: 19.9,
    deal: true,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shoes',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445086/item/goods_01_445086.jpg?width=1008&impolicy=quality_75',
    price: 19.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/441782/item/goods_37_441782.jpg?width=380',
    price: 19.9,
    deal: false,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/441779/item/goods_69_441779.jpg?width=380',
    price: 19.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'women',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/441146/item/goods_17_441146.jpg?width=380',
    price: 9.9,
    deal: false,
    new: false,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445803/item/goods_09_445803.jpg?width=380',
    price: 29.9,
    deal: false,
    new: true,
  },
  {
    id: uuidv4(),
    type: 'shirts',
    gender: 'man',
    img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/442178/item/goods_33_442178.jpg?width=380',
    price: 29.9,
    deal: false,
    new: false,
  },
  //  {
  //   id:uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id:uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   price: 3.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
  // {
  //   id:uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
  // {
  //   id: uuidv4(),
  //   type: 'shirt',
  //   img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
  //   originalPrice: 3.99,
  //   dicountedPrice: 2.99,
  // },
]

// export const dealItems = [
//   {
//     id: 1,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
//   {
//     id: 2,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
//   {
//     id: 3,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
//   {
//     id: 4,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
//   {
//     id: 5,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
//   {
//     id: 6,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     originalPrice: 3.99,
//     dicountedPrice: 2.99,
//   },
// ]

// export const newItems = [
//   {
//     id: 1,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
//   {
//     id: 2,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
//   {
//     id: 3,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
//   {
//     id: 4,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
//   {
//     id: 5,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
//   {
//     id: 6,
//     type: 'shirt',
//     img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75',
//     price: 3.99,
//   },
// ]

