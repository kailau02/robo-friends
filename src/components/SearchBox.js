import React from 'react';

const SearchBox = ({searchChanged, searchPressed}) => {

        return (
            <div className='dib'>
            <input
                type='search'
                placeholder="search robots"
                className="pa3 ba b--green bg-lightest-blue br2 tc ma1"
                onChange={searchChanged}
                onKeyDown={ (e) => {
                    if(e.key === 'Enter'){
                        searchPressed();
                    }
                }}
            />
            <input
                type='button'
                value='Search'
                className='pa3 br2 ma1 ba'
                onClick={searchPressed}
            />
        </div>
        )

};

export default SearchBox;