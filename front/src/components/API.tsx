const backendURL: string = "http://127.0.0.1:8000";

async function getPersons() {
  const response = await fetch(`${backendURL}/api/persons/`);
  const data = await response.json();
  return data;
}

async function addPerson(personData: any) {
  const response = await fetch(`${backendURL}/api/persons/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personData),
    });
  const data = await response.json();
  console.log("Nouvelle personne ajoutée :", data);
  return data
}

async function editPerson(personId: number, updatedData: any) {
    try {
      const response = await fetch(`${backendURL}/api/persons/${personId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      console.log("Personne mise à jour :", data);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour de la personne :", error);
    }
}

async function removePerson(personId: number) {
    try {
      const response = await fetch(`${backendURL}/api/persons/${personId}/`, {
        method: "DELETE",
      });
      console.log("Personne supprimée avec succès !");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression de la personne :", error);
    }
}

const API = {
  getPersons,
  addPerson,
  editPerson,
  removePerson
};

export default API;
