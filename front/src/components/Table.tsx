import { createResource, createSignal } from 'solid-js';
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
  const [data, { mutate }] = createResource<Person[]>(API.getPersons);

  const addEntry = () => {
    const newId = (data()?.length ?? 0) + 1;
    const newEntry: Person = {
      id: newId,
      first_name: 'first_name',
      last_name: 'last_name',
      gender: 'gender',
      phone_number: 'phone_number',
      email: 'email',
      email_personnal: 'email_personnal',
    };
    mutate((prevData) => [...(prevData || []), newEntry]);
    API.addPerson(newEntry)
  };

  const deleteEntry = (id: number) => {
    mutate((prevData) => prevData?.filter((entry) => entry.id !== id));
  };

  const updateField = (id: number, field: keyof Person, value: string) => {
    mutate((prevData) =>
      prevData?.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <div class="p-4">
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-semibold">CRUD Table</h2>
        <button class="btn btn-primary" onClick={addEntry}>
          Add Entry
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
          {data()?.map((entry) => (
            <tr data-key={entry.id}>
              <td>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  value={entry.id}
                  onInput={(e) =>
                    updateField(entry.id, 'id', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.first_name}
                  onInput={(e) =>
                    updateField(entry.id, 'first_name', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.last_name}
                  onInput={(e) =>
                    updateField(entry.id, 'last_name', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.gender}
                  onInput={(e) =>
                    updateField(entry.id, 'gender', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.phone_number}
                  onInput={(e) =>
                    updateField(entry.id, 'phone_number', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.email}
                  onInput={(e) =>
                    updateField(entry.id, 'email', e.target.value)
                  }
                />
              </td>
              <td>
                <input type="text" class="input input-bordered w-full"
                value={entry.email_personnal}
                  onInput={(e) =>
                    updateField(entry.id, 'email_personnal', e.target.value)
                  }
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
