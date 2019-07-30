import React from 'react';
import { render } from 'react-dom';
import Table from 'rc-table'
import ReactTable from 'react-table'

import CuotasGrid from './components/CuotasGrid';



render(<Table columns={columns} data={data} />, document.getElementById('root'));
