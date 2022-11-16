import React from "react";
import "../styles/header.scss";

function Header() {
	return (
		<div>
			<div className="header_contianer">
				<header className="header">
					<div className="nav">
						<div className="logo">
						<a aria-label="Product Hunt Logo" href="/"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#FF6154"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg></a>
						</div>
						<div className="search_box">
							<span>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
										fill="#BBB"
										fillRule="evenodd"
									></path>
								</svg>
							</span>
							<input
								type="text"
								placeholder="Discover your next favorite thing..."
							/>
						</div>
						<ul>
							<li>Products</li>
							<li>Community</li>
							<li>Tools</li>
							<li>Jobs</li>
							<li>About</li>&nbsp;
						</ul>
						<div className="auth_button">
						<button className="login_button">Sign in</button>
						

						<button className="signup_button">Sign up</button>
					</div>
					</div>
					
				</header>
			</div>
			<div className="heading">
				<div className="main_heading">
					<p className="title"> Today </p>
					<span className="sub_title">Popular | Newest</span>
				</div>
				<h3>Makers working today</h3>
			</div>
		</div>
	);
}
export default Header;