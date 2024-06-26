async function query(data: { question: string }) {
  const response = await fetch(
    // "http://saphia.digitlab.info/api/v1/prediction/f72301d1-22d0-4ca9-806e-32186099c4ec",
    "http://localhost:3000/api/v1/prediction/f72301d1-22d0-4ca9-806e-32186099c4ec",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  try {
    const result = await response.json().catch((err) => console.error(err));
    result["statusCode"] = 200;
    // console.log("FUCK", result)
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// query({"question": "Hey, how are you?"}).then((response) => {
//     console.log(response);
// });

export default query;
