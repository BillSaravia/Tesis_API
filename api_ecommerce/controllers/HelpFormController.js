import models from "../models";

export default {
    register: async (req, res) => {
        try {
            const help_form = await models.HelpForm.create(req.body);
            res.status(200).json({
                message: "EL FORMULARIO DE AYUDA SE REGISTRÓ CORRECTAMENTE",
                help_form: help_form,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "HUBO UN ERROR",
            });
        }
    },

    update: async (req, res) => {
        try {
            let data = req.body;
            await models.HelpForm.findByIdAndUpdate({_id: req.body._id},data);
            let HelpForm = await models.HelpForm.findById({_id: req.body._id});
            res.status(200).json({
                message: "EL FORMULARIO DE AYUDA SE ACTUALIZÓ CORRECTAMENTE",
                help_form: HelpForm,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "HUBO UN ERROR",
            });
        }
    },

    list: async (req, res) => {
        try {
            var search = req.query.search;
            let HelpForms = await models.HelpForm.find({
                $or: [
                    { "motivo": new RegExp(search, "i") },
                    { "descripcion": new RegExp(search, "i") },
                ]
            }).sort({ 'createdAt': -1 });
    
            HelpForms = HelpForms.map((helpForm) => {
                return {
                    motivo: helpForm.motivo,
                    descripcion: helpForm.descripcion,
                    createdAt: helpForm.createdAt,
                    // Agrega más campos según sea necesario
                };
            });
    
            res.status(200).json({
                help_forms: HelpForms
            });
        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN PROBLEMA"
            });
            console.log(error);
        }
    },
    

    remove: async (req, res) => {
        try {
            await models.HelpForm.findByIdAndDelete({ _id: req.params._id });
            res.status(200).json({
                message: "EL FORMULARIO DE AYUDA SE ELIMINÓ CORRECTAMENTE",
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "HUBO UN ERROR",
            });
        }
    },
};