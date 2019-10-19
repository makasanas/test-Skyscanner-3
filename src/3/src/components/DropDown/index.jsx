import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import './dropdown.scss';

const DropdownItem = ({ text, children, handleOnClick }) => (
  <li className="menu-item" onClick={(e) => handleOnClick(e)}>
    <span>{text}</span>
    {children}
  </li>
);

class Dropdown extends React.Component {
  handleClickOutside() {
    this.props.handleOutsideClick();
  }

  render() {
    const { items, handleOnClick, handleOutsideClick } = this.props;
    return (
      <ul className="dropdown-menu">
        {items.map((item, i) => (
          <DropdownItem key={`item-${i}`} text={item.text} handleOnClick={handleOnClick}>
            {
              item.options
                ? (
                  <Dropdown
                    items={item.options}
                    handleOnClick={handleOnClick}
                    handleOutsideClick={handleOutsideClick}
                  />
                )
                : null
            }
          </DropdownItem>
        ))}
      </ul>
    );
  }
}

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleOnClick: PropTypes.func.isRequired,
};

DropdownItem.defaultProps = {
  children: undefined,
};

const ItemShape = {
  id: PropTypes.number,
  title: PropTypes.string,
};

ItemShape.options = PropTypes.arrayOf(PropTypes.shape(ItemShape));

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemShape)),
  handleOutsideClick: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  items: [],
};

export default onClickOutside(Dropdown);
