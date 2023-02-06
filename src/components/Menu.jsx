import React from 'react';

const menu = [
  {
    name: 'Spaghetti Bolognese',
    description:
      'A classic Italian dish made with a rich tomato sauce and ground beef.',
    price: '100kr',
  },
  {
    name: 'Grilled Salmon',
    description:
      'A perfectly grilled salmon fillet served with a lemon butter sauce.',
    price: '100kr',
  },
  {
    name: 'Vegetable Stir-Fry',
    description:
      'A colorful mix of fresh vegetables stir-fried with your choice of sauce.',
  },
  {
    name: 'Chicken Parmesan',
    description:
      'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.',
    price: '100kr',
  },
  {
    name: 'Pesto Pasta',
    description:
      'Penne pasta tossed in a flavorful basil pesto sauce and topped with parmesan cheese.',
    price: '100kr',
  },
  {
    name: 'Spaghetti Bolognese',
    description:
      'A classic Italian dish made with a rich tomato sauce and ground beef.',
    price: '100kr',
  },
  {
    name: 'Grilled Salmon',
    description:
      'A perfectly grilled salmon fillet served with a lemon butter sauce.',
    price: '100kr',
  },
  {
    name: 'Vegetable Stir-Fry',
    description:
      'A colorful mix of fresh vegetables stir-fried with your choice of sauce.',
  },
  {
    name: 'Chicken Parmesan',
    description:
      'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.',
    price: '100kr',
  },
  {
    name: 'Pesto Pasta',
    description:
      'Penne pasta tossed in a flavorful basil pesto sauce and topped with parmesan cheese.',
    price: '100kr',
  },
  {
    name: 'Spaghetti Bolognese',
    description:
      'A classic Italian dish made with a rich tomato sauce and ground beef.',
    price: '100kr',
  },
  {
    name: 'Grilled Salmon',
    description:
      'A perfectly grilled salmon fillet served with a lemon butter sauce.',
    price: '100kr',
  },
  {
    name: 'Vegetable Stir-Fry',
    description:
      'A colorful mix of fresh vegetables stir-fried with your choice of sauce.',
  },
  {
    name: 'Chicken Parmesan',
    description:
      'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.',
    price: '100kr',
  },
  {
    name: 'Pesto Pasta',
    description:
      'Penne pasta tossed in a flavorful basil pesto sauce and topped with parmesan cheese.',
    price: '100kr',
  },
];

const Menu = () => (
  <div id="menu" className="flex flex-col items-center my-12">
    <h2>MENY</h2>
    <div className="lg:flex justify-center gap-10 lg:px-60 px-10">
      <ul>
        {menu.slice(0, 7).map((item, index) => (
          <li key={index} className="border-b-2 border-black">
            <p className="m-0 mt-5 tracking-widest">{item.name}</p>
            <p className="mb-5 text-base">
              {item.description} <span>{item.price}</span>
            </p>
          </li>
        ))}
      </ul>
      <ul>
        {menu.slice(0, 7).map((item, index) => (
          <li key={index} className="border-b-2 border-black">
            <p className="m-0 mt-5 tracking-widest">{item.name}</p>
            <p className="mb-5 text-base">
              {item.description} <span>{item.price}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;
