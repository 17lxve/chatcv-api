async function query(data?: any) {
  const response = await fetch(
    "http://localhost:3000/api/v1/vector/upsert/f72301d1-22d0-4ca9-806e-32186099c4ec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const result = await response.json();
  return result;
}

// query({
//   "overrideConfig": {
//       "endpoint": "example",
//       "apiKey": "example",
//       "modelName": "example",
//       "folderPath": "example",
//   }
// }).then((response) => {
//     console.log(response);
// });

export default query;
