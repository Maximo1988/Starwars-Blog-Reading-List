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
	  planetas: [],
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
        fetch("https://www.swapi.tech/api/people/")
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
    },
  };
};

export default getState;
