# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

xtable = XTable.create!(name: 'Ticket Tracker')
table_def = TableDefinition.create!(x_table: xtable, name: 'Issue Definition', description: 'This is an issue ticket')
table_def.x_columns << StringInput.create!(name: 'title', description: 'This is the title of the issue')
table_def.x_columns << StringInput.create!(name: 'description', description: 'This is the description of the issue')
table_def.x_columns << NumberInput.create!(name: 'age', description: 'age of your ticket')

row = Row.create!(name: 'row', x_table: xtable)
row.cells << StringValue.create!(value: 'title of first issue')
row.cells << StringValue.create!(value: 'good description here here here...')
row.cells << NumberValue.create!(value: 3)

