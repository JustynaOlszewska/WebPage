import React from 'react';
import PropTypes from 'prop-types';

const ElementList = ({ nameElementList, active }) => {
    const newList = nameElementList.map(({key, href, name }) => {

        return (
            <li id={key} key={href} className={`list__element ${active}`}>
                <a className={`list__element-link ${active}`} href={href}>
                    {name}
                </a>
            </li>
        )

    })
    return (
        <ul className="list">
            {newList}
        </ul>
    );
}
ElementList.propTypes = {
    nameElementList: PropTypes.array.isRequired,
    active: PropTypes.oneOf(['sleep','active']).isRequired

}

export default ElementList;