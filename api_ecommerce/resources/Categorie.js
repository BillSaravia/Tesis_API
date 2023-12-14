export default {
    categorie_list: (categorie) => {
        return {
            _id: categorie._id,
            title: categorie.title,
            imagen: categorie.imagen,
            imagen_home: 'https://tecshop-ecommerce-api.onrender.com'+'/api/categories/uploads/categorie/'+categorie.imagen,
            state: categorie.state,
        }
    }
}