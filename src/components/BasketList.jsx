import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active grey darken-3">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active grey darken-3">
        Общая стоимость: {totalPrice} руб.
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
      <li className="collection-item active grey darken-3">
        <button className="btn-small grey lighten-5 grey-text text-darken-4">Оформить</button>
      </li>
    </ul>
  );
}

export { BasketList };
