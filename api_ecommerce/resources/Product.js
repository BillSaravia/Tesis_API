export default {
    product_list: (product, variedades = []) => {
      // Check if product.galerias is defined before mapping over it
      let GALERIAS = product.galerias ? product.galerias.map((galeria) => {
        galeria.imagen = process.env.URL_W + '/api/products/uploads/product/' + galeria.imagen;
        return galeria;
      }) : [];

      // Check if product.portada is defined
      const portadaUrl = product.portada ? process.env.URL_W + product.portada : '';

      // Use a safer method to get a random index in case GALERIAS is empty
      const VAL = GALERIAS.length > 0 ? Math.floor(Math.random() * GALERIAS.length) : 0;
      const IMAGEN_TWO = GALERIAS.length > 0 ? GALERIAS[VAL].imagen : '';

      // Initialize avg_review, count_review, and CampaingDiscount
      const avg_review = product.avg_review || 0;
      const count_review = product.count_review || 0;
      const CampaingDiscount = product.campaign_discount || 0;

      return {
        _id: product._id,
        title: product.title,
        sku: product.sku,
        slug: product.slug,
        imagen: portadaUrl,
        categorie: product.categorie,
        price_soles: product.price_soles,
        price_usd: product.price_usd,
        stock: product.stock,
        description: product.description,
        resumen: product.resumen,
        tags: product.tags ? JSON.parse(product.tags) : [],
        type_inventario: product.type_inventario,
        state: product.state,
        variedades: variedades,
        imagen_two: IMAGEN_TWO,
        galerias: GALERIAS,
        avg_review: avg_review,
        count_review: count_review,
        campaing_discount: CampaingDiscount,
      };
    },
  };
