import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products: any = [];
	addInCart: number[] = [];
	imageReq = 'data:image/png;base64,';
	constructor() { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts = async () => {
		await fetch('http://localhost:3000/products')
		.then(async (res) => {
			if (res.status === 200) {
				this.products = await res.json();
			}
		})
		.catch(err => console.log(err)) 
	}

	addToCart = async (index: number) => {
		console.log(this.addInCart)
		if (!this.addInCart.includes(index)) {
			await fetch(`http://localhost:3000/cart`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem("token")}`
				},
				body: JSON.stringify({
					title: this.products[index].title,
					price: this.products[index].price,
					quantity: 1
				})
			}).then(async (res) => {
				const content = await res.json();
				if (res.status === 201) {
					this.addInCart.push(index);
				} else {
					console.log(content)
				}
			}).catch(err => console.log(err))
		}
	}

}
