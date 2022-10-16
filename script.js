var data = [];
var edit_data;
var index;
var index_value;
var list_items = "";

//function insert the data in list
function list() {
  let list_item = "";
  data.forEach((element) => {
    list_item += `<div class="row p-2">
                  <div class="col-md-6 col-sm-12 col-lg-6 text-left">${element}</div>
                  <div class="col-md-6 col-sm-12 col-lg-6 text-right "><i class="fa fa-edit edit text-success cursor-pointer "></i> <i class="fa fa-trash cursor-pointer delete text-danger" ></i></div>
                </div>`;
  });

  list_items = document.getElementById("list-item");
  console.log(list_items);
  list_items.innerHTML = list_item;
  deleteEvent();
  editEvent();
}

// function to add new data in array
function Submit() {
  let newEntity = document.getElementById("input-item");
  if (newEntity && (newEntity.value != "" || null)) {
    data.push(newEntity.value);
    newEntity.value = "";
    list();
  } else {
    console.log("please fill input data");
  }
}

// function to clear all the data from array
function clearItem() {
  console.log("clear item called");
  if (data.length > 0) {
    data = [];
    list();
  }
}

//event handler for delete
function deleteEvent() {
  let delete_btn = document.getElementsByClassName("delete");
  if (delete_btn && delete_btn.length > 0) {
    let btn_len = delete_btn.length;
    for (let i = 0; i < btn_len; i++) {
      console.log("delete btn", delete_btn[i]);
      if (delete_btn[i]) {
        delete_btn[i].addEventListener("click", function () {
          data.splice(i, 1);
          list();
        });
      }
    }
  }
}

//FUNCTION FOR EDIT

function editEvent() {
  let edit_btn = document.getElementsByClassName("edit");
  if (edit_btn && edit_btn.length > 0) {
    let btn_len = edit_btn.length;
    for (let i = 0; i < btn_len; i++) {
      if (edit_btn[i]) {
        edit_btn[i].addEventListener("click", function () {
          index = i;
          index_value = data[i];
          let edit_element = edit_btn[i].parentElement.parentElement;
          edit_element.innerHTML = `<div class="row input-group pl-3">
          <input class="form-control "  type="text" id="edit-item">
          <div class="input-group-btn">
            <button class="btn btn-default bg-success text-white" type="button" onclick="Save()">Save</button>
          </div>
          <div class="input-group-btn">
          <button class="btn btn-default bg-danger text-white" type="button" onclick="Cancel()">Cancel</button>
          </div>
        </div>`;

          let newEntity = document.getElementById("edit-item");
          if (newEntity) {
            newEntity.value = data[i];
          }
        });
      }
    }
  }
}

// function to save edited data
function Save() {
  let newEntity = document.getElementById("edit-item");
  if (newEntity) {
    data[index] = newEntity.value;
    list();
  }
}

// fuction to cancel edit
function Cancel() {
  list();
}
