import React, { useState } from 'react';
import style from './search-input.module.scss';

function SearchInput() {

    const [ inputValue, setValue ] = useState('');

    return (
        <div className={ style.searchInput }>
            <input value={ inputValue } onInput={ e => setValue(e.target.value) } />
            <button>search</button>
        </div>
    );
}

export default SearchInput;