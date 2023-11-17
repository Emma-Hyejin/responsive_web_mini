import LOGO from "@/assets/logo.png";
import SearchIcon from "@/assets/search";
import "./Header.scss";
import DownArrow from "@/assets/downArrow";
import HamburgerMenu from "@/assets/hamburgerMenu";

const Header = () => {
	const screenSize = "400px";
	return (
		<div className="headerWrapper">
			<div className="logo">
				<img src={LOGO} alt="logo image" />
			</div>
			<div className="menuWrapper">
				<ul className="menus">
					<li className="menu">FestivalInfo</li>
					<li className="menu">Topic</li>
					<li className="menu">
						Dj Info
						<DownArrow
							fillColor={"#FFFFFF"}
							width={"20px"}
							height={"20px"}
						/>
					</li>
				</ul>
			</div>
			<div className="userWrapper">
				<div className="svgWrapper">
					<SearchIcon
						fillColor={"#FFFFFF"}
						width={"30px"}
						height={"30px"}
					/>
				</div>
				<div className="tempUser" />
				{screenSize && (
					<div className="svgWrapper">
						<HamburgerMenu
							fillColor={"#FFFFFF"}
							width={"35px"}
							height={"35px"}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
