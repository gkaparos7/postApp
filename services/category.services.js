const CategoryEntity = require('../model/Category').CategoryEntity
const dataSource = require('../connect').dataSource

function findAll() {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select('category')
        .from(CategoryEntity, 'category')
        .getMany()

    return result;
}

function create(name) {

    console.log("Service category Create ", name);

    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values([
            { name: name }
        ])
        .execute()
        .catch(err => console.log(error));

    return result;
}

function findOne(idValue) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select('ct')
        .from(CategoryEntity, 'ct')
        .where('ct.id = :x', { x: idValue })
        .getOne()

        return result
}

function update(data) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .update(CategoryEntity)
        .set({name: data.name})
        .where('id= :id', {id: data.id})
        .execute()
        .catch(error => console.log(error));

        return result
}

function deleteCategory(idValue) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .delete()
        .from(CategoryEntity)
        .where('id= :x', {x: idValue})
        .execute()
        .catch(error => console.log(error));

        return result;
}

module.exports = { findAll, create, findOne, update, deleteCategory }

