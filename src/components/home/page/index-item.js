import React from 'react';
/**
 * 真人、体育、彩票、电子
 */
var Item = (props) => {
	return (
		<div className="i_game w1200 clearFlex">
			<ul className="i_gameItem">
				<li>
					<a href="/livecasino.shtml">
						<img src={require('../img/i_gameBan.jpg')} />
						<span></span>
					</a>
				</li>
				<li>
					<a href="sports.shtml">
						<img src={require('../img/i_gameBan2.jpg')} />
						<span></span>
					</a>
				</li>
				<li>
					<a href="lottery.shtml">
						<img src={require('../img/i_gameBan3.jpg')} />
						<span></span>
					</a>
				</li>
				<li>
					<a href="pt.shtml" className="pdhref">
						<img src={require('../img/i_gameBan4.jpg')} />
						<span></span>
					</a>
				</li>
			</ul>
		</div>
	)
}



export default Item;