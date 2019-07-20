import React from 'react'; 
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component.jsx';

import { selectTheCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
/*match is somthing provided by Route so we have access to the actual path we are in */
const CollectionPage = ({ collection }) => {
	console.log('collection',collection)
	return(
		<div className = 'collection-page'>
			<h2 className ='title'> {title.toUpperCase()} </h2>
			<div className = 'items'> 
				{
					items.map(item => <CollectionItem key={item.id} item={item}/>)
				}
			</div> 
		</div>
	)
}

const mapStateToProps = ( state, ownProps ) => ({
	collection: selectTheCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage) ;