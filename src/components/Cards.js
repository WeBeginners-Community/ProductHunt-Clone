import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebars";
import configs from "../configs";

const images = [
	{
		img:
			"https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/17305/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/1263444/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/94353/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2097425/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2096165/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	}
];
class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	updateCount = id => {
		let updatedData = this.state.data.map(product => {
			if (product.id === id) {
				product.votes_count += 1;
			}
			return product;
		});
		this.setState({ data: updatedData });
	};
	componentDidMount() {
		fetch("https://api.producthunt.com/v1/posts/", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + configs.token,
				Host: "api.producthunt.com"
			}
		})
			.then(res => res.json())
			.then(resData => {
				this.setState({ data: resData.posts });
			})
			.catch(err => console.log(err));
	}
	render() {
		return (
			<>
				<div className="container">
					<div className="product_list">
						{this.state.data.map(product => (
							<Card {...product} updateCount={this.updateCount} />
						))}
					</div>
					<div className="side_container">
						<Sidebar data={images} />
					</div>
				</div>
			</>
		);
	}
}
export default Cards;