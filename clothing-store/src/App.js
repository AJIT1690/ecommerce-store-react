import './categories.styles.scss';


import Directory from './components/directory/directory.component';


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id: 3,
      title: 'Shirts',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id: 4,
      title: 'Men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id: 5,
      title: 'Women',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }

  ]

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default App;
