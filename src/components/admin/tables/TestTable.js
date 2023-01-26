import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
const TextField = styled.input`
height: 32px;
width: 200px;
border-radius: 3px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border: 1px solid #e5e5e5;
padding: 0 32px 0 16px;

&:hover {
    cursor: pointer;
}
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>

	</>
);

const columns = [
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'Email',
		selector: row => row.email,
		sortable: true,
	},
	{
		name: 'Address',
		selector: row => row.address,
		sortable: true,
	},
];

const TestTable = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/server/api/products_pizza`).then((res) =>{
            //    console.log(res);
                // setData([]);
                for (let i = 0; i < res.data.length; i++) {
                  const element = res.data[i];
                  setData(prev =>[...prev,
                    {
                      id: element.id,
                      id_item: element.id_item,
                      name: element.size,
                     
                    },
                   
                  ]);
                  
                }
              }).catch((err) =>{
                console.error(err);
              });
        return () => {
            
        };
    }, []);

	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

  return (
    <DataTable
			title="Contact List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/>
  )
}

export default TestTable