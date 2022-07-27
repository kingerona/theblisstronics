import { nanoid } from "nanoid"
import "./cart.scss"
import { images } from "../../constants"

export default function Cartt() {
    const cartProducts = [
        {
            name: "Gigabyte Package",
            price: 50000,
            productImg: images.cart_1
        },
        {
            name: "Asus Package",
            price: 50000,
            productImg: images.cart_2
        },
        {
            name: "Ventus Package",
            price: 50000,
            productImg: images.cart_3
        }
    ]

    const cartEl = cartProducts.map(product => {
        return (
            <tr key={nanoid()}>
                <td className="shoping__cart__item">
                    <img src={product.productImg} alt=""/>
                    <h5>{product.name}</h5>
                </td>
                <td className="shoping__cart__price">
                    Tk {product.price}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" value="1" readOnly/>
                        </div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    $110.00
                </td>
                <td className="shoping__cart__item__close">
                    <span className="icon_close"></span>
                </td>
            </tr>
        )
    })

    return (
        <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartEl}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <a href="example.com" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="example.com" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="example.com">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" className="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total <span>$454.98</span></li>
                        </ul>
                        <a href="example.com" className="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}