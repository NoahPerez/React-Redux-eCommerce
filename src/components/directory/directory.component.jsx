import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectorDirectorySections } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

const Directory = ({ sections }) => ( // off the section of the object 

    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id}  {...otherSectionProps} />
            // or this.state.map(section =>
            //<MenuItem key={section.key} title={section.title} />
            // )

            //  or this.state.sections.map(({ title, imageUrl, id, size }) => (
            //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />

            // this.state.sections.map(({ id, ...otherSectionProps }) => (
            //     <MenuItem key={id}  {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectorDirectorySections
});

export default connect(mapStateToProps)(Directory);