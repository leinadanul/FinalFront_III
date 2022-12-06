export const getFav = () => {
    const dataLocal = localStorage.getItem("fav");
    return dataLocal ? JSON.parse(dataLocal) : [];
};

export const setFavorite = (medico) => {
    const storageFav = getFav();
    const saveFav = storageFav.filter(fav => {
        return fav.id === medico.id
    });
    if (saveFav.length === 0) {
        storageFav.push(medico)
        localStorage.setItem("fav", JSON.stringify(storageFav));
        alert("Medico guardado existente")
    }
    else {
        alert("Medico ya esta guardado")
    }
}

export const isFav = (id) => {
    const dataLocal = getFav();
    const saveFav = dataLocal.filter(fav => {
        return fav.id === id
    });
    return saveFav.length === 1;
};


export const removeFavorite = (id) => {
    let storageFav = getFav();
    const index = storageFav.findIndex(fav => fav.id === id);
    if (index !== -1) {
        storageFav.splice(index, 1);
        localStorage.setItem("fav", JSON.stringify(storageFav));
        alert("Se elimino el medico de lista de favoritos");
    }
    else {
        alert("No se puede hacer esta funcion");
    }
};

//LISTO FUNCIONA

