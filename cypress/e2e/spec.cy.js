const bearer= "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWlkYSBIeXNlbmkiLCJkaXZpc2lvbiI6IkFMTCIsInJvbGUiOiJBRE1JTiIsImxhc3RfbmFtZSI6Ikh5c2VuaSIsImVtcGxveWVlSWQiOiIzNzgyOTMiLCJwb3NpdGlvbiI6IklUIFNwZWNpYWxpc3QiLCJmaXJzdF9uYW1lIjoiQWlkYSIsImVtYWlsIjoiYWlkYWh5c2VuaUBrb2RlbGFicy5jb20iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmx1ZXRlYW0tZGV2IiwiYXVkIjoiYmx1ZXRlYW0tZGV2IiwiYXV0aF90aW1lIjoxNjc4Nzk2NTg0LCJ1c2VyX2lkIjoiNjNhMWE5MjBiNDI3NGE1NWI0MDVlNzdiIiwic3ViIjoiNjNhMWE5MjBiNDI3NGE1NWI0MDVlNzdiIiwiaWF0IjoxNjc5MDYwNzYzLCJleHAiOjE2NzkwNjQzNjMsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFpZGFoeXNlbmlAa29kZWxhYnMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.D5jAnA868TP0fOK3y70ldHJA4srSRnr6MEnthe_AwLMBn0RJKb9ya7p2eS3CviL2Uda7t4ajNQWKtq1vTUJApbwKgyngKeTIxRwSSTGYPcM5mCi0Ns7Jp_1gePyGDKmZwh83ze9mcUKLE6mM9_kqr3CZNLXFBvud5ipAlL5o_W71heHon_38FbscDqng4csYRWdGidptCuAfyVR202E0n52QHfLTEv1Zj77h-blb9iJtjxzm1djFtgLCgrYcmzcyr2yDBD6jF1EQFC6xqgFHo2P4iVOFrSWMvUO6ZoDSKTfj8Hekj7cz7QXDhXgqsRxAe9cz3f3HCjbIAwNgSkdV9g"
//Construction Details Controller
describe('GET API Test for team', () => {
  it('should return a successful response', () => {
      cy.api({method: 'GET', url: '/projects/construction/63fe04218c8f0b04e9d1250d/team', headers: {
      'Authorization':`Bearer ${bearer}`}}).then((response) => {
        expect(response.status).to.eq(200) // Assert response status

  
      })
    })

      it('GET API Test for details', () => {
        cy.api({method: 'GET', url:  '/projects/construction/63fe04218c8f0b04e9d1250d/details', headers: {
        'Authorization':`Bearer ${bearer}`}}).then((response) => {
          expect(response.status).to.eq(200)
        })
  })

  it('GET API Test for team/clients', () => {
    cy.api({method: 'GET', url:  '/projects/construction/63fe04218c8f0b04e9d1250d/team/client', headers: {
    'Authorization':`Bearer ${bearer}`}}).then((response) => {
      expect(response.status).to.eq(200)
})
})
})

describe('GET API Test for team', () => {
  it.only('should return a successful response', () => {
      cy.api({method: 'GET', url: '/clients', headers: {
      'Authorization':`Bearer ${bearer}`}}).then((response) => {
        expect(response.status).to.eq(200) // Assert response status

  
      })
    })})

//CLIENT EMPLOYEE CONTROLLER

describe('GET API Test for UserClients', () => {
  it('should return a successful response', () => {
      cy.api({method: 'GET', url:  '/userClients?limit=2&page=1', headers: {
      'Authorization':`Bearer ${bearer}`}}).then((response) => {
        expect(response.status).to.eq(200) // Assert response status
        //expect(response.body).to.have.property('data') // Assert response body

  
      })
    })
    let newResource;
      it('POST and GET API Test for team', () => {
        // Make POST request to create a new resource
        cy.api({
          method: 'POST',
          url: '/team',
          body: {
              "zip": "string",
              "stateAbbr": "string",
              "Country": "ff",
              "otherInfo": "string",
              "pOBox": true,
              "city": "string",
              "Country Abbr.": "string",
              "street": "string",
              "state": "string",
              "updatedAt": "2023-03-16",
              "acronym": "string",
              "assignmentDate": "2023-03-16",
              "email": "aidahyseni+17@kodelabs.com",
              "firstName": "fww33fr",
              "lastName": "rfr",
              "employeeId": "4591578",
              "phoneNumbers": [
                {
                  "type": "Mobile",
                  "number": "(713) 341-4445",
                  "ext": "45"
                }
              ],
              "position": "Accounts Payable Manager",
              "role": "ACCOUNTING",
              "settings": [
                {
                  "actionType": "ACUMATICA_EVENT_FAILED",
                  "email": true,
                  "name": "ahah",
                  "notifId": "52455565",
                  "pushNotif": true
                }
              ],
              "fullName": "string",
              "division": "ALL",
              "office": "string",
              "region": {
                "updatedAt": "2023-03-16",
                "name": "string",
                "number": "string",
                "states": [
                  "string"
                ]
              }
            

            
          },
          headers: {
            'Authorization':`Bearer ${bearer}`}}).then((response) => {
          // Save the ID value from the response as a variable
          newResource = response.body.id
          //const resourceId = cy.wrap(response.body).its('lastName')
      
          // Make GET request to retrieve the resource by ID
          cy.api({
            method: 'GET',
            url: `/team/${newResource}`, headers: {
              'Authorization':`Bearer ${bearer}`}
          }).then((response) => {
            // Check that the response status is 200 OK
            expect(response.status).to.eq(200)
            cy.log(response.body)
      
            // Check that the response body contains the correct resource data
           // expect(response.body.name).to.eq('rfr')
          })
        })
      })
    })
