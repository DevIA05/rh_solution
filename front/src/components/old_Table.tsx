import { Match, Switch, createResource, createSignal } from 'solid-js';
import API  from './API';

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number: string;
  email: string;
  email_personnal: string;
}

const Table = () => {
  
  const [data] = createResource<Person[]>(API.getPersons);

  const handleRowClick = (index: number) => {
    // Faire quelque chose avec les données de la ligne cliquée
    console.log('Ligne cliquée :', index);
  };

  return (
    <div>
   <div class="overflow-x-auto">
      <table class="table-md">
         <thead>
            <tr>
               <th>id</th>
               <th>First name</th>
               <th>Last name</th>
               <th>gender</th>
               <th>Phone number</th>
               <th>email</th>
               <th>email personnal</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
         {/* -- row 1 -- */}
         {data()?.map((person, index) => (
         <tr data-key={index} onClick={() => handleRowClick(index)}>
            <td>{person.id}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.gender}</td>
            <td>{person.phone_number}</td>
            <td>{person.email}</td>
            <td>{person.email_personnal}</td>
            <td></td>
        </tr>
         ))}
         </tbody>
      </table>
   </div>
</div>
)};


export default Table;
