const knex = require("../database/index");

class UserController{
   async index(request, response){
      const users = await knex("users");

      response.json(users);
   }

   async create(request, response){
      const {username} = request.body;

      const user = await knex("users").insert({
         username
      });
      response.json(user);
   }

   async show(request, response){
      const {id} = request.params;

      const user = await knex('users').where({id}).first();

      return response.json(user);
   }

   async delete(request, response){
      const {id} = request.params;
      await knex('users').where({id}).delete();

      return response.json();
   }

   async update(request, response){
      const {id} = request.params;
      const {username} = request.body;

      const user = await knex("users").where({id}).update({
         username
      });

      response.json(user);
   }
}

module.exports = UserController;