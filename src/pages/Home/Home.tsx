const Home = () => {
	return (
		<div className="homeWrapper">
			<div className="BigTitle">
				<span>Welcome to Festival Wordl</span>
			</div>
			<div className="scheduleBtnWrapper">
				<button className="roundRectBtn nextYearBtn"></button>
				<button className="roundRectBtn curYearBtn"></button>
			</div>
			<div className="topicWrapper">
				<div className="roundRectBtn topicBtn">Recent HOT</div>
				<div className="topicWrapper">
					<div className="topicTitle"></div>
					<div className="topicContent"></div>
				</div>
				<div className="topicPagenation"></div>
			</div>
		</div>
	);
};

export default Home;
