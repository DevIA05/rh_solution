import { createEffect, createResource, createSignal } from 'solid-js';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

import API from './API';

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

  // Get Data ------------------------------------------------------------------------------
  const [data, { mutate }] = createResource<Person[]>(API.getPersons);

  // Méthodes CRUD Table -------------------------------------------------------------------
  const addEntry = () => {
    const newId = (data()?.length ?? 0) + 1;
    const newEntry: Person = {
      id: newId,
      first_name: '',
      last_name: '',
      gender: '',
      phone_number: '',
      email: '',
      email_personnal: '',
    };
    mutate((prevData) => [...(prevData || []), newEntry]);
    API.addPerson(newEntry)
  };

  const deleteEntry = (id: number) => {
    mutate((prevData) => prevData?.filter((entry) => entry.id !== id));
    API.removePerson(id)
  };

  const updateField = (id: number, field: keyof Person, value: string, index: number) => {
    mutate((prevData) =>
      prevData?.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      ));
    const dataArray = data();
    if (dataArray && dataArray.length > index) { 
      API.editPerson(id,dataArray[index])
     }    
  };

  // Search -----------------------------------------------------------------------------------
  const [searchValue, setSearchValue] = createSignal("");
  const [filteredData, setFilteredData] = createSignal<Person[]>([]);

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  createEffect(() => {
    const search = searchValue().toLowerCase();
    const newData = data()?.filter(
      (person) =>
        person.first_name.toLowerCase().includes(search) ||
        person.last_name.toLowerCase().includes(search) ||
        person.email.toLowerCase().includes(search)
    );

    setFilteredData(newData ?? []);
  });
  
  

  return (
    <div class="p-4">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-lg font-semibold">CRUD Table</h2>
        <div class="flex items-center justify-center flex-grow">
          <input type="text" value={searchValue()} onInput={handleSearchChange} placeholder="Rechercher..." />
        </div>
        <button class="fixed top-0 right-0 z-50 w-20 h-20 rounded-bl-full flex items-center justify-center bg-emerald-700" onClick={addEntry}>
          <span class="transform rotate-45">Add Entry</span>
        </button>
      </div> 
      <table class="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>gender</th>
            <th>phone_number</th>
            <th>email</th>
            <th>email personnal</th>
          </tr>
        </thead>
        <tbody>
        {filteredData()?.map((entry, index) => (
            <tr data-key={entry.id}>
              <td>
                <span> {entry.id} </span>                
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.first_name}
                onBlur={(e) =>
                  updateField(entry.id, 'first_name', e.target.value, index)}
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.last_name}
                onBlur={(e) =>
                  updateField(entry.id, 'last_name', e.target.value, index)}
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.gender}
                onBlur={(e) =>
                  updateField(entry.id, 'gender', e.target.value, index)}
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.phone_number}
                onBlur={(e) =>
                  updateField(entry.id, 'phone_number', e.target.value, index)}
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.email}
                onBlur={(e) =>
                  updateField(entry.id, 'email', e.target.value, index)}
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.email_personnal}
                onBlur={(e) =>
                  updateField(entry.id, 'email_personnal', e.target.value, index)}
                />
              </td>
              <td>
                <button
                  class="btn btn-sm btn-primary mr-2"
                  onClick={() => deleteEntry(entry.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
function computed(arg0: () => Person[] | undefined) {
  throw new Error('Function not implemented.');
}

