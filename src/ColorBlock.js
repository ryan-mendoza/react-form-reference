import React, { Component } from 'react';
import css from './styles.css';

class ColorBlock extends Component {
  state = {
    color: '',
  };
  inputRef = React.createRef();
  updateColor = () => {
    this.setState(() => ({ color: this.inputRef.current.value }));
  };

  clearInput = () => {
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
    this.updateColor();
  };

  render() {
    const { color } = this.state;
    var squareStyle = {
      backgroundColor: color,
    };
    return (
      <div className='color-area'>
        <div style={squareStyle} className='color-square' />

        <form>
          <input
            ref={this.inputRef}
            onChange={this.updateColor}
            placeholder='Enter a color value'
          />
          <button type='button' onClick={this.clearInput}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default ColorBlock;
