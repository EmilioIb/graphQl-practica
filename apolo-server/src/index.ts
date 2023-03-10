import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Student {
    name: String
    lastName: String
    age: Int
    gender: String
    score: Float
  }

  type Query{
    students: [Student],
    countStudents: Int,
    findStudentByName(name: String): Student,
    findStudentsByGender(gender: String): [Student],
    findStudentByAge(name: String): [Student],
    getStudentsOlderThan(age: Int): [Student]
    getApprovedStudents: [Student]
  }
`;

const students = [
  {
    name: "Armando",
    lastName: "Revueltas",
    age: 32,
    gender: "M",
    score: 6.0,
  },
  {
    name: "Ramiro",
    lastName: "Mántico",
    age: 28,
    gender: "M",
    score: 9.4,
  },
  {
    name: "Eduardo",
    lastName: "Rmido",
    age: 49,
    gender: "M",
    score: 8.9,
  },
  {
    name: "Jose",
    lastName: "Ntido",
    age: 17,
    gender: "M",
    score: 10.0,
  },
  {
    name: "Julieta",
    lastName: "Rdada",
    age: 22,
    gender: "F",
    score: 8.5,
  },
];

const resolvers = {
  Query: {
    students: () => students,
    countStudents: () => students.length,
    findStudentByName: (root, args) => {
      const { name } = args;
      return students.find((student) => student.name === name);
    },
    getStudentsOlderThan: (root, args) => {
      const { age } = args;
      return students.filter((student) => student.age > age);
    },
    getApprovedStudents: () => {
      return students.filter((student) => student.score > 6.0);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
