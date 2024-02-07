const schemas = `
type PersonalInfo {
     id: ID!
     name: String!
     age: Int!
     city: String!
     country: String!
   }
 
   type Query {
     getInfoById (id: ID!) : PersonalInfo
   }
   type Query {
     info : [PersonalInfo]
   }
`;
module.exports = { schemas };
