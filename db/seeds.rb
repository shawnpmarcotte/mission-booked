# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

300.times do
  organization = Organization.new(
    name: Faker::Company.name,
    about: Faker::Lorem.paragraph,
    location: Faker::Address.full_address,
    contact: Faker::Internet.email
  )
  organization.save
end

600.times do
  event = Event.new(
    name: Faker::Company.name,
    date: Faker::Date.between(from: 3.months.ago, to: 3.months.from_now),
    about: Faker::Lorem.paragraph,
    location: Faker::Address.full_address,
    organization_id: rand(1..300)
  )
  event.save
end

User.create(email: 'admin@admin.com', password: 'password', admin: true)
User.create(email: 'some@guy.com', password: 'password')

p 'seeded'
