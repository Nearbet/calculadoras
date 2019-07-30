import React from 'react';

import Cell from '../atoms/Cell';

const Column = (quantity) =>{
  for (const i=0; i < quantity; i++){
    <Cell value=''></Cell>
  }
}

export default Column;