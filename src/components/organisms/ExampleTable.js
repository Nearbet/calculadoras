import React from 'react';

import ReactTable from 'react-table'
 
render() {
  const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },{
    ...
  }]
 
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
 
  return <ReactTable
    data={data}
    columns={columns}
  />
}



import React from 'react';
import { render } from 'react-dom';
import Table from 'rc-table'

import Cell from './components/atoms/Cell';
import Column from './components/molecules/Column';

const App = () =>{
  return(
    <React.Fragment>
      <div>App</div>
      <Cell value='hey'></Cell>
    </React.Fragment>
  )
}

render(<App />, document.getElementById('root'));


import React from 'react';
import { render } from 'react-dom';
import Table from 'rc-table'

import Cell from './components/atoms/Cell';
import Column from './components/molecules/Column';
import ReactTable from 'react-table'
 
const table1 = () => {
  const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },{
    name: 'Im Example',
    age: 27,
    friend: {
      name: 'No friend',
      age: 0,
    }
  }]
 
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
 
  return <ReactTable
    data={data}
    columns={columns}
  />
}

render(<table1 />, document.getElementById('root'));


// WORKING TABLE EXAMPLE

import React from 'react';
import { render } from 'react-dom';
import Table from 'rc-table'
import ReactTable from 'react-table'

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2' },
];

render(<Table columns={columns} data={data} />, document.getElementById('root'));
