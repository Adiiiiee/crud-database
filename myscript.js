// myscript.js
import { getDatabase, ref, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { database } from "./fireConfig.js";

var UniqueIDV, FirstNameV, MiddleNameV, SurNameV, AddressV, EmailV;

function readFom() {
  UniqueIDV = document.getElementById("UniqueID").value;
  FirstNameV = document.getElementById("FirstName").value;
  MiddleNameV = document.getElementById("MiddleName").value;
  SurNameV = document.getElementById("SurName").value;
  AddressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  console.log(UniqueIDV, FirstNameV, MiddleNameV, SurNameV, AddressV, EmailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  set(ref(database, "student/" + UniqueIDV), {
    UniqueID: UniqueIDV,
    FirstName: FirstNameV,
    MiddleName: MiddleNameV,
    SurName: SurNameV,
    Address: AddressV,
    Email: EmailV,
  });
  Swal.fire("Data Inserted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  onValue(ref(database, "student/" + UniqueIDV), (snapshot) => {
    const data = snapshot.val();
    document.getElementById("UniqueID").value = data.UniqueID;
    document.getElementById("FirstName").value = data.FirstName;
    document.getElementById("MiddleName").value = data.MiddleName;
    document.getElementById("SurName").value = data.SurName;
    document.getElementById("Address").value = data.Address;
    document.getElementById("Email").value = data.Email;
  });
};

document.getElementById("update").onclick = function () {
  readFom();

  update(ref(database, "student/" + UniqueIDV), {
    UniqueID: UniqueIDV,
    FirstName: FirstNameV,
    MiddleName: MiddleNameV,
    SurName: SurNameV,
    Address: AddressV,
    Email: EmailV,
  });
  Swal.fire("Data Updated!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("delete").onclick = function () {
  readFom();

  remove(ref(database, "student/" + UniqueIDV));
  Swal.fire("Data Deleted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
