import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Milan",
			email: "admin@amazona.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: true,
		},
		{
			name: "John",
			email: "user@amazona.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Nike Slim Shirt",
			category: "Shirts",
			image: "../images/p1.jpg",
			price: 120,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality product",
			countInStock: 10,
		},
		{
			name: "Addidas Slim Shirt",
			category: "Shirts",
			image: "../images/p2.jpg",
			price: 100,
			brand: "Addidas",
			rating: 4.2,
			numReviews: 11,
			description: "high quality product",
			countInStock: 20,
		},
		{
			name: "Lacoste Slim Shirt",
			category: "Shirts",
			image: "../images/p3.jpg",
			price: 220,
			brand: "Lacoste",
			rating: 4.8,
			numReviews: 17,
			description: "high quality product",
			countInStock: 0,
		},
		{
			name: "Nike Slim Pants",
			category: "Pants",
			image: "../images/p4.jpg",
			price: 78,
			brand: "Nike",
			rating: 4.5,
			numReviews: 14,
			description: "high quality product",
			countInStock: 15,
		},
		{
			name: "Puma Slim Pants",
			category: "Pants",
			image: "../images/p5.jpg",
			price: 65,
			brand: "Puma",
			rating: 4.3,
			numReviews: 10,
			description: "high quality product",
			countInStock: 5,
		},
		{
			name: "Addidas Fit Pants",
			category: "Pants",
			image: "../images/p6.jpg",
			price: 139,
			brand: "Addidas",
			rating: 4.5,
			numReviews: 15,
			description: "high quality product",
			countInStock: 12,
		},
	],
};

export default data;
