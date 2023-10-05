const { InsertQueryBuilder } = require("typeorm");
const categoryService = require('../services/category.services')

exports.findAll = async (req, res) => {
    console.log("Find all categories");

    try {
        const result = await categoryService.findAll();
        res.status(200).json({ status: true, data: result })
        console.log("Success in finding all categories");
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log("Problem in finding all categories")
    }

}

exports.findOne = async (req, res) => {
    console.log("Find category with id ", id);
    const id = req.params.id;

    try {
        const result = await categoryService.findOne(id);
        res.status(200).json({ status: true, data: result })
        console.log("Success in finding the category with id: ", id);
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log("Problem in finding all categories")
    }

}

exports.create = async(req, res) => {
    console.log("Insert new category name");
    const name = req.body.name
    try {
        const result = categoryService.create(name);
        res.status(200).json({ status: true, data: result })
        console.log("Success in inserting category");
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log("Problem in saving category")
    }
}

exports.update = async(req, res) => {
    console.log("Update category with id");
    const id = req.params.id
    try {
        const result = await categoryService.update(name);
        res.status(200).json({ status: true, data: result })
        console.log("Success in updating category");
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log("Problem in updating category")
    }
}

exports.delete = async(req, res) => {
    console.log("Delete category with id ", id);
    const id = req.params.id
    try {
        const result = await categoryService.deleteCategory(id);
        res.status(200).json({ status: true, data: result })
        console.log("Success in deleting category");
    } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.log("Problem in deleting category")
    }
}