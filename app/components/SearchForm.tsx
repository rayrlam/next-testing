import React from 'react'
import Form from "next/form";
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}: {query?: string}) => {
  return (
    <Form action="/" scroll={false} className='search-form'>
        <input 
            name="query"
            defaultValue=""
            className='search-input' 
            placeholder='Search'
        />
        <div className='flex gap-2'>
            {query && <SearchFormReset />}

            <button type="submit" className='search-btn text-white'>
                Go
            </button>
        </div>
    </Form>
  )
}

export default SearchForm
