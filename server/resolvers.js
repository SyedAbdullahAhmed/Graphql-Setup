const data = require("./data");

const resolvers = {
     Query: {
          getInfoById : (parent,{id}) => data.personalInfo.find((info) => info.id === id),
          info : () => {
               return data.personalInfo
          }
     },
};

module.exports = { resolvers };
