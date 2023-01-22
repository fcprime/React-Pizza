import React from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63ac56c8da81ba9761816b0e.mockapi.io/Items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}$</h4>
      <Link to="/notfound">
        <button className="button button--outline button-add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
