import React, { useState, useEffect } from 'react';

function SearchBar({ handleSearch, playgrounds }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        filterResults(searchTerm, searchLocation);
    }, [searchTerm, searchLocation]);

    const handleSearchChange = (e) => {
        const targetValue = e.target.value;
        setSearchTerm(targetValue);
    };

    const handleLocationChange = (e) => {
        const targetValue = e.target.value;
        setSearchLocation(targetValue);
    };

    const filterResults = (term, location) => {
        const results = playgrounds.filter(item =>
            item.location.toLowerCase().includes(location.toLowerCase()) &&
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Nhập tên sân bóng bạn muốn tìm kiếm..."
            />
            <input
                type="text"
                value={searchLocation}
                onChange={handleLocationChange}
                placeholder="Nhập vị trí bạn muốn tìm kiếm..."
            />
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index} onClick={() => handleSearch(result)}>{result.name} - {result.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
