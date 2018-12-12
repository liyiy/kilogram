# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Follow.destroy_all
Like.destroy_all

User.create!(username: 'demo', password: 'demopass')
User.create!(username: 'liyi', password: 'password')
User.create!(username: 'kilogram', password: 'password')
User.create!(username: 'instagram', password: 'password')
User.create!(username: 'codingirl', password: 'password')
User.create!(username: 'bananas', password: 'password')
User.create!(username: 'bananas2', password: 'password')
