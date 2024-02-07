let info = document.getElementById("info");

// const fetchData = async () => {
//     try {
//         const response = await fetch("http://localhost:8000/personalinfo");
//         const data = await response.json();
//         //     console.log(data);
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error;
//     }
// };

// const processData = async () => {
//     const data = await fetchData();
// //     
// //     const infos = data.map((element) => `
// //     <div class="user-box" id="userBox">
// //       <h2>User Information</h2>
// //       <div id="name">Name: ${element.name}</div>
// //       <div id="age">Age: ${element.age}</div>
// //       <div id="city">City: ${element.city}</div>
// //       <div id="country">Country: ${element.country}</div>
// //     </div>
// //   `).join('');
// //   info.innerHTML = infos;
// let infos;
// const time1 = performance.now()
// for (let element of data) {
//     console.log(element);

//     infos += `
//       <div class="user-box" id="userBox">
//            <h2>User Information</h2>
//            <div id="name">Name: ${element.name}</div>
//            <div id="age">Age: ${element.age}</div>
//            <div id="city">City: ${element.city}</div>
//            <div id="country">Country: ${element.country}</div>
//       </div>
//  `;
// }
 
// info.innerHTML = infos
//   const time2 = performance.now()
//   console.log(`${time2-time1}micro seconds`)
  
// };

// processData();

const fetchData = async () => {
     const query = `
       query {
         info {
           id
           name
           age
           city
         }
       }
     `;
   
     try {
       const response = await fetch('http://localhost:8000/graphql', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ query }),
       });
   
       const data = await response.json();
       console.log(data.data.info);
       const infos = data.data.info.map((element) => `
          <div class="user-box" id="userBox">
            <h2>User Information</h2>
            <div id="name">Name: ${element.name}</div>
            <div id="age">Age: ${element.age}</div>
            <div id="city">City: ${element.city}</div>
          </div>
        `).join('');
     info.innerHTML = infos;

     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
   
   fetchData();
   