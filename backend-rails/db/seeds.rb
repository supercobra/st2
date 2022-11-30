# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding...'
account = Account.create!(name: 'BigCo')
workspace = Workspace.create!(name: 'Customer service', account: account)

# Create a table with the following columns:
xtable = Table.create!(name: 'Ticket Tracker', workspace: workspace)
col1 = Kolumn.create!(table: xtable, name: 'title', value_type: StringInput.to_s, width_in_px: 200)
col2 = Kolumn.create!(table: xtable, name: 'description', value_type: StringInput.to_s)
col3 = Kolumn.create!(table: xtable, name: 'age', value_type: NumberInput.to_s)

# Add a summary row for col3
KolumnSummary.create!(kolumn: col3, value: KolumnSummary::AVG)

# Add one row and cells data to the table
row = Row.create!(table: xtable)
row.cells << StringValue.create!(value: 'title of first issue')
row.cells << StringValue.create!(value: 'good description here here here...')
row.cells << NumberValue.create!(value: 3)

# Add a second row and cells data to the table
row = Row.create!(table: xtable)
row.cells << StringValue.create!(value: 'title of second issue')
row.cells << StringValue.create!(value: 'better description here here here...')
row.cells << NumberValue.create!(value: 33)

puts 'Done!'
