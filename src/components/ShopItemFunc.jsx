import image from '../images/item-black.jpg';
import '../styles/Container.css';

const ShopItemFunc = (item) => {
  const { props } = item;
  return (
    <div className="Container">
      <div className="image-box">
        <img src={image} alt="item-black" className='image' />
      </div>
      <div className='container-content'>
        <div className="content">
          <h2 className="content__subtitle">
            {props.brand}
          </h2>
          <h1 className="content__title">{props.title}</h1>
          <h3 className="content__description">
            {props.description}
          </h3>
          <p className="content__description-full">
            {props.descriptionFull}
          </p>
          <div className="content__price">
            <p className="price">
              <span>{props.currency}</span>
              {props.price}
            </p>
            <button className='price-btn'>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemFunc;