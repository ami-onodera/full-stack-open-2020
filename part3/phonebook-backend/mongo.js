import mongoose from 'mongoose'

if (process.argv.length < 3) {
  console.log('Password required as argument')
}

const password = process.argv[2]

const builtUrl = `mongodb+srv://fullstack:${password}@atkinsio-khajz.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(builtUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(() => {
    console.log(
      `\r\n added ${process.argv[3]}: ${process.argv[4]} to phonebook.`
    )
    mongoose.connection.close()
  })
}

if (process.argv.length === 4 || process.argv.length > 5) {
  console.log('Incorrect number of arguments.')
}
