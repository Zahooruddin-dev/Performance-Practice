import React from 'react';
import './App.css';
import Product from './Product';
import productsData from './data';
export default function App() {
	const [count, setCount] = React.useState(0);
	const [sort, setSort] = React.useState(false);

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	const sortedProducts = React.useMemo(() => {
		return [...productsData].sort((a, b) => a.name.localeCompare(b.name));
	}, [productsData]);
	const startTime2 = Date.now();

	const endTime2 = Date.now();
	console.log(`Took ${endTime2 - startTime2}ms`);

	const visibleProducts = sort ? sortedProducts : productsData;

	return (
		<>
			<h1>The current count is {count}</h1>
			<button className='button' onClick={decrement}>
				-
			</button>
			<button className='button' onClick={increment}>
				+
			</button>
			<br />
			<br />
			<button className='button' onClick={() => setSort((prev) => !prev)}>
				{sort ? 'Unsort' : 'Sort'}
			</button>
			<br />
			<br />
			<div className='products-list'>
				{visibleProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</>
	);
}
