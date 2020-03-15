// import React, { useState } from 'react';
// import Events from './Events'
// import uuid from 'react-uuid';

// const filterOptions = [
//   { label: 'All', reset: true },
//   { label: 'Date', type: 'Date' },
//   { value: 'Animals', type: 'Type' },
//   { value: 'Environment', type: 'Type' },
//   { value: 'Homeless', type: 'Type' },
//   { value: 'Rebuilding', type: 'Type' },
//   { value: 'Youth', type: 'Type' },
//   { label: 'City', type: 'Location' },
// ]
// const Filters = () => { 
//   const [filters, setFilters] = useState({});
//   const updateFilters = ({ filterType, filterValue, reset }) =>
//     setFilters(
//       reset
//         ? {} // if reset is true empty the object
//         : { ...filters, [filterType]: filterValue } // if it's not true maintain the rest of the properties and append/update the new ones
//     );
//   const checkFilters = (filterKeys, result) =>
//     filterKeys.every(key => {
//       // we loop our filterd keys, and we compared the value of those filters with the values of each pet
//       const filterValue = filters[key];
//       return result[key] === filterValue;
//     });
//   return (
//     // the return is what gets rendured
//     <Container className="cards-container">
//       <div>
//         {filterOptions.map(({ value, label, type, reset }) => (
//           <ButtonGroup toggle className="mt-10">
//             <ToggleButton
//               type="radio"
//               name="radio"
//               defaultChecked
//               value="1"
//               key={uuid()}
//               onClick={() =>
//                 updateFilters({ filterType: type, filterValue: value, reset })
//               }
//             >
//               {label || value}
//             </ToggleButton>
//           </ButtonGroup>
//         ))}{' '}
//         {/* This filter options.map just maps through our options/filters /*/}
//         <Row>
//           {events &&
//            events.reduce((acc, result) => {
//               // the accumulator is a value that gets carried over after each accumulator
//               const filterKeys = Object.keys(filters); //array of strings for each key in the object
//               const hasFilters = !!filterKeys.length; //the !! are optional to further visualize that it's a falsy statement.
//               if (hasFilters) {
//                 const isValid = checkFilters(filterKeys, result);
//                 if (!isValid) return acc; //if the filters aren't "valid", we skip the pet again by returning the accumulator, which is no pet, because we have set it to an empty array
//               }
//               acc.push(<Events key={result.id} result={result} />);
//               return acc;
//             }, [])}{' '}
//           {/* this empty braket (empty array) represents the innitial accumulator value*/}
//         </Row>
//       </div>
//     </Container>
//   );
// };
// export default Filters;
