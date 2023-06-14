import Cart from "./cart";

describe('testear_la_clase_de_carrito', () => {
    it('testear_que_el_carrito_empieza_a_cero', () => {
        const expectedCart = {
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0
        }

        expect(Cart.getDefaultCart()).toEqual(expectedCart);
    })
    it('añadir_articulos_al_carrito_de_la_compra', () => {
        const currentCart = {
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0
        }

        const expectedCart = {
            1:0,
            2:0,
            3:0,
            4:0,
            5:1,
            6:0
        }
        const lights = 5;
        expect(Cart.addToCart(lights, currentCart)).toStrictEqual(expectedCart);
    })
})


