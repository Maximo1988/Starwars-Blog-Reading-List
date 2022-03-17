const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      personajes: [],
      personaje: [],
	    planetas: [],
      planeta: [],
      naves: [],
      nave: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },

      ObtenerPersonajes: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((response) => {
            setStore({ personajes: response.results });
          })
          .catch(console.error());
      },

      ObtenerPlanetas: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((response) => {
            setStore({ planetas: response.results });
          })
          .catch(console.error());
      },

      ObtenerNaves: () => {
        fetch("https://www.swapi.tech/api/starships/")
          .then((res) => res.json())
          .then((response) => {
            setStore({ naves: response.results });
          })
          .catch(console.error());
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getCharacter: id => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({personaje: data.result });
					})
					.catch(err => err);
			},
      getPlanet: id => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planet/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({planet: data.result });
					})
					.catch(err => err);
			},
      getStarship: id => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/starship/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({starship: data.result });
					})
					.catch(err => err);
			},
    },
  };
};

export default getState;
