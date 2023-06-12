import { createSignal, onCleanup } from "solid-js";

// class API {

//   static backendURL = "http://127.0.0.1:8000";

//   fetchPersons() {
//     const [persons, setPersons] = createSignal([]);

//     // Fonction pour récupérer toutes les personnes
//     async function getPersons() {
//       try {
//         const response = await fetch(`${API.backendURL}/api/persons/`);
//         const data = await response.json();
//         setPersons(data);
//       } catch (error) {
//         console.error("Une erreur s'est produite lors de la récupération des personnes :", error);
//       }
//     }

//     // Appeler la fonction getPersons lors de la création du composant
//     getPersons();
//     return persons;
//   }

//   // addPerson(personData: any) {
//   //   // Fonction pour ajouter une nouvelle personne
//   //   async function createPerson(personData: any) {
//   //     try {
//   //       const response = await fetch(`${API.backendURL}/api/persons/`, {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(personData),
//   //       });
//   //       const data = await response.json();
//   //       console.log("Nouvelle personne ajoutée :", data);
//   //     } catch (error) {
//   //       console.error("Une erreur s'est produite lors de l'ajout de la personne :", error);
//   //     }
//   //   }

//   //   // Appeler la fonction createPerson avec les données de la nouvelle personne
//   //   // createPerson(personData);
//   // }

//   // updatePerson(personId: number, updatedData: any) {
//   //   // Fonction pour mettre à jour une personne existante
//   //   async function editPerson(personId: number, updatedData: any) {
//   //     try {
//   //       const response = await fetch(`${API.backendURL}/api/persons/${personId}/`, {
//   //         method: "PUT",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(updatedData),
//   //       });
//   //       const data = await response.json();
//   //       console.log("Personne mise à jour :", data);
//   //     } catch (error) {
//   //       console.error("Une erreur s'est produite lors de la mise à jour de la personne :", error);
//   //     }
//   //   }

//   //   // Appeler la fonction editPerson avec l'ID de la personne et les données mises à jour
//   //   // editPerson(personId, updatedData);
//   // }

//   // deletePerson(personId: number) {
//   //   // Fonction pour supprimer une personne
//   //   async function removePerson(personId: number) {
//   //     try {
//   //       const response = await fetch(`${API.backendURL}/api/persons/${personId}/`, {
//   //         method: "DELETE",
//   //       });
//   //       console.log("Personne supprimée avec succès !");
//   //     } catch (error) {
//   //       console.error("Une erreur s'est produite lors de la suppression de la personne :", error);
//   //     }
//   //   }

//   //   // Appeler la fonction removePerson avec l'ID de la personne à supprimer
//   //   removePerson(personId);
//   // }
// }

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

const API = {
  getPersons,
  addPerson,
};

export default API;
