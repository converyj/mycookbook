import React from 'react';
import { Link } from 'react-router-dom';
import { AddRecipeContainer } from '../AddRecipe';
import BookmarkWrapper from '../BookmarkWrapper';
import { SearchWrapper } from '../SearchBar';

import './header.scss';

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<Link to="/">
					<h1 className="logo">mycookbook</h1>
				</Link>
				<SearchWrapper />
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<button className="nav__button nav__btn--add-recipe" title="add-recipe">
								<span>Add Recipe</span>
							</button>
							<AddRecipeContainer />
						</li>
						<li className="nav__item">
							<button
								className="nav__button nav__btn--bookmarks"
								title="add-bookmarks">
								<span>Bookmarks</span>
							</button>
							<BookmarkWrapper />
						</li>
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
