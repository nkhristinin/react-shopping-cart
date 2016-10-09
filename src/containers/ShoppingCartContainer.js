import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsTable from '../components/ProductsTable';
import Product from '../components/Product';
import Checkout from '../components/Checkout';
import {getTotalPrice} from '../reducers'
import * as productActions from '../actions/ProductsAction';


/**
 * Container for show table products and checkout info
 * @param products
 * @param deleteProduct
 * @param reduceProductCount
 * @param addProduct
 * @param totalPrice
 * @constructor
 */
const ShoppingCartContainer = ({products, deleteProduct, reduceProductCount, addProduct, totalPrice}) => (
	<div>
		<ProductsTable>
			{products.map(item=>
				<Product key={item.id}
								 data={item}
								 deleteProduct={deleteProduct}
								 reduceProductCount={reduceProductCount}
								 addProduct={addProduct}/>
			)}
		</ProductsTable>
		<Checkout totalPrice={totalPrice}></Checkout>
	</div>
);

function mapStateToProps(state) {
	return {
		products: state.shoppingCart.products,
		totalPrice: getTotalPrice(state.shoppingCart.products)
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators(productActions, dispatch);
	return {
		...boundActionCreators
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);