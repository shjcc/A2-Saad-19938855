Saad Hussain 19938855 
GitHub Repository Link: <a> https://github.com/shjcc/A2-Saad-19938855 </a>



**Task 1 User Interface Changes**
**<p>1. changed from "Delete" to "Delete Contact".
2. changed from "Add" to "Add user's Phone", this is dependent on what the user inputs as the contact name.
3. changed "Name" to a drop-down menu with "Mobile", "Work", "Home", "Other"
4. in the tr element of the table, change the label "Name" to "Phone Type"</p>**
<p>For task 1, I reviewed the frontend code and adjusted the relevant sections. I adjusted the button Add to add the contact's name and phone, that way, whatever the contact's name is, the button will reflect that. The next task was to convert the Name in the phone section into a drop-down menu. This just involved converting the section relating to Name into a series of drop-down menus including Mobile, Work, Home, and Other. The final task involved renaming the phones list to match the new sections like phone_type</p>
<div>
<img width="381" alt="image" src="https://github.com/user-attachments/assets/5740efa0-8624-476e-8d18-3b949a48effe">
</div>

**Task 2 API Command Demonstration**
<p>For task 2 I opened a command terminal on my local machine and entered the respective command, for example: <c>http GET http://localhost/api/contacts</c>, for more specific API commands such as getting Phones, I would specify with the contact: id. </p>
**1. Show the API command for “Show Contact”:**
<div>
<img width="325" alt="image" src="https://github.com/user-attachments/assets/b5e5d71e-2832-4f69-bdce-d4c53fe3627b">
</div>

**2. Show the API command for “Add Contact”:**
<div>
<img width="394" alt="image" src="https://github.com/user-attachments/assets/9f02b683-4871-4fc2-b687-359b3cf22229">
<img width="332" alt="image" src="https://github.com/user-attachments/assets/abdce1ac-e784-4af4-a6db-9488a7157d64">
</div>
 
**3. Show the API command for “Delete Contact”:** 
<div>
<img width="353" alt="image" src="https://github.com/user-attachments/assets/e1b7bb7d-e25b-44a7-a738-524a37e4e133">
<img width="325" alt="image" src="https://github.com/user-attachments/assets/7a38b1c3-d3be-4ac7-8328-4ee26034872f">
</div>

**4. Show the API command for “Update Contact”:** 
<div>
<img width="410" alt="image" src="https://github.com/user-attachments/assets/874c7b26-1195-4b24-a0d3-faf423b58679">
<img width="338" alt="image" src="https://github.com/user-attachments/assets/d15f4987-1c7d-4e32-856d-244685eb6b19">
</div>

**5. Show the API command for “Show Phone”:**
<div>
<img width="380" alt="image" src="https://github.com/user-attachments/assets/268b97fb-6743-4434-b5f6-52ac0c4cd959">
</div>

**6. Show the API command for “Add Phone”:** 
<div>
<img width="531" alt="image" src="https://github.com/user-attachments/assets/8eaf5ca0-8400-414c-a32a-31d5c3eceb08">
<img width="379" alt="image" src="https://github.com/user-attachments/assets/924c27a5-78bf-40af-bc79-6add10a8f7e3">
</div>

**7. Show the API command for “Delete Phone”:** 
<div>
<img width="410" alt="image" src="https://github.com/user-attachments/assets/b50b9154-d208-4cc7-aa44-41851a531106">
<img width="421" alt="image" src="https://github.com/user-attachments/assets/42945922-b930-4211-be91-740945a3e699">
</div>

**8. Show the API command for “Update Phone”:** 
<div>
<img width="588" alt="image" src="https://github.com/user-attachments/assets/da2693bf-314c-4d2d-87d9-1bc0471cc0ae">
<img width="392" alt="image" src="https://github.com/user-attachments/assets/41122a2b-e59f-453e-93cb-e070aaa262d6">
</div>

**Task 3 DataBase Modelling**
**- Modify the contacts Table:**
<p>For this task, I created a new column with the table contacts by using the command ALTER TABLE.</p>

<div>
<img width="485" alt="image" src="https://github.com/user-attachments/assets/ccad091a-2404-4b0f-9624-4903c2acfc54">
</div>
<p>added a new column named 'Address'</p>

**- Modify the phones Table:**
<p> For this task I altered the tables to include the new naming conventions like phone_type and phone_address</p>
<div>
<img width="620" alt="image" src="https://github.com/user-attachments/assets/3dcf25d9-0cbb-44cc-9c1c-f76cd1b0e3c3F">
</div>

  
**- Adjust the Front-End:**
<div>
<img width="291" alt="image" src="https://github.com/user-attachments/assets/75684307-efe8-4258-9386-faf5b552fe4f">
<div>
<p>Adjusted the code within the frontend files to reflect the new naming tables, including the address section so the user can see their address after entering it within the input form of phone_address.</p>

**- Test All APIs related to table-modified contacts and phones:** 
<p>For task 2 I opened a command terminal on my local machine and entered the respective command, this time for the new columns such as phone_type, phone_address and contact address. </p>

**Show Contacts:**
<div>
<img width="491" alt="image" src="https://github.com/user-attachments/assets/e3cea482-8bd1-46eb-a61f-640e13a7a2f8">
<div>

**Add Contacts:**
<div>
<img width="731" alt="image" src="https://github.com/user-attachments/assets/bcc719ef-ed92-4dd4-949b-5b8c0208bd2b">
</div>
  
**Delete Contacts:**
<div>
<img width="526" alt="image" src="https://github.com/user-attachments/assets/bfe7a5fd-5a77-4015-a9db-5f59d5b7b145">
</div>

**Update Contacts:**
<div>
<img width="763" alt="image" src="https://github.com/user-attachments/assets/59537f58-db43-4fde-aced-0c5181db3fc4">
</div>

**Show Phones:**
<div>
<img width="550" alt="image" src="https://github.com/user-attachments/assets/d2cb8380-d464-4e30-8dee-ce4104a3fdb1">
</div>

**Add Phones:**
<div>
<img width="776" alt="image" src="https://github.com/user-attachments/assets/2b3289f0-acc8-4279-8ae3-ef7ab845bf81">
</div>

**Delete Phones:**
<div>
<img width="587" alt="image" src="https://github.com/user-attachments/assets/8069e85e-70be-4633-9d41-87cd9d4467a5">
</div>

**Update Phones:**
<div>
<img width="821" alt="image" src="https://github.com/user-attachments/assets/a5c2630d-43ba-463e-a114-c4251e05f929">
</div> 

**Task 4 Expanding The Existing Tables**
**Table Creation: Create a new table named `companies` with the following attributes (company_id, company_name, company_address, contact_id)**
<div>
  <img width="283" alt="image" src="https://github.com/user-attachments/assets/04ae09c0-79cc-44cf-9429-fa44be4f1369">
  <img width="309" alt="image" src="https://github.com/user-attachments/assets/eee24989-4a25-46fe-8a1f-66e99cb763dd">
</div>
<p>renamed the column company_id to id to match the naming conventions of the other tables such as phone_id named as id.</p>

<div>
  <img width="298" alt="image" src="https://github.com/user-attachments/assets/bd3bc6c3-4014-4983-a878-1488a54f8e67">
</div>
<p>renamed contact_id to contactId to follow the naming structure outlined in the Phones table and to fix API requests not going through.</p>

<div>
<img width="443" alt="image" src="https://github.com/user-attachments/assets/a17332d4-cd82-43d8-9716-5e491bcc650d">
</div>
<p>was getting errors saying missing columns createdAt and updatedAt, altered the companies table to include the missing columns</p>

**API Creation: Develop four APIs to manage records in the companies table**
**<p>API Development</p>**
<div>
 
 **<p>company.routes.js:</p>**
 <img width="646" alt="image" src="https://github.com/user-attachments/assets/430ab38a-2b40-4ded-965d-bb1fe12137a8">

 **<p>company.model.js:</p>**
 <img width="642" alt="image" src="https://github.com/user-attachments/assets/e1cc91d0-beae-4a72-a117-4d113e43dc6b">
 
 **<p>company.controller.js:</p>**
 <img width="649" alt="image" src="https://github.com/user-attachments/assets/25a6f9c9-dc89-4ec7-b79a-997910bf68c7">

 **<p>app.js & index.js:</p>**
 <img width="590" alt="image" src="https://github.com/user-attachments/assets/e2f78723-bef4-4307-b400-a9b0a467c200">
 <img width="386" alt="image" src="https://github.com/user-attachments/assets/377401f3-934b-4970-aa5b-acdb0798f964">
</div>

**<p>API Demonstration (proof that data is persistent in that database)</p>**
**Show Companies:**
<div>
 <img width="404" alt="image" src="https://github.com/user-attachments/assets/6c390086-e868-4bac-9509-5571a8ec1b59">
</div>

**Add Companies:**
<div>
 <img width="749" alt="image" src="https://github.com/user-attachments/assets/d987d9e3-ca75-4f38-b466-5e4d4419938e">
</div>

**Delete Companies:**
<div>
 <img width="432" alt="image" src="https://github.com/user-attachments/assets/6bd8acf1-ebf0-4846-80fa-da9a088b709c">
</div>

**Alter Companies:**
<div>
 <img width="774" alt="image" src="https://github.com/user-attachments/assets/1b5ffd29-d3c6-4951-aeb2-0e9c4811cc30">
</div>

**Task 5 Front End**
**<p>Company.js</p>:**

<div>
<img width="721" alt="image" src="https://github.com/user-attachments/assets/00ee77a4-e57c-4030-a41a-b7b6bb40cab1">
<img width="715" alt="image" src="https://github.com/user-attachments/assets/c3289e4b-e04f-46d7-a9ab-99dcc489b8a5">
</div>

**<p>NewCompany.js:</p>**

<div>
 <img width="727" alt="image" src="https://github.com/user-attachments/assets/31b467c9-9339-41a0-adf1-e4a1c70db496">
<img width="716" alt="image" src="https://github.com/user-attachments/assets/c96741e8-1015-40e4-8595-dd62f39d504b">
</div>

**<p>CompanyList.js:</p>**

<div>
 <img width="727" alt="image" src="https://github.com/user-attachments/assets/ddff6e70-66fa-4027-b011-1204509ad41b">
</div>

**<p>Contact.js:</p>**

<div>
 <img width="724" alt="image" src="https://github.com/user-attachments/assets/72fc9399-bc34-4eb6-8def-a12df2be37d5">
<img width="726" alt="image" src="https://github.com/user-attachments/assets/be93a669-c8fd-4757-a5d6-6b1007da157e">
</div>

**<p>Testing all the developed API calls for table Company:</p>**

**Task 6 Building A New Application**

