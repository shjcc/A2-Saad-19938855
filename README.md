# README.md
Saad Hussain 19938855 
GitHub Repository Link: https://github.com/shjcc/A2-Saad-19938855

<br/>

**Task 1 User Interface Changes**
1. changed from "Delete" to "Delete Contact".
2. changed from "Add" to "Add user's Phone", this is dependent on what the user inputs as the contact name.
3. changed "Name" to a drop-down menu with "Mobile", "Work", "Home", "Other"
4. in the <tr> element of the table, change the label "Name" to "Phone Type"

<img width="381" alt="image" src="https://github.com/user-attachments/assets/5740efa0-8624-476e-8d18-3b949a48effe">

**Task 2 API Command Demonstration**
1. Show the API command for “Show Contact”
<img width="325" alt="image" src="https://github.com/user-attachments/assets/b5e5d71e-2832-4f69-bdce-d4c53fe3627b">

2. Show the API command for “Add Contact”
<img width="394" alt="image" src="https://github.com/user-attachments/assets/9f02b683-4871-4fc2-b687-359b3cf22229">
<img width="332" alt="image" src="https://github.com/user-attachments/assets/abdce1ac-e784-4af4-a6db-9488a7157d64">
 
3. Show the API command for “Delete Contact” 
<img width="353" alt="image" src="https://github.com/user-attachments/assets/e1b7bb7d-e25b-44a7-a738-524a37e4e133">
<img width="325" alt="image" src="https://github.com/user-attachments/assets/7a38b1c3-d3be-4ac7-8328-4ee26034872f">

4. Show the API command for “Update Contact” 
<img width="410" alt="image" src="https://github.com/user-attachments/assets/874c7b26-1195-4b24-a0d3-faf423b58679">
<img width="338" alt="image" src="https://github.com/user-attachments/assets/d15f4987-1c7d-4e32-856d-244685eb6b19">

5. Show the API command for “Show Phone”
<img width="380" alt="image" src="https://github.com/user-attachments/assets/268b97fb-6743-4434-b5f6-52ac0c4cd959">

6. Show the API command for “Add Phone” 
<img width="531" alt="image" src="https://github.com/user-attachments/assets/8eaf5ca0-8400-414c-a32a-31d5c3eceb08">
<img width="379" alt="image" src="https://github.com/user-attachments/assets/924c27a5-78bf-40af-bc79-6add10a8f7e3">

7. Show the API command for “Delete Phone” 
<img width="410" alt="image" src="https://github.com/user-attachments/assets/b50b9154-d208-4cc7-aa44-41851a531106">
<img width="421" alt="image" src="https://github.com/user-attachments/assets/42945922-b930-4211-be91-740945a3e699">

8. Show the API command for “Update Phone” 
<img width="588" alt="image" src="https://github.com/user-attachments/assets/da2693bf-314c-4d2d-87d9-1bc0471cc0ae">
<img width="392" alt="image" src="https://github.com/user-attachments/assets/41122a2b-e59f-453e-93cb-e070aaa262d6">


**Task 3 DataBase Modelling**
**- Modify the contacts Table:**
<img width="485" alt="image" src="https://github.com/user-attachments/assets/ccad091a-2404-4b0f-9624-4903c2acfc54">
added a new column named 'Address'

**- Modify the phones Table:**
<img width="620" alt="image" src="https://github.com/user-attachments/assets/3dcf25d9-0cbb-44cc-9c1c-f76cd1b0e3c3">
renamed 'name' to 'phone_type' and 'number' to 'phone_number' 

  
**- Adjust the Front-End:**

<img width="291" alt="image" src="https://github.com/user-attachments/assets/75684307-efe8-4258-9386-faf5b552fe4f">

 included the address tag and renamed the phone list to phone type and phone number

**- Test All APIs related to table-modified contacts and phones:** 
**Show Contacts**
<img width="491" alt="image" src="https://github.com/user-attachments/assets/e3cea482-8bd1-46eb-a61f-640e13a7a2f8">
**Add Contacts**
<img width="731" alt="image" src="https://github.com/user-attachments/assets/bcc719ef-ed92-4dd4-949b-5b8c0208bd2b">
  
**Delete Contacts**
<img width="526" alt="image" src="https://github.com/user-attachments/assets/bfe7a5fd-5a77-4015-a9db-5f59d5b7b145">

**Update Contacts**
<img width="763" alt="image" src="https://github.com/user-attachments/assets/59537f58-db43-4fde-aced-0c5181db3fc4">

**Show Phones**
<img width="550" alt="image" src="https://github.com/user-attachments/assets/d2cb8380-d464-4e30-8dee-ce4104a3fdb1">

**Add Phones**
<img width="776" alt="image" src="https://github.com/user-attachments/assets/2b3289f0-acc8-4279-8ae3-ef7ab845bf81">

**Delete Phones**
<img width="587" alt="image" src="https://github.com/user-attachments/assets/8069e85e-70be-4633-9d41-87cd9d4467a5">

**Update Phones**
<img width="821" alt="image" src="https://github.com/user-attachments/assets/a5c2630d-43ba-463e-a114-c4251e05f929">

  
**Task 4 Expanding The Existing Tables**

**Task 5 Front End**

**Task 6 Building A New Application**










## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
http post http://localhost/api/contacts name="Choiru"
        
choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```
2 Get contacts API  (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]


```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash





```

4. Show/create the API command to edit the contacts (PUT)
```
http get http://localhost/api/contacts/1/phones

```

### Phone API
