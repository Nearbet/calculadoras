import React from 'react';

const data = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' },
  ];

const DataContext = () => React.createContext({
data: data,
})

export default DataContext;