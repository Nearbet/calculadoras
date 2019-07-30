import React, {useContext} from 'react';

const DataProvided = useContext(DataContext);

const DataProvider = (props) => <DataProvided.Provider>{props.children}</DataProvided.Provider>;

export default DataProvider;