
const bearer="Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWlkYSBIeXNlbmkiLCJkaXZpc2lvbiI6IkFMTCIsInJvbGUiOiJBRE1JTiIsImxhc3RfbmFtZSI6Ikh5c2VuaSIsImVtcGxveWVlSWQiOiIzNzgyOTMiLCJwb3NpdGlvbiI6IklUIFNwZWNpYWxpc3QiLCJmaXJzdF9uYW1lIjoiQWlkYSIsImVtYWlsIjoiYWlkYWh5c2VuaUBrb2RlbGFicy5jb20iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmx1ZXRlYW0tZGV2IiwiYXVkIjoiYmx1ZXRlYW0tZGV2IiwiYXV0aF90aW1lIjoxNjc5MzE0NzMwLCJ1c2VyX2lkIjoiNjNhMWE5MjBiNDI3NGE1NWI0MDVlNzdiIiwic3ViIjoiNjNhMWE5MjBiNDI3NGE1NWI0MDVlNzdiIiwiaWF0IjoxNjc5MzE4MzI4LCJleHAiOjE2NzkzMjE5MjgsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFpZGFoeXNlbmlAa29kZWxhYnMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.ARQmRQhJICzdkXJUWy7K4BHlW7-VyhCR7RCDxfg40Ac2MwbaDlEUXumkhdU8Rcb35PBfhxbXR2CDI5_Vy6D_QOwePrPkQ2RKb72RHRuG_fxVD6jQOhHfiVBLVJL_K4x9rzqJkvuZsgzF22rMxWwmaSL-2_hsamIQdaWY7MAYYJg6z-5RtAydBursMeEp3W4E2kvyUxV0dBFNUsoh55Ih5xgsfuxj1eAEqgX40QMx0s7KFm0cDkOhu3m8QGo95Re517MOVheGxJoyw4BytVoBgwGHZSDjZIID0UhAkEZChG4rin9ulQuPSB9uHwSeTFa1BV8ridb6MTNFdlrQp4e-Bw"
let newResource;

cy.api({
  method: 'POST',
  url: 'https://api.example.com/resources',
  headers: {
    'Authorization': `Bearer ${bearer}`,
    'Content-Type': 'application/json'
  },
  body: {
    'name': 'New Resource'
  }
}).then(response => {
  // Store the ID of the newly created resource
  newResource = response.body.id;

  // Make a GET request to retrieve the resource
  cy.api({
    method: 'GET',
    url: `https://api.example.com/resources/${newResource}`,
    headers: {
      'Authorization': `Bearer ${bearer}`
    }
  }).then(response => {
    // Log the response body to the console
    cy.log(response.body);
  });
});

