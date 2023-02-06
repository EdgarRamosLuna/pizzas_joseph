
import React from 'react'
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
    border-right: 0;
    border-radius: 5px 0px 0px 5px;
	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	height: 30px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background: #a42220;
    border: 1px solid #a42220;
    color: #fff;
`;

export const FilterData = ({ filterText, onFilter, onClear, placeholder }) => {
  return (
    <>
		<TextField
			id="search"
			type="text"
			placeholder={placeholder}
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
			autoComplete="off"
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
  )
}
